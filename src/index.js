import React from 'react';
import ReactDOM from 'react-dom/client';
import App from "./components/App"
import "./style.css"

const routeroot = document.getElementById("root");
const root = ReactDOM.createRoot(routeroot);

root.render(
  <>
    <App />
  </>
)
