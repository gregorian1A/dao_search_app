import React from "react";
import { StaticRouter, HashRouter } from "react-router-dom";
import ReactDOM from 'react-dom';
import App from './App.js';
import reportWebVitals from './reportWebVitals';


      // <StaticRouter>
      //   <App />
      // </StaticRouter>
    

ReactDOM.render(
  <React.StrictMode>
    <HashRouter>
    <App />
    </HashRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
