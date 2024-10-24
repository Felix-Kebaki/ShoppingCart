import React from 'react'
import './cart.css'
import { useDispatch, useSelector } from 'react-redux'
import {removeFromCart} from '../../store/cart-slice/cart-slice'

export function Cart() {
  const dispatch=useDispatch()
  const cart=useSelector(state=>state.cart.CartItems)
  
  
  const HandleRemove=(getId)=>{
    dispatch(removeFromCart(getId))
  }
  return (
    <section className='CartMainSec'>
      <div>
        {cart && 
          cart.map((product)=>(
            <div key={product.id} className='MainEachCartContainer'>
              <img src={product.image} alt="" />
              <div className='DescriptionMainDivEachCart'>
                <p id="MainTittleCart">{product.name}</p>
                <button onClick={()=>HandleRemove(product.id)}>Remove from cart</button>
              </div>
            </div>
          ))
        }
      </div>
    </section>
  )
}

