import { PrismaClient } from '@prisma/client'
import rand from 'lodash/random'
import lowerCase from 'lodash/toLower'
import faker from 'faker'

const fakeEmail = lowerCase(faker.internet.email())
const fakePassword = faker.internet.password()

const prisma = new PrismaClient()

export async function makeUser(isAdmin = false) {
  try {
    const user = await prisma.user.create({
      data: {
        email: fakeEmail,
        password: fakePassword,
        super: isAdmin,
      },
    })
    console.log(user)
    return user
  } catch (error) {
    console.log('Something went wrong when trying to create a new user', error)
  }
}
