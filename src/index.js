import React from 'react';
import ReactDOM from 'react-dom';
import AppRouter from './routes/AppRouter';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/index.css'

ReactDOM.render(
  <React.StrictMode>
    <AppRouter />
  </React.StrictMode>,
  document.getElementById('root')
);


