import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { Row, Col } from 'reactstrap';
import Book from './Book/Book';
import { handleDeleteBook } from '../../actions/deleteBook';
import ErrorAlert from '../Errors/ErrorAlert';
import SuccessAlert from '../Success/SuccessAlert';

class BookListContainer extends Component{

  state = {
    navigateToEditBook: false,
  };

  idBookToEdit = null;

  dispatchDeleteBook = (id) => {
    this.props.dispatch(handleDeleteBook(id));
  }

  goToEditComponent = (id) => {
    this.idBookToEdit = id;
    this.setState({ navigateToEditBook: true });
  }

  render() {
    let idBookToEdit = this.idBookToEdit;
    if (this.state.navigateToEditBook === true) {
      return <Redirect push to={{ 
        pathname:`/editBook/${idBookToEdit}`,
        state: { referrer: '/', bookId: idBookToEdit }
      }} />
    }
    console.log('props after map', this.props);
    const { books, success, error } = this.props;
    console.log(books, 'books')
    console.log(success, 'success')
    // const {book} ] this.props
    return(
      <Row>
        <Col xs="12" className="p-0 m-0">
          { error.status === true
          ? <ErrorAlert error={error.message} />
          : null }
          { success.status === true
          ? <SuccessAlert message={success.message} />
          : null }
        </Col>
        { books.map((book) => {
          return ( 
            <Book
              key={book._id}
              book={book}
              handleDeleteBook={this.dispatchDeleteBook}
              handleEditBook={this.goToEditComponent}
            />
          )
        }) }
      </Row> 
    )};
};

const mapStateToProps = (props) => {
  console.log('in booklistcontainer', props);
  console.log('in booklistcontainer', props.errors);
  return { 
    books: props.books.books,
    error: props.errors,
    success: props.success,
  };
}

export default connect(mapStateToProps)(BookListContainer);
