import React, { Component } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Formu from '../components/Formu';
import App from '../container/App';

export default class AppRouter extends Component {
  render() {
    return (
        <BrowserRouter>
            <Routes>
              <Route path="/" element={<App/>}/>
              <Route path="/form" element={<Formu/>}/>
            </Routes>
        </BrowserRouter>
    )
   
  }
}
