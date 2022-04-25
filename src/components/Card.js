import React from 'react';
import {Paper, Grid, Typography, Button, makeStyles} from '@material-ui/core';
import { useSelector, useDispatch } from 'react-redux';
import cartActions from './store/actions/cart'

const useStyles = makeStyles((theme) => ({
    paper: {
      padding: theme.spacing(2),
      textAlign: 'center'
    },
  }));

const Card = ({product, children}) =>{
    const cart = useSelector(state => state.cart.value); //acessando o estado global, apenas o value do carrinho
    const dispatch = useDispatch(); //manipulando a informação do estado global, acionando as actions globais em "actions"
    const classes = useStyles();


    return (
        <Grid item xs={3}>
            <Paper className={classes.paper}>
                <Grid container direction='column'>
                    <Grid item>
                    <img width="140px" src={product.image} alt={product.name_product}/>
                    <Typography variant='h6'>
                        {children}
                    </Typography>
                    <Typography variant='subtitle1'>
                        R$ {product.price.toFixed(2)}
                    </Typography>
                    </Grid>
                
                <Button 
                    variant="contained"
                    onClick={()=>dispatch(cartActions.Add(cart, product))} // o dispatch traz as funções, aqui são acionadas, o cart e o product são os parametros. A função global aqui é o 'Add'
                >
                    Adicionar
                </Button>
                </Grid>
            </Paper>
        </Grid>
    )

}

export default Card;

