function SelectPizzaItem({pizza}) {

    const addPizza = () => {
       
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
        <button onClick={addPizza}>Add</button>
    </div>
    )

}

export default SelectPizzaItem;