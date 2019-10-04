import React, { Component } from 'react';
import { connect } from 'react-redux';
import Nav from '../../components/nav';
import './sidebar.scss';

class Sidebar extends Component {
  render() {
    return (
      <aside className="sidebar">
        <Nav />
        {/* <Menu children={<span>123</span>} model={this.state.items} /> */}


      </aside>
    );
  }
}

const mapStateToProps = state => {
  return {

  };
};

const mapDispatchToProps = {

};

export default connect(mapStateToProps, mapDispatchToProps)(Sidebar);
