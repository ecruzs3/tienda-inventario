import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';  // Asegúrate de que App.js esté presente en la carpeta src

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root') // Esto debe coincidir con el id del div en index.html
);