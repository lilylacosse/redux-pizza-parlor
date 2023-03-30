import React, { useEffect } from 'react';
import axios from 'axios';
import './App.css';
import { HashRouter as Router, Route, Link } from 'react-router-dom';
import { ChangeEvent } from 'react';
import { useDispatch } from 'react-redux';

import OrderForm from '../OrderForm/OrderForm';
import Checkout from '../Checkout/Checkout';
import SelectPizza from '../SelectPizza/SelectPizza';
import SelectPizzaItem from '../SelectPizzaItem/SelectPizzaItem';



function App() {

  const dispatch = useDispatch();

  useEffect(() => {
    fetchPizzas();
  })

  //GET ROUTE
  const fetchPizzas = () => {
    axios.get('/api/pizza')
      .then(response => {
        dispatch({ type: 'FETCH_PIZZA', payload: response.data })
      })
      .catch(error => {
        console.log(error)
        alert('Could not get pizzas')
      })
  }

  return (
    <div className='App'>
      <header className='App-header'>
        <h1 className='App-title'>Prime Pizza</h1>
      </header>

      <Router>
        <Route path="/" exact>
          <SelectPizza fetchPizzas={fetchPizzas} />
        </Route>
        <Route path="/orderform">
          <OrderForm />
        </Route>
        <Route path="/checkout">
          <Checkout />
        </Route>
      </Router>


    </div>
  );
}

export default App;
