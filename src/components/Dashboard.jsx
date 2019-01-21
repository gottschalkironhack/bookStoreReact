import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import { Row } from 'reactstrap';
import BookListContainer from './BookListContainer/BookListContainer';
import ErrorAlert from './Errors/ErrorAlert';

const Dashboard = ({ loading, error }) => {
  const { status, message } = error
  console.log('message', message)
  console.log('status', status)
  return (
  <Fragment>
      { status === true
        ? <ErrorAlert message={message} />
        : null }
      <Row className="mt-3">
        <h2 className="mb-5">Welcome to Dashboard</h2>
        { loading === true
          ? null
          : <BookListContainer /> }
      </Row>
    </Fragment>
  );
};

const mapStateToProps = (props) => {
  console.log('in dashbaord', props);
  console.log('in dashbaord', props.errors);
  return { 
    loading: props.books.loading,
    error: props.errors,
  };
}

export default connect(mapStateToProps)(Dashboard);
