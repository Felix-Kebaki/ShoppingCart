import { useDispatch } from "react-redux";
import "./home.css";
import { addToCart } from "../../store/cart-slice/cart-slice";
import { Products } from "../../constants";
import { useState } from "react";

export function Home() {
  const dispatch = useDispatch();

  const HandleAddToCart = (getPro) => {
    dispatch(addToCart(getPro));
  };


  return (
    <section className="MainbodySec">
      <div className="MainbodyDiv">
        <div className="emptyDiv2"></div>
        <div className="emptyDiv1"></div>
        {Products &&
          Products.map((product, index) => (
            <div className={`AllProductDiv ${product.classy}`} key={product.id}>
              <img src={product.image} alt="" />
              <div className="MoreDetailsOnProductDiv">
                <p>{product.Name}</p>
                <button onClick={() => HandleAddToCart(product)}>
                  Add to cart
                </button>
              </div>
            </div>
          ))}
      </div>
    </section>
  );
}
