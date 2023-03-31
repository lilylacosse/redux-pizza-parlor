import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css';
import { HashRouter as Router, Route, Link } from 'react-router-dom';
import { ChangeEvent } from 'react';
import { useDispatch } from 'react-redux';

import OrderForm from '../OrderForm/OrderForm';
import Checkout from '../Checkout/Checkout';
import SelectPizza from '../SelectPizza/SelectPizza';
import SelectPizzaItem from '../SelectPizzaItem/SelectPizzaItem';
import Admin from '../Admin/Admin'; 


function App() {

  const [sum, setSum] = useState(0); 

  const dispatch = useDispatch();

  useEffect(() => {
    fetchPizzas();
    orderTotal()
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

  //GET ROUTE for getting order total
  const orderTotal = () => {
    axios.get('/api/order')
    .then(response => {
      const data = response.data;
      console.log(response.data)
      let total = 0;
      for (let item of data) {
        console.log(item.price)
        total += item.price 
        setSum(total)
      }
    })
    .catch(error => {
      console.log(error)
      alert('Could not get order total')
    })
  }


  return (
    <div className='App'>
      <header className='App-header'>
        <h1 className='App-title'>Prime Pizza</h1>
        <h2>Total: ${sum.toFixed(2)}</h2>
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
        <Route path="/admin">
          <Admin />
        </Route>
      </Router>


    </div>
  );
}

export default App;
