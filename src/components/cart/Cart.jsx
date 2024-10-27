import React, { useState } from "react";
import "./cart.css";
import { useDispatch, useSelector } from "react-redux";
import { removeFromCart,addQuantity } from "../../store/cart-slice/cart-slice";

export function Cart() {
  const [ngapi,setNgapi]=useState(1)
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart.CartItems);

  const HandleRemove = (getId) => {
    dispatch(removeFromCart(getId));
  };

  const HandleMinus=()=>{
    setNgapi(prev=>prev-1)
    if(ngapi===1){
      setNgapi(1)
    }
  }

  const HandleAdd=()=>{
    setNgapi(prev=>prev+1)
  }
  return (
    <section className="CartMainSec">
      <div>
        {cart &&
          cart.map((product) => (
            <div key={product.id} className="MainEachCartContainer">
              <img src={product.image} alt="" />
              <div className="DescriptionMainDivEachCart">
                  <p id="MainTittleCart">{product.name}</p>
                <p>{product.description}</p>
                <div className="QuantityWithBtnDiv">
                  <button onClick={()=>HandleMinus()}>-</button>
                  <p>{ngapi}</p>
                  <button onClick={()=>HandleAdd()}>+</button>
                </div>
                <p id="PriceOfProduct">${product.price*ngapi}.00</p>
              </div>
              <div className="RemoveButtonDiv">
                <button onClick={() => HandleRemove(product.id)}>×</button>
              </div>
            </div>
          ))}
      </div>
    </section>
  );
}
