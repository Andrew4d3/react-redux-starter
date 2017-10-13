import React from 'react';
import PropTypes from 'prop-types';
import logo from '../assets/logo.svg';
import MainMenu from '../common/MainMenu';

const MainLayout = (props) => (
  <div className="App">
    <div className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <h2>Welcome to React</h2>
    </div>
    <MainMenu />
    {props.children}
  </div>
);

MainLayout.propTypes = {
  children: PropTypes.node
};

export default MainLayout;
