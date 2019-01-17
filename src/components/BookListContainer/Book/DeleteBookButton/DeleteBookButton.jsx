import React from 'react';
import { Button } from 'reactstrap';

const DeleteBookButton = (props) => {
  const { id } = props;
  return (
    <Button onClick={() => props.deleteBook(id)}>Delete</Button>
  );
};

export default DeleteBookButton;
