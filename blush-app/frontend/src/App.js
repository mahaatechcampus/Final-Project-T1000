import {BrowserRouter as Router,Routes,Route} from "react-router-dom";
import Navbar from './Component/Navbar'
import Success from './Pages/Success'
import Home from "./Pages/Home";
import ProductsList from "./Pages/ProductsList"
import Product from "./Pages/Product"
import Cart from "./Pages/Cart"
import Login from "./Pages/Login"
import Register from "./Pages/Register"
import Account from "./Pages/Account"
import Wishlist from "./Pages/Wishlist"
import Search from "./Component/Search"
import ProductsAdmin from "./Admin/ProductsAdmin";
import AddProductAdmin from "./Admin/AddProductAdmin";
import Editproduct from "./Admin/Editproduct";
import ProfileInfo from "./Admin/ProfileInfo";
import Footer from "./Component/Footer"

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
        {/* <Route path="/success" element= {<Success/>} /> */}
        <Route path="/dashboard" element= {<ProfileInfo/>}/>
        <Route path="/dashboard/products"element= {<ProductsAdmin />}/>
        <Route path="/dashboard/products/add"element= {<AddProductAdmin />}/>
        <Route path="/dashboard/products/:id"element= {<Editproduct />}/>
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;
