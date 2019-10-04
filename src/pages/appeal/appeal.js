import React, { Component } from 'react';
import { connect } from 'react-redux';
import './appeal.scss';

class Appeal extends Component {
  componentDidMount() {
    // init
  }

  render() {
    return (
      <div>
        Appeal
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

export default connect(mapStateToProps, mapDispatchToProps)(Appeal);
