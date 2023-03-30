import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./components/App/App";

const customerInfo = (state = {}, action) => {
  if (action.type === "SAVE_CUST_INFO") {
    return action.payload;
  } else if (action.type === "CLEAR_CUST_INFO") {
    return {};
  }
  return state;
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
