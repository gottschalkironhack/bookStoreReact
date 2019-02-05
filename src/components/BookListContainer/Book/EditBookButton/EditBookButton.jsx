import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'reactstrap';

const EditBookButton = ({ id, editBook }) => ({
  render(){
    return (
      <Button className="mt-1" onClick={this.handleEditBook}>Edit</Button>
    );
  },
  handleEditBook(){
    editBook(id);
  }
});

EditBookButton.propTypes = {
  id: PropTypes.string.isRequired,
  editBook: PropTypes.func.isRequired,
}

export default EditBookButton;
