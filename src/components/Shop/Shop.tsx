import { Container, Grid } from "@mui/material"
import {  useEffect } from "react"

import { useDispatch, useSelector } from "react-redux"
import { addToBasket, getProducts,deleteFromBasket } from "../../store/actions"
import { RootState } from "../../store/store"

import Basket2 from "./Basket2"
import BasicModal from "./Modal"
import ShopInfo from "./Shop.info"




const Shop =()=>{
    const dispatch = useDispatch()
    const products = useSelector((state:RootState)=>state.shopReducer.shop)
    console.log(products)

    // const products = useSelector((state)=>{
    //  return state.shopReducer.shop
    // })
   
    
    useEffect(()=>{
      getProducts()
    },[getProducts])
    
    const handleBasket = (product,id)=>{
      addToBasket(id)
    }
    const handleDelete= (id)=>{
      deleteFromBasket(id)
    }

    return(
        <>
        <Container>
          <Grid container spacing={2}>

        {products.map((product)=>(
          <Grid item md={3} xs={12} key={product.id}>
          <ShopInfo  addToBasket = {handleBasket} product={product}></ShopInfo>
          </Grid>
        ))}
          </Grid>
          <Basket2 deleteFromBasket={handleDelete} />
        <BasicModal/>
        </Container>
        </>
    )
}

export default Shop