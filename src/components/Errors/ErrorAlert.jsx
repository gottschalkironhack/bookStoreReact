import React from 'react';
import { Row, Col } from 'reactstrap';

const ErrorAlert = ({ message }) => {
  return (
    <Row className="m-auto pt-2">
      <Col xs="12" md="12" className="alert alert-danger">{ message }</Col>
    </Row>
  );
};

export default ErrorAlert;
