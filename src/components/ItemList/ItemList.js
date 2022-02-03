import React, { useState, useEffect } from "react";
import Items from '../Items/Items';

import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import CircularProgress from '@mui/material/CircularProgress';
import ItemCount from "../ItemCount/ItemCount";
import producto1 from '../../assets/producto1.png';
import producto2 from '../../assets/producto2.png';
import producto3 from '../../assets/producto3.png';
import producto4 from '../../assets/producto4.png';

const ItemList = () =>{
  
  const[loader, setLoader] = useState(true)
  const[products, setProducts] = useState([])

  const dataProducts = [
    {
        id: 1,   
        title:" Producto 1" ,
        description:' Descripción 1',
        price: 18 ,
        img: <img src={producto1} alt="producto1"/>,
        pictureUrl:'producto1.png',
        stock: 22,
    },
    {
      id: 2,   
      title:' Producto 2',
      description:' Descripción 2',
      price: 24 ,
      img:<img src={producto2} alt="producto2"/>,
      pictureUrl:'producto2.png',
      stock: 44, 
    },
    {
      id: 3,   
        title:' Producto 3',
        description:' Descripción 3',
        price: 17 ,
        img:<img src={producto3} alt="producto3"/>,
        pictureUrl:'producto3.png',
        stock: 32,
    },
    {  
      id: 4,   
      title:' Producto 4',
      description:' Descripción 4',
      price: 12 ,
      img:<img src={producto4} alt="producto4"/>,
      pictureUrl: 'producto4.png',
      stock: 22,
    }

]
const getProducts = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(dataProducts)
  }, 2000)
});


useEffect(() => {
  getProducts.then((data) => {
    console.log('state products:', data)
    setProducts(data)
   setLoader(false)
  })
},[]);

return(
 <>
  
  {console.log("respuesta products;", products)}
  <Container className="product-container">
    {
      loader 
      ? 
      <CircularProgress/> 
      : 
    <Grid container spacing={2}>
        {products.map((product)=>{
          return(
            <Grid item xs={3}>
              <Items title={product.title}  description={product.description} price={product.price} stock={product.stock} pictureUrl={product.pictureUrl} />
              <ItemCount stock={product.stock}/>
            </Grid>
    )
      })}
      </Grid> 
}
</Container>
  
</>
)
}
export default ItemList;







