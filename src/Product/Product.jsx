import { CardActions, CardContent, CardMedia, IconButton, Typography } from '@material-ui/core'
import React from 'react'
import {Card,CardMedia,CardContent,CardActions,Typography,IconButton} from '@matrial-ui/core';
import { AddShoppingCart } from '@material-ui/icons';
const product = ({product}) => {
  return (
    <div>
      <Card className={classes.root}>
        <CardMedian className={classes.media} image='' title={product.name}/>
        <CardContent>
            <div className={classes.cardcontent}>
                <Typography varient="h5" gutterBottom>

                    {
                        product.name
                    }
                </Typography>
                <Typography varient= "h5">
                    {product.price}
                </Typography>


            </div>
            <Typography varient="h2" color="textsecondry">{product.description}</Typography>
        </CardContent>
        <CardActions disableSpacing classname={classes.CardActions}>
            <IconButton aria-label='Add to Cart'  >
                <AddShoppingCart/>
            </IconButton>
        </CardActions>
      </Card>
    </div>
  )
}

export default Product
