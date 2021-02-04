import { ApolloServer } from 'apollo-server-express'
import express from 'express'
import { schema } from './schema'
import { createContext } from './context'
import { makeUser } from './prismaraw'

// new ApolloServer({ schema, context: createContext }).listen(
//   { port: 4000 },
//   () =>
//     console.log(
//       `🚀 Server ready at: http://localhost:4000\n⭐️ See sample queries: http://pris.ly/e/ts/graphql-apollo-server#using-the-graphql-api`,
//     ),
// )

// new ApolloServer({ schema, context: createContext })
;(async () => {
  const app = express()
  const apolloServer = new ApolloServer({ schema, context: createContext })

  apolloServer.applyMiddleware({ app })

  app.get('/', (req, res) => {
    res.send('ello!')
  })

  app.get('/prisma', (req, res) => {
    const { admin } = req.query
    if (admin) {
      makeUser(true).then((user) => res.send(user))
    }
    makeUser()
  })

  app.listen(4000, () => {
    console.log('express listening on 4000')
  })
})()
