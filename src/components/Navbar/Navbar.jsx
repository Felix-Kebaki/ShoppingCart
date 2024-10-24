import React from 'react'
import Menu from '../../assets/images/menu.png'
import Cart from '../../assets/images/cart.svg'
import Home from '../../assets/images/Home.svg'
import './navbar.css'
import {  NavLink } from 'react-router-dom'
import { useSelector } from 'react-redux'

export function Navbar() {
  const quantityCart=useSelector(state=>state.cart.CartItems.length)
  return (
    <header>
        <nav>
            <p id="LogoName">Feizo Shop</p>
            <div className='CartLinkNavDiv'>
               <NavLink to="/" id="Homelink">
               <img src={Home} alt="" />
               </NavLink> 
               <NavLink to="/cart" id="Cartlink"><img src={Cart} alt="" />
               <p id="NumberInCart">{quantityCart}</p>
               </NavLink>
            </div>
            <div className='MenuDivAtNav'>
                <img src={Menu} alt="" />
            </div>
        </nav>
    </header>
  )
}

