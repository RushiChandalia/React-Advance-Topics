import React from 'react';
import gql from 'graphql-tag';
import { useMutation } from '@apollo/react-hooks';
import { Button, Icon } from 'semantic-ui-react';

import {  FETCH_BLOGS_QUERY } from '../util/graphql';


function DeleteButton({ id, callback }) {
 
  const mutation = DELETE_BLOG_MUTATION;

  const [deleteBlog] = useMutation(mutation, {
   
    update(proxy) {
        const data = proxy.readQuery({
          query: FETCH_BLOGS_QUERY
        });
        data.getAllBlogs = data.getAllBlogs.filter((p) => p.id !== id);
        proxy.writeQuery({ query: FETCH_BLOGS_QUERY, data });
      if (callback) callback();
    },
    variables: {
      id,
    }
  });
  return (
    <>
     
        <Button
          as="div"
          color="red"
          floated="right"
          onClick={ deleteBlog }
        >
          <Icon name="trash" style={{ margin: 0 }} />
        </Button>
     
    </>
  );
}

const DELETE_BLOG_MUTATION = gql`
  mutation deleteBlog($id: ID!) {
    deleteBlog(id: $id){
      id
      Title
    }
  }
`;


export default DeleteButton;