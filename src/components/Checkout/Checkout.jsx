import axios from "axios"
import { useSelector } from "react-redux";


function Checkout() {
    const customerInfo = useSelector((store) => store.customerInfo);
    const fetchPizza = useSelector((store)=>store.fetchPizza);
    //need const for the pizza info picked by customer

    console.log('in checkout', fetchPizza);

    //bundle up Redux state in a new VARIABLE  to send to server via Post 
    let allOrderInfo = {
        customer_name: customerInfo.customer_name,
        street_address: customerInfo.street_address,
        city: customerInfo.city,
        zip:customerInfo.zip,
        type: customerInfo.type,
        //pizza: [{}, {}, {}]
    }

    function handleCheckout() {
    
        axios.post('/api/order', allOrderInfo)
            .then((response) => {
                //GET from GET in admin
                console.log('in POST', response);
            }
            ).catch((err) => console.log('Pizza POST error:', err))
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