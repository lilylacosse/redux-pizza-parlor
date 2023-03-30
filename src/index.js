import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './components/App/App';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import logger from 'redux-logger';

//REDUCER
const fetchPizza = (state = [], action) => {
    if (action.type === 'FETCH_PIZZA') {
        return action.payload
    }
    return state
}

//STORE
const storeInstance = createStore(
    combineReducers({
        fetchPizza
    }),
    applyMiddleware(logger)
)

//Wrap our App in a Provider, makes Redux available throughout application
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <Provider store={storeInstance}>
        <App />
        </Provider>
    </React.StrictMode>
);
