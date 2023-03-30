import React from 'react';
import axios from 'axios';
import './App.css';

function App() {

//GET ROUTE
  const fetchPizzas = () {
    axios.get('/api/pizza')
      .then(resposne => {
        dispatchEvent({type: 'FETCH_PIZZA', payload: response.data})
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
  
    </div>
  );
}

export default App;
