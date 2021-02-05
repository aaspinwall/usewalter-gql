import {
  intArg,
  makeSchema,
  nonNull,
  nullable,
  objectType,
  stringArg,
} from 'nexus'
import { nexusPrisma } from 'nexus-plugin-prisma'

const User = objectType({
  name: 'User',
  definition(t) {
    t.model.id()
    t.model.email()
    t.model.superuser()
    t.model.posts({ pagination: false })
    t.model.profile()
    t.model.resident()
    t.model.password()
  },
})

const Resident = objectType({
  name: 'Resident',
  definition(t) {
    t.model.email()
    t.model.unit()
    t.model.name()
    t.model.telephone()
    t.model.timeForNotif()
    t.model.user()
    t.model.package()
  },
})

const Package = objectType({
  name: 'Package',
  definition(t) {
    t.model.id()
    t.model.delivered()
    t.model.description()
    t.model.unit()
  },
})

const Post = objectType({
  name: 'Post',
  definition(t) {
    t.model.id()
    t.model.title()
    t.model.content()
    t.model.published()
    t.model.author()
    t.model.authorId()
  },
})

const Profile = objectType({
  name: 'Profile',
  definition(t) {
    t.model.id()
    t.model.bio()
    t.model.user()
  },
})

const Query = objectType({
  name: 'Query',
  definition(t) {
    //crud defaults
    t.crud.post()
    t.crud.package()
    t.crud.packages()
    t.crud.users()
    t.crud.residents()

    t.field('getResidentByUserID', {
      type: 'User',
      args: {
        id: intArg(),
      },
      resolve: (_, { id }, ctx) => {
        return ctx.prisma.user.findUnique({
          where: { id: Number(id) },
        })
      },
    })

    t.list.field('getResidentDirectory', {
      type: 'Resident',
      resolve: (_, args, ctx) => {
        return ctx.prisma.resident.findMany({ take: 100 })
      },
    })

    t.field('validateUserCredentials', {
      type: 'User',
      args: {
        email: stringArg(),
        password: stringArg(),
      },
      resolve: (_, { email, password }, ctx) => {
        return ctx.prisma.user.findFirst({
          where: {
            AND: [
              { email: { equals: email } },
              { password: { equals: password } },
            ],
          },
        })
      },
    })

    t.list.field('notDelivered', {
      type: 'Package',
      resolve: (_, args, ctx) => {
        return ctx.prisma.package.findMany({
          where: { delivered: false },
        })
      },
    })

    t.list.field('feed', {
      type: 'Post',
      resolve: (_, args, ctx) => {
        return ctx.prisma.post.findMany({
          where: { published: true },
        })
      },
    })

    t.list.field('filterPosts', {
      type: 'Post',
      args: {
        searchString: nullable(stringArg()),
      },
      resolve: (_, { searchString }, ctx) => {
        return ctx.prisma.post.findMany({
          where: {
            OR: [
              { title: { contains: searchString } },
              { content: { contains: searchString } },
            ],
          },
        })
      },
    })
  },
})

const Mutation = objectType({
  name: 'Mutation',
  definition(t) {
    t.crud.createOneUser({ alias: 'signupUser' })

    t.crud.deleteOneUser({ alias: 'deleteUser' })

    t.crud.createOneResident()

    t.crud.deleteOnePost()

    t.crud.createOnePackage()
    t.crud.updateOnePackage()

    t.field('createDraft', {
      type: 'Post',
      args: {
        title: nonNull(stringArg()),
        content: stringArg(),
        authorEmail: nonNull(stringArg()),
      },
      resolve: (_, { title, content, authorEmail }, ctx) => {
        return ctx.prisma.post.create({
          data: {
            title,
            content,
            published: false,
            author: {
              connect: { email: authorEmail },
            },
          },
        })
      },
    })

    t.nullable.field('publish', {
      type: 'Post',
      args: {
        id: intArg(),
      },
      resolve: (_, { id }, ctx) => {
        return ctx.prisma.post.update({
          where: { id: Number(id) },
          data: { published: true },
        })
      },
    })

    t.nullable.field('setDelivered', {
      type: 'Package',
      args: {
        id: intArg(),
      },
      resolve: (_, { id }, ctx) => {
        return ctx.prisma.package.update({
          where: { id: Number(id) },
          data: { delivered: true },
        })
      },
    })
  },
})

export const schema = makeSchema({
  types: [Query, Mutation, Post, User, Profile, Package, Resident],
  plugins: [nexusPrisma({ experimentalCRUD: true })],
  outputs: {
    schema: __dirname + '/../schema.graphql',
    typegen: __dirname + '/generated/nexus.ts',
  },
  contextType: {
    module: require.resolve('./context'),
    export: 'Context',
  },
  sourceTypes: {
    modules: [
      {
        module: '@prisma/client',
        alias: 'prisma',
      },
    ],
  },
})
