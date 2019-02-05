import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'reactstrap';


const DeleteBookButton = ({ id, deleteBook }) => ({
  render(){
    return (
      <Button onClick = {this.deleteBookFct}>Delete</Button>
    );
  },
  deleteBookFct() {
    deleteBook(id);
  }
});

DeleteBookButton.propTypes = {
  id: PropTypes.string.isRequired,
  deleteBook: PropTypes.func.isRequired,
};

export default DeleteBookButton;
