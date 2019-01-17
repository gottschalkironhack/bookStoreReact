import React from 'react';
import { connect } from 'react-redux';
import { Row } from 'reactstrap';
import BookListContainer from './BookListContainer/BookListContainer';
import ErrorAlert from './Errors/ErrorAlert';

const Dashboard = ({ loading, error }) => {
  return (
    <Row className="mt-5">
      <h2 className="mb-5">Welcome to Dashboard</h2>
      { loading === true
        ? null
        : <BookListContainer /> }
      { error === true
        ? <ErrorAlert error={ error.message} />
        : null }
    </Row>
  );
};

function mapStateToProps(props) {
  console.log('in dashbaord', props);
  console.log('in dashbaord', props.errors);
  return { 
    loading: props.books.loading,
    error: props.errors,
  };
}

export default connect(mapStateToProps)(Dashboard);
