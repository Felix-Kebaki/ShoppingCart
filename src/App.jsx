import { Home } from "./components/Home/Home";
import { Route, Router, Routes } from "react-router-dom";
import { Navbar } from "./components/Navbar/Navbar";
import { Cart } from "./components/cart/Cart";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/cart" element={<Cart />} />
      </Routes>
    </>
  );
}

export default App;
