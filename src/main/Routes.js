import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom'
import MainLayout from './MainLayout'
import HomeView from '../modules/Home/HomeView'
import SecondPageView from '../modules/SecondPage/SecondPageView'
import '../styles/App.scss';

class Routes extends Component {
  render() {
    return (
      <BrowserRouter>
        <MainLayout>
          <Route exact path='/' component={HomeView} />
          <Route path='/secondpage' component={SecondPageView} />
        </MainLayout>
      </BrowserRouter>
    );
  }
}

export default Routes;
