import { useSelector } from "react-redux";


function Admin(){

    const placedOrders = useSelector(store => store.placedOrders)//bring in store that from 'ALL_DATA: Name of customer, Time ordered, Type of delivery, the total cost

    return(<>
    <div>
        <table>
            <thead>
                <tr>
                <th>Name</th><th>Time Order Placed</th><th>Type</th><th>Cost</th>
                </tr>
                </thead>
            <tbody>{placedOrders.map((order, i) => (
                <tr key={i}>
                    <td>{order.name}</td>
                    <td>{order.type}</td>
                    <td>{order.total}</td>
                </tr>))}
            </tbody>
        </table>
        
        </div>
    </> )
}

export default Admin;