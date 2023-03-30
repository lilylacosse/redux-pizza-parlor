import React, { useEffect } from 'react';
import axios from 'axios';
import './App.css';
import SelectPizza from '../SelectPizza/SelectPizza';
import SelectPizzaItem from '../SelectPizzaItem/SelectPizzaItem';
import { useDispatch} from 'react-redux';


function App() {

  const dispatch= useDispatch();

useEffect(() => {
  fetchPizzas();
})

//GET ROUTE
  const fetchPizzas = () => {
    axios.get('/api/pizza')
      .then(response => {
        dispatch({type: 'FETCH_PIZZA', payload: response.data})
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
  
      <img src='images/pizza_photo.png' />
      <p>Pizza is great.</p>

      <SelectPizza fetchPizzas={fetchPizzas}/>
    </div>
  );
}

export default App;
