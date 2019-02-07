import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';
import { Row } from 'reactstrap';
import Book from './Book/Book';
import { handleDeleteBook } from '../../actions/deleteBook';

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

  shouldComponentUpdate(nextProps){
    return nextProps.books !== this.props.books
    || this.idBookToEdit !== null;
  }

  render() {
    let idBookToEdit = this.idBookToEdit;
    if (this.state.navigateToEditBook === true) {
      return <Redirect push to={{ 
        pathname:`/editBook/${idBookToEdit}`,
        state: { referrer: '/', bookId: idBookToEdit }
      }} />
    }
    const { books } = this.props;
    return(
      <Row>
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
  return { 
    books: props.books.books,
  };
}

BookListContainer.propTypes = {
  books: PropTypes.array.isRequired,
};

export default connect(mapStateToProps)(BookListContainer);
