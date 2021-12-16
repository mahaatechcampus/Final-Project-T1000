import {BrowserRouter as Router,Routes,Route} from "react-router-dom";
import  { Navigate } from 'react-router-dom'
import {useDispatch,useSelector} from "react-redux";
import Navbar from './Component/Navbar'
import Success from './Component/Success'
import Home from "./Pages/Home";
import ProductsList from "./Pages/ProductsList"
import Product from "./Pages/Product"
import Cart from "./Component/Cart"
import Login from "./Component/Login"
import Register from "./Component/Register"
import Account from "./Pages/Account"
import Wishlist from "./Pages/Wishlist"



function App() {
  
  return (
    <Router>
      <Navbar/>
      <Routes> 
        <Route exact path="/" element=  {<Home/>} />
        <Route path="/products" element=  {<ProductsList/>} />
        <Route path="/products/:category" element=  {<ProductsList/>} />
        <Route path="/product/:id" element=  {<Product/>} />
        <Route path="/cart" element=  {<Cart/>} />
        <Route path="/login"  element={<Login />}/>  
        <Route path="/register" element={<Register />}/> 
        <Route path="/account" element={<Account />}/> 
        <Route path="/wishlist" element={<Wishlist />}/> 
        <Route path="/success" element= {<Success/>} />
      </Routes>
    </Router>
  );
}

export default App;
