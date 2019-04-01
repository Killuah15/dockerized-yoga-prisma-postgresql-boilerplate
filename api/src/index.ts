import { GraphQLServer } from 'graphql-yoga'
import { Prisma } from '../generated/prisma-client'

const prisma = new Prisma({
  endpoint: 'http://prisma:4466'
})

const typeDefs = `
  type Query {
    hello(name: String): String
  }

  type Mutation {
    createUser(name: String): String
  }
`

const resolvers = {
  Query: {
    hello: (_, { name }) => {
      const returnValue = `Hello ${name || 'World!'}`
      return returnValue
    }
  },
  Mutation: {
    createUser: async (_, { name }, ctx, info) => {
      const nextUser = await prisma.createUser({
        name
      })
      return nextUser.name
    }
  }
}

const server = new GraphQLServer({
  typeDefs,
  resolvers
})

server.start(() => console.log('Server is running on http://localhost:4000'))
