import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router } from 'react-router-dom';

import App from "./App";
// import { BrowserRouter } from "react-router-dom";
// import CounterState from './CounterState'


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  // <React.StrictMode>
  <Router>
    {/* <CounterState/> */}
    <App />
  </Router>
  // </React.StrictMode>
  // ReactDOM.render(<CounterState/>,document.getElementById("root"))
);