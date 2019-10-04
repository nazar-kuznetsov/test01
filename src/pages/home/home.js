import React from 'react';
import {connect} from 'react-redux';
import { Button, Icon } from 'antd';
// import {Button} from 'primereact/button';

const Home = () => {
  return (
    <div>
      <a href="http://manual.rossery.com/" target="_blank">
        <Button>Инструкция <Icon type="read" /></Button>
      </a>
      {/* <a href="#">
        <Button
          label="Добавить объект недвижимости"
          icon="pi pi-home"
        />
      </a> */}
    </div>
  );
};

const mapStateToProps = state => {
  return {

  };
};

export default connect(mapStateToProps, null)(Home);
