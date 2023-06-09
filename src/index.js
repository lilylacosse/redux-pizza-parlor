import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./components/App/App";
import { createStore, combineReducers, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import logger from "redux-logger";

//REDUCER
const fetchPizza = (state = [], action) => {
  if (action.type === "FETCH_PIZZA") {
    return action.payload;
  }
  return state;
};

const addPizza = (state = [], action) => {
    if (action.type === 'ADD_PIZZA') {
        return action.payload;
    }
    else if (action.type === 'REMOVE_PIZZA') {
        return true;
    }
    return state;
};

const customerInfo = (state = {}, action) => {
  if (action.type === "SAVE_CUST_INFO") {
    return action.payload;
  } else if (action.type === "CLEAR_CUST_INFO") {
    return {};
  }
  return state;
};

const placedOrders =(state= [], action) => {
  if(action.type === 'ALL_DATA') {
    console.log('in reducer', action.payload);
    return action.payload
  }
  return state;
}



//STORE
const storeInstance = createStore(
  combineReducers({
    fetchPizza,
    customerInfo,
    addPizza,
    placedOrders,
  }),
  applyMiddleware(logger)
);

//Wrap our App in a Provider, makes Redux available throughout application
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={storeInstance}>
      <App />
    </Provider>
  </React.StrictMode>
);
