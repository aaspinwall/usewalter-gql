import { ApolloServer } from 'apollo-server-express'
import express from 'express'
import { schema } from './schema'
import { createContext } from './context'
import { makeUser } from './prismaraw'
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
    makeUser().then((user) => res.send(user))
  })

  app.listen(4000, () => {
    console.log('express listening on 4000')
  })
})()
