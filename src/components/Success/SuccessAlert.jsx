import React from 'react';
import { Row, Col } from 'reactstrap';

const SuccessAlert = ({ message }) => {
  return (
    <Row className="m-auto pt-2">
      <Col className='alert alert-success'>{ message }</Col>
    </Row>
  );
};

export default SuccessAlert;
