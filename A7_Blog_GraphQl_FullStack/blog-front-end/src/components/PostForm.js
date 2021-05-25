import React from 'react';
import { Button, Form } from 'semantic-ui-react';
import gql from 'graphql-tag';
import { useMutation } from '@apollo/react-hooks';

import { useForm } from '../util/hooks';
import { FETCH_BLOGS_QUERY } from '../util/graphql';

function PostForm() {
  const { values, onChange, onSubmit } = useForm(createPostCallback, {
    Title:'',
    Body: ''
  });

  const [addBlog, { error }] = useMutation(CREATE_BLOG_MUTATION, 
    {
    variables: values,
    update(proxy, result) {
      const data = proxy.readQuery({
        query: FETCH_BLOGS_QUERY
      });
      data.getAllBlogs = [result.data.addBlog, ...data.getAllBlogs];
      proxy.writeQuery({ query: FETCH_BLOGS_QUERY, data });
      values.Body = '';
      values.Title ='';
    }
  }
  );

  function createPostCallback() {
    addBlog();
  }

  return (
    <>
      <Form onSubmit={onSubmit}>
        <h2>Create a post:</h2>
          <Form.Input
            placeholder="Hi World!"
            name="Title"
            onChange={onChange}
            value={values.Title}
            error={error ? true : false}
          />
        <Form.Field>
          <Form.TextArea
            placeholder="Hi World!"
            name="Body"
            onChange={onChange}
            value={values.Body}
            error={error ? true : false}
          />
          <Button type="submit" color="teal">
            Submit
          </Button>
        </Form.Field>
      </Form>
      {error ? console.log(error) :""}
    </>
  );
}

const CREATE_BLOG_MUTATION = gql`
  mutation addBlog($Title:String! $Body: String!) {
    addBlog(Title: $Title Body: $Body) {
      id
      Body
      Title
  }
  }
`;

export default PostForm;
