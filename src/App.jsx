import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getInitialBookData } from './actions/getInitialBookData';
import Navigation from './components/Navigation';

class App extends Component {
  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(getInitialBookData());
  }

  render() {
    return (
      <div>
        <Navigation /> 
      </div>
    );
  }
}

export default connect()(App);
