import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import { Grid, Transition } from 'semantic-ui-react';


import PostForm from '../components/PostForm';
import { FETCH_BLOGS_QUERY } from '../util/graphql';
import PostCard from '../components/PostCard';

function Home() {
  
  const {
    loading,
    data
  } = useQuery(FETCH_BLOGS_QUERY);
const Blogs = data.getAllBlogs
console.log(Blogs)
  return (
    <Grid columns={3}>
      <Grid.Row className="page-title">
        <h1>Recent Blogs</h1>
      </Grid.Row>
      <Grid.Row>
         
          <Grid.Column>
            <PostForm />
          </Grid.Column>
          </Grid.Row>
        {loading ? (
          <h1>Loading Blogs..</h1>
        ) : (
          <Transition.Group>
            {Blogs &&
              Blogs.map((blog) => (
                <Grid.Column key={blog.id} style={{ marginBottom: 20 }}>
                  <PostCard blog={blog} />
                </Grid.Column>
              ))}
          </Transition.Group>
        )}
     
    </Grid>
  );
}

export default Home;
