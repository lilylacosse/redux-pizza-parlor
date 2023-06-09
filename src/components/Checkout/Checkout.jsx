import axios from "axios"
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { useEffect } from "react";



function Checkout() {
    const customerInfo = useSelector((store) => store.customerInfo);
    const fetchPizza = useSelector((store)=>store.fetchPizza); //use the new one in map() below
    //need const for the pizza info picked by customer

    const dispatch = useDispatch();
    const history = useHistory();

    console.log('in checkout', fetchPizza);

    let allOrderInfo = {
        customer_name: customerInfo.customer_name,
        street_address: customerInfo.street_address,
        city: customerInfo.city,
        zip:customerInfo.zip,
        type: customerInfo.type,
        total: 1,
        pizzas: [{}, {}, {}]
    }

    function getAdmin(){
        axios.get('/api/order') 
        .then ((result) => {
            console.log('result in GET', result)
            dispatch({
                type: 'ALL_DATA',
                payload: result.data
            })
        }).catch((err) => {
            alert('GET in Admin', err);
        })
    }

    useEffect(() => {
        getAdmin()
    }, []);

    function handleCheckout() {

    axios.post('/api/order', allOrderInfo)
            .then((response) => {
                getAdmin();
                console.log('in POST', response);
            }
            ).catch((err) => console.log('Pizza POST error:', err))

        history.push('/');
    }




    return (<> <h2>Step 3: Checkout</h2>
        <div>{customerInfo.customer_name}</div>
        <div>{customerInfo.street_address}</div>
        <div>{customerInfo.city}</div>

        <table>
            <thead>
                <tr>
                <th>Pizza Type</th><th>Cost</th>
                </tr>
                </thead>
            <tbody>{fetchPizza.map((pizza, i) => (
                <tr key={i}>
                    <td>{pizza.name}</td>
                    <td>{pizza.price}</td>
                </tr>))}
            </tbody>
        </table>
        {/* <div>total:{total}</div> */}

        <button onClick={handleCheckout}>Checkout</button>
    </>)
}

export default Checkout;