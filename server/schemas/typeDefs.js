const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    _id: ID!
    username: String
    email: String
    password: String
    description: String
  }

  type SaleFish {
    _id: ID!
    fishname: String
    username: String
    price: Int #dollars
    size: Int #cms
    quantity: Int
    location: String
    createdAt: String
  }

  type Auth {
    token: ID!
    user: User
  }

  type Query {
    users: [User]
    user(username: String!): User
    me: User
    allfish: [SaleFish]
  }

  type Mutation {
    addUser(username: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
    # addDescription(description: String): User
    addFish(fishname: String!, username: String! price: Int!, size: Int!, quantity: Int!, location: String!): SaleFish
    removeFish(_id: ID): String
  }
`;

module.exports = typeDefs;
