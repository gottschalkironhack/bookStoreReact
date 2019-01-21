import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'reactstrap';

const EditBookButton = ({id, editBook}) => {
  return (
    <Button className="mt-1" onClick={() => editBook(id)}>Edit</Button>
  );
};

EditBookButton.propTypes = {
  id: PropTypes.string.isRequired,
  editBook: PropTypes.func.isRequired,
};

export default EditBookButton;
