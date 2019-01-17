import React from 'react';
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

const Book = (props) => {

  const { handleDeleteBook, handleEditBook, book } = props;
  const {
    title,
    _id,
    description,
    author,
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

export default Book;
