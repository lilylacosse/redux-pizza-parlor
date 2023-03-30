import SelectPizzaItem from "../SelectPizzaItem/SelectPizzaItem";
import { useSelector } from 'react-redux';
import React from 'react';

function AllPizzas() {

    const allPizzas = useSelector(store => store.fetchPizza);

    return (
        <div>
        {allPizzas.map ((pizza, i) => {
            return <SelectPizzaItem key ={i} pizza={pizza}/>
        })}
        
        </div>
    )
}

export default AllPizzas;