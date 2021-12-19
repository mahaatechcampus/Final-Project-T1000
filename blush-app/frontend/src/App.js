import {BrowserRouter as Router,Routes,Route} from "react-router-dom";
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
import Search from "./Component/Search"
import Dashboard from "./Admin/Dashboard"
import ProductsAdmin from "./Admin/ProductsAdmin";
import AddProductAdmin from "./Admin/AddProductAdmin";

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
        <Route path="/search/:searchTerm" element={<Search/>}/>
        <Route path="/account" element={<Account />}/> 
        <Route path="/wishlist" element={<Wishlist />}/> 
        <Route path="/success" element= {<Success/>} />
        <Route path="/dashboard" element= {<Dashboard />}/>
        <Route path="/dashboard/products"element= {<ProductsAdmin />}/>
        <Route path="/dashboard/products/add"element= {<AddProductAdmin />}/>

      </Routes>
    </Router>
  );
}

export default App;
