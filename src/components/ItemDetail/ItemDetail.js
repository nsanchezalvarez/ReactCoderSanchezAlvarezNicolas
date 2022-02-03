import react from 'react'

const ItemDetail = ({data}) =>{
    return(
        
        <div>
            
            Nombre: {data.title}
            
            Precio: {data.price}
            
            Stock: {data.stock}
        </div>
        
    )
}

export default ItemDetail;