import gql from "graphql-tag";

export const FETCH_BLOGS_QUERY = gql`
  {
    getAllBlogs {
      id
      Title
      Body
    }
  }
`;
