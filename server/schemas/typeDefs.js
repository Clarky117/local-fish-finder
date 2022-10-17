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
    fishName: String
    price: Number #dollars
    size: Number #cms
    quantity: Number
    location: String
    createdAt: Date
  }

  type Auth {
    # is token ID or String?
    token: ID!
    user: User
  }

  type Query {
    users: [User]
    user(username: String!): User
    me: User
    # sale fish 
    allfish: [SaleFish]
  }

  type Mutation {
    addUser(username: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth

    # user description
    addDescription(description: String): User 

    # sale fish 
    addFish(fishName: String!, price: Number!, size: Number!, quantity: Number!, location: String!): SaleFish
    removeFish(_id: ID): SaleFish
  }
`;

module.exports = typeDefs;
