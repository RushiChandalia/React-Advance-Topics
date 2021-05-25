const { gql } = require("apollo-server");

module.exports = gql`
  type Blog {
      id:ID!
    Title: String!
    Body: String!
  }

  extend type Query {
    getAllBlogs: [Blog!]!
  }
  extend type Mutation {
    addBlog(Title: String!, Body: String!): Blog!
    deleteBlog(id:ID!): Blog!
  }
`;
