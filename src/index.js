import React from 'react';
import ReactDOM from 'react-dom';
import './style/globals.css';
import App from './components/App/App';
import {  ThemeProvider } from '@mui/material/styles';
import theme from './style/mainTheme';


ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

//swapi.dev

