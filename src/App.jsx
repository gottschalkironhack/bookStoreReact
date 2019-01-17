import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getInitialData } from './actions/getInitialData';
import Navigation from './components/Navigation';

class App extends Component {
  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(getInitialData());
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
