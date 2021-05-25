import React from 'react';
import {  Card } from 'semantic-ui-react';
import DeleteButton from './DeleteButton';

function PostCard({
  blog: {id, Title, Body }
}) {

  return (
    <Card fluid>
        
      <Card.Content>
      <Card.Header>{Title}</Card.Header>

        <Card.Description>{Body}</Card.Description>
      </Card.Content>
      <Card.Content extra>
       
    <DeleteButton id={id} />
      </Card.Content>
    </Card>
  );
}

export default PostCard;