import React from 'react'
import Drawer from 'react-modern-drawer'
 import { styled, Typography} from "@mui/material";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import './index.css'
import { useDispatch, useSelector } from "react-redux"
import { clearTheBasket, openModal } from "../../store/actions";   
import 'react-modern-drawer/dist/index.css'
import { grey } from '@mui/material/colors';
import { FC } from 'react';
import { RootState } from "../../store/store"
import { BasketData } from '../../store/types';


type Props = {
    deleteFromBasket:(id:number)=>void
}
const Basket2:FC<Props>=({deleteFromBasket})=>{
    const [isClear,setClear]=React.useState(false)
    const [isOpen, setIsOpen] = React.useState(false)

    const HandleModal  =()=>{
        openModal()

    }
    const toggleDrawer = () => {
        setIsOpen((prevState) => !prevState)
    }
    const dispatch = useDispatch()

  const basket = useSelector((state:RootState)=>{
       return state.shopReducer.basket
   })

   const counter = useSelector((state:RootState)=>state.shopReducer.counter
   const total = basket.reduce((acc,item)=>acc+=item.price,0)
  
   
   const clearAll = ()=>{
    localStorage.removeItem('basket')
  clearTheBasket()
   setClear(true)

   }

    const Wrapper = styled('button')`
  position: fixed;
   border:none;
  right: 20px;
  top: 80px;
  width: 100px;
  height: 50px;
  color:white;
  border-radius: 40px;
  background-color: grey;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: .2s;
  `
  const Image = styled('img')`
  width: 40px;
  border-radius:50%;
  margin-left:10px;
  `
  const Title = styled('p')`
  font-size:12px ;

  `
  const Button = styled('button')`
  
  padding: 12px 80px 12px 80px;
  border-radius:50px;
  margin-left: 10px;
  margin-top:5px;
  border:1px solid grey;
  `

  
  
console.log(basket)


    return (
        <>
            <Wrapper onClick={toggleDrawer}>Корзина</Wrapper>
            <Drawer
                 className='side-bar'
                open={isOpen}
                onClose={toggleDrawer}
                direction='right'
                  
            >
               {isClear && basket.length===0 ?  <div className='empty'>
                   <img  className ='emptyImg'src ='https://www.getillustrations.com/packs/matilda-startup-illustrations/scenes/_1x/shopping,%20e-commerce%20_%20empty,%20shopping%20cart,%20items,%20products,%20zero,%20none_md.png'></img>
                   </div>:<div>
              <Typography sx={{marginLeft:2,marginTop:2, marginBottom:2,fontSize:20}}> {counter} товарa на ${total}тг </Typography>
                {basket.map((basket)=>(
                 <Card sx={{marginTop:2, maxWidth: 250,borderColor:grey }}>
                    <Image src= {basket.image}></Image>
                 <CardContent>
                   
                 <Title> {basket.title} </Title>
                
                <div className='info'>


                 <p>{basket.price}$
                 </p>
         
                    <button className='btn remove btn-success' onClick={()=>deleteFromBasket(basket.id)}> x</button>
            
                </div>

              
                 </CardContent>
               
               </Card>
    
                ))}
                <Card sx={{marginTop:2}}>
                    <Typography sx={{textAlign:'center'}}>сумма заказа ${total}</Typography>
                </Card>

                {/* <Button onClick={clearAll}> Clear All</Button> */}
                <Button onClick={basket.length===0? null : HandleModal}>Оформить заказ</Button>

                </div>}
               
            </Drawer>
            
        </>
    )
    
}
export default Basket2