import axios from "axios"
import { useSelector } from "react-redux";

function Checkout() {
    const customerInfo = useSelector((store) => store.customerInfo)
    // const pizzaData = useSelector((store)=>store.?)

    //bundle up Redux state in a new VARIABLE  to send to server via Post 
    let allOrderInfo = {
        customer_name,
        street_address,
        city,
        zip,
        type,
        total,
        time,
        pizza: [{}, {}, {}]
    }

    function handleCheckout() {

        axios.post('/api/order',)
            .then((response) => {// insert GET from checkout here
            }
            ).catch((err) => console.log('Pizza POST error:', err))
    }
    return (<> <h2>Step 3: Checkout</h2>
        <div>{customerInfo.customer_name}</div>
        <div>{customerInfo.street_address}</div>
        <div>{customerInfo.city}</div>

        <table>
            <thead><th>Pizza Type</th><th>Cost</th> </thead>
            <tbody>{pizzaData.map((pizza, i) => (
                <tr key={i}>
                    <td>{pizza.id}</td>
                    <td>{pizza.price}</td>
                </tr>))}
            </tbody>
        </table>
        <div>total:{total}</div>

        <button onClick={handleCheckout}>Checkout</button>
    </>)
}

export default Checkout;