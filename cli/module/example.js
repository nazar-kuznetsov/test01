import React, { Component } from 'react';
import { connect } from 'react-redux';
import './example.scss';

class Example extends Component {
  componentDidMount() {
    // init
  }

  render() {
    return (
      <div>
        Example
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {

  };
};

const mapDispatchToProps = {

};

export default connect(mapStateToProps, mapDispatchToProps)(Example);
