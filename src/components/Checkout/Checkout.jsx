import axios from "axios"

function Checkout() {

    axios.post('/api/pizza', customerInfo).then((response) =>
        // insert GET from checkout here
    ).catch((err) => console.log('Pizza POST error:', err))

    return (<><div>Checkout</div>
    </>)
}

export default Checkout;