import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'reactstrap';

const DeleteBookButton = ({ id, deleteBook }) => ({
  render(){
    return (
      <Button onClick = {this.handleDeleteBook}>Delete</Button>
    );
  },
  handleDeleteBook() {
    deleteBook(id);
  }
});

DeleteBookButton.propTypes = {
  id: PropTypes.string.isRequired,
  deleteBook: PropTypes.func.isRequired,
};

export default DeleteBookButton;
