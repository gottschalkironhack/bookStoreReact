import React, { Fragment, Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Row } from 'reactstrap';
import BookListContainer from './BookListContainer/BookListContainer';
import ErrorAlert from './Errors/ErrorAlert';
import SuccessAlert from './Success/SuccessAlert';

class Dashboard extends Component{

  shouldComponentUpdate(nextProps){
    const { error, success } = this.props;
    return nextProps.error.message !== error.message 
    || nextProps.success.message !== success.message;
  };

  render(){
    const { error, success, loading } = this.props;
    const BookList = loading ? null : <BookListContainer/>;
    return (
      <Fragment>
        { error.status === true
          ? <ErrorAlert message={error.message} />
          : null }
        { success.status === true
          ? <SuccessAlert message={success.message} />
          : null }
        <Row className="mt-3">
          <h2 className="mb-5">Welcome to Dashboard</h2>
        </Row>
        { BookList }
      </Fragment>
    );
  }     
};

const mapStateToProps = ({fetching, errors, success}) => {
  return { 
    loading: fetching.status,
    error: errors,
    success: success,
  };
}

Dashboard.propTypes = {
  loading: PropTypes.bool.isRequired,
  error: PropTypes.object.isRequired,
  success: PropTypes.object.isRequired,
};

export default connect(mapStateToProps)(Dashboard);
