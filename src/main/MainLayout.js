import React from 'react';
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

export default MainLayout
