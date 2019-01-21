import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Col } from 'reactstrap';
import CreateEditBookForm from './CreateEditBookForm/CreateEditBookForm';
import ErrorAlert from '../Errors/ErrorAlert';
import SuccessAlert from '../Success/SuccessAlert';


class CreateEditBookContainer extends Component {
  
  render() {
    const bookId = this.props.location.state
    ? this.props.location.state.bookId
    : null

    const { books, error, success } = this.props;
    let book = null;
    if(bookId){
      book = books.filter(book => book._id === bookId)
    }
    return(
      <Col sm="12" md="6" className="m-auto pt-5">
        <CreateEditBookForm 
          { ...book ? book = { ...book[0] } : null }
        />
        { error.status === true
          ? <ErrorAlert message={error.message} />
          : null }
        { success.status === true
          ? <SuccessAlert message={success.message} />
          : null }
      </Col>
    )}
}

const mapStateToProps = props => {
  return {
    books: props.books.books,
    error: props.errors,
    success: props.success,
  }
}

export default connect(mapStateToProps)(CreateEditBookContainer);