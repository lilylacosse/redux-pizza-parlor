import SelectPizzaItem from "../SelectPizzaItem/SelectPizzaItem";
import { useDispatch, useSelector } from 'react-redux';
import AllPizzas from "../AllPizzas/AllPizzas";


function SelectPizza() {
    
    //store.fetchPizza refers to fetchPizza in store in index.js
    const fetchPizza = useSelector(store => store.fetchPizza);

    //function to handle handleCustomerInfo button
    const handleCustomerInfo = () => {
        //TODO: CHANGE TO CORRECT URL
        history.push('/')
    }
    
    return (
        <>
        <div>
            <h2>Select Your Pizza</h2>
        </div>
        <div>
            <button onClick={handleCustomerInfo}>Next</button>

            <AllPizzas/>
        </div>
        </>
    )
}

export default SelectPizza;