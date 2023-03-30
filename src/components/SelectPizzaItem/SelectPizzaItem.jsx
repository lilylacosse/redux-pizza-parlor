import { useDispatch } from "react-redux";
import { useState } from 'react';

function SelectPizzaItem({pizza}) {

    const [showRemove, setShowRemove] = useState(false)

    const dispatch = useDispatch();

    const addPizza = () => {
       dispatch({type: 'ADD_PIZZA', payload: pizza})
       setShowRemove(true)
    }

    const removePizza = () => {
        dispatch({type: 'REMOVE_PIZZA'})
        setShowRemove(false)
    }
 
    return (
    <div className='pizzaItemBox'>
        <img src={pizza.image_path}/>
        <br/>
        {pizza.name}: 
        <br/>
        {pizza.description} 
        <br/>
        {pizza.price} 
        <br/>
        {showRemove ? (
            <button onClick={removePizza}>Remove</button>
        ) : (
            <button onClick={addPizza}>Add</button>
        )}
        
    </div>
    )

}

export default SelectPizzaItem;