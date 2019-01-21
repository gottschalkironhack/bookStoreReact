import React from 'react';
import PropTypes from 'prop-types';
import {
  Col,
  Card,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  CardHeader,
} from 'reactstrap';
import DeleteBook from './DeleteBookButton/DeleteBookButton';
import EditBook from './EditBookButton/EditBookButton';

const Book = ({ handleDeleteBook, handleEditBook, book }) => {
  
  const {
    _id,
    title,
    author,
    description,
    price,
  } = book;

  return (
    <Col sm="12" md="4">
      <Card>
        <CardHeader>{title}</CardHeader>
        <CardBody>
          <CardTitle>
            Written by
            {" "}{author}
          </CardTitle>
          <CardSubtitle>
            Purchasable for:
            {" "}{price}
            {" "}EUR
          </CardSubtitle>
          <CardText>
            {"This is what it's about:"}
            {" "}{description}
          </CardText>
        </CardBody>
        <DeleteBook id={_id} deleteBook={handleDeleteBook} />
        <EditBook id={_id} editBook={handleEditBook} />
      </Card>
    </Col>
  );
};

Book.propTypes = {
  book: PropTypes.object.isRequired,
  handleDeleteBook: PropTypes.func.isRequired,
  handleEditBook: PropTypes.func.isRequired,
};

export default Book;
