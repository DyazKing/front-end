import React from 'react'
import { ListGroup } from 'react-bootstrap'

export default function CommentList({ comments }) {
  return (
    <ListGroup>
      {comments.map((comment, index) => (
        <ListGroup.Item key={index}>{comment}</ListGroup.Item>
      ))}
    </ListGroup>
  );
}
