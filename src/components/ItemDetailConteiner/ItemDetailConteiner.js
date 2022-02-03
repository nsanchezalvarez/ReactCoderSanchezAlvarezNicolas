import React, { useState, useEffect } from "react";
import ItemsDetail from '../ItemDetail/ItemDetail';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';



const ItemDetailConteiner = () =>{
  

  const[product, setProduct] = useState([])

  const dataProduct = {
        id: 1,   
        title:" Producto 1" ,
        description:' Descripción 1',
        price: 18 ,
        // img: <img src={producto1} alt="producto1"/>,
        pictureUrl:'producto1.png',
        stock: 22,
    }

const getProduct = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(dataProduct)
  }, 2000)
});


useEffect(() => {
  getProduct.then(data => {
    console.log('state products:', data)
    setProduct(data)

  })
},[]);

return( <Container className="product-container">
<Grid container spacing={2}>
<Grid item xs={3}>
<ItemsDetail data={product}/>
    </Grid>
</Grid> 
</Container>
)
}
export default  ItemDetailConteiner;


