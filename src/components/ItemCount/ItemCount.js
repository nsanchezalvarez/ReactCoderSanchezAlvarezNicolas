import React,{ useState} from 'react';

export default function ItemCount({stock}){
    const[itemCount, setItemCount] = useState(0)

    const updateItem = () => {
        itemCount < stock && setItemCount(itemCount + 1)
    }

    const removeItem = () => {
        itemCount > 0 && setItemCount(itemCount - 1)
    }

    return(
        //Montaje
        <div>
            
            <h1>{itemCount}</h1>
            <button onClick={updateItem}>+</button>
            <button onClick={removeItem}>-</button>
            <br/>
            <button>Agregar al carrito</button>
           
        </div>
    )
    
}
