function SelectPizzaItem({pizza}) {

    const addPizza = () => {
       
    }

    return (
    <div className='pizzaItemBox'>
        {pizza.image_path}
        {pizza.name}: {pizza.description} {pizza.price} 
        <button onClick={addPizza}>Add</button>
    </div>
    )

}

export default SelectPizzaItem;