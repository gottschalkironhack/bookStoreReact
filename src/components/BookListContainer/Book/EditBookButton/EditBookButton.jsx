import React from 'react';
import { Button } from 'reactstrap';

const EditBookButton = (props) => {
  const { id } = props;
  return (
    <Button className="mt-1" onClick={() => props.editBook(id)}>Edit</Button>
  );
};

export default EditBookButton;
