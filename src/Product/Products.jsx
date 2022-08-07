import React from 'react';
import Grid from '@material-ui/core';
                                     
const products=[
    {id: 1, name:'shoes',Description:'Running shoes',price:'$5'},
]

const Products=()=>{
    <main>
    <Grid container justify="center" spacing={4}>
        {products.map((product)=>
        (
            <Grid item key={product.id} xs={12} sn={4} md={4} lg={3}>
                <Product product={product}/>
                </Grid>
        ))}
        </Grid>
        </main>
}
export default Products;
      