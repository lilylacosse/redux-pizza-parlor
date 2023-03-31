import SelectPizzaItem from "../SelectPizzaItem/SelectPizzaItem";
import { useDispatch, useSelector } from 'react-redux';
import AllPizzas from "../AllPizzas/AllPizzas";
import React from 'react';
import { useHistory } from 'react-router-dom'


function SelectPizza() {

    const history = useHistory();
    
    //store.fetchPizza refers to fetchPizza in store in index.js
    const fetchPizza = useSelector(store => store.fetchPizza);

    //function to handle handleCustomerInfo button
    const handleCustomerInfo = () => {
       
        history.push('/orderform')
    }
    
    return (
        <>
        <div>
            <h2>Select Your Pizza</h2>
        </div>
        <div>

        <AllPizzas/>
         <button onClick={handleCustomerInfo}>Next</button>

           
        </div>
        </>
    )
}

export default SelectPizza;