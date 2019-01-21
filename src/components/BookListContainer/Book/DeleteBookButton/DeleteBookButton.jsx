import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'reactstrap';


const DeleteBookButton = ({ id, deleteBook }) => {
  return (
    <Button onClick={() => deleteBook(id)}>Delete</Button>
  );
};

DeleteBookButton.propTypes = {
  id: PropTypes.string.isRequired,
  deleteBook: PropTypes.func.isRequired,
};

export default DeleteBookButton;
