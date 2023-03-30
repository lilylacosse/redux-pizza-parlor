import React, { useState } from "react"
import axios from "axios"
import { useDispatch } from "react-redux"
import { useHistory } from "react-router-dom"

function OrderForm({ total, pizzas }) {
    // reminder to get total and pizzas data from siv and ia
    const [newName, setNewName] = useState('')
    const [newStreet, setNewStreet] = useState('')
    const [newCity, setNewCity] = useState('')
    const [newZip, setNewZip] = useState(0)
    const [selectedOption, setSelectedOption] = useState('')

    const dispatch = useDispatch();
    const history = useHistory();

    function saveOrder() {
        event.preventDefault();
        let customerInfo = {
            customer_name: newName,
            street_address: newStreet,
            city: newCity,
            zip: newZip,
            type: selectedOption,
            total: total,
            pizzas: pizzas
        }

        dispatch({
            type: "SAVE_CUST_INFO",
            payload: customerInfo
        })

        history.push("/checkout")
    }


    return (<><div>
        <h2>Step 2: Customer Information</h2>
        <br />
        <form onSubmit={(event) => saveOrder}>
            <input type="text" placeholder="Name" value={newName} onChange={(event) => setNewName(event.target.value)} />
            <input type="text" placeholder="Street Name" value={newStreet} onChange={(event) => setNewStreet(event.target.value)} />
            <input type="text" placeholder="City" value={newCity} onChange={(event) => setNewCity(event.target.value)} />
            <input type="number" placeholder="Zip" value={newZip} onChange={(event) => setNewZip(event.target.value)} />

            <input type="radio"
                name="delivery_option"
                value='delivery'
                checked={selectedOption === 'delivery'}
                onChange={(event) => setSelectedOption(event.target.value)} />
            <label htmlFor="delivery_option">Delivery</label>

            <input type="radio"
                name="delivery_option"
                value='pickup'
                checked={selectedOption === "pickup"}
                onChange={(event) => setSelectedOption(event.target.value)} />
            <label htmlFor="delivery_option">Pickup</label>

            <button type="submit">Next</button>

        </form>
    </div></>)
}

export default OrderForm