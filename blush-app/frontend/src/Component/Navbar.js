import React,{useState} from 'react'
import {Link} from "react-router-dom";
import {useSelector} from "react-redux"
import { useNavigate } from 'react-router';
import UserDropdown from './UserDropdown';


function Navbar() {

const [searchTerm, setSearchTerm] = useState("");
const quantity =  useSelector(state => state.cart.quantity)
const wishlist = useSelector((state) => state.wishlist.products);
const quantitywish =  useSelector(state => state.wishlist.quantity)
const user = useSelector((state) => state.user.currentUser);
const navigate = useNavigate();

let arr = [true, false, false, false, false, false]
    const [style, setStyle] = useState(arr);
    const [dropDown, setDropDown] = useState(true);
    const [text, setText] = useState("");

    const selected = (props) => {
        let newArr = [...arr];
        for (let i = 0; i < newArr.length; i++) {
            newArr[i] = false;
        }
        newArr[props] = true;
        setStyle(newArr);
    }

    const setSelectedText = (txt) => {
        setText(txt);
        setDropDown(true);
    }


    return (
        <>
        {/* header navbar */}
        <div className='py-4 shadow-sm bg-color11 '>
            <div className='container flex items-center justify-between'>
                {/* Logo */}
                <Link to='/'>
                <img
            src={"/Blush logo.png"}
            width="120"
            height="75"
            alt="Blush Store"/> 
                </Link>

              {/* SearchBar */}
                <div className='w-full max-w-xl relative flex'>
                <span className="absolute left-4 top-3 text-lg text-color12"> <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg></span>
                <input type="text" 
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full border border-color1 border-r-0 pl-12 py-3 pr-3 rounded-l-md focus:outline-none text-color3" placeholder="Search"/>
                <Link to={`/search/${searchTerm}`} className=" block py-3  text-center bg-color1 border border-color1  text-color11 px-8 rounded-r-md hover:bg-transparent hover:text-color1 transition">Search</Link>
                </div>
                
                

                {/* icons */}
                <div className="flex item-center text-center space-x-8">
                    <Link to="/wishlist" className="text-center text-color14 hover:text-color1 transition relative">
                        <div className="text-2xl">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-2xl ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                        </svg></div>
                        <div className="text-xs leading-3">Wishlist</div>
                        <span className=" absolute right-0 -top-1 w-5 h-5 rounded-full flex items-center justify-center bg-color10 text-color11 text-xs">{user? wishlist.length :  0}</span>
                    </Link>

                    <Link to="/cart" className="text-center text-color14 hover:text-color1 transition relative">
                    <div className="text-2xl">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-2xl ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg></div>

                    <div className="text-xs leading-3">Cart</div>
                    <span className=" absolute right-0 left-6 -top-1 w-5 h-5 rounded-full flex items-center justify-center bg-color10 text-color11 text-xs">{user?quantity: 0 }</span>
                    </Link>

                { user ? ( <UserDropdown />)
                    : ( <>
                    <Link to="/login" className="text-center text-color14 hover:text-color1 transition relative">
                    <div className="text-2xl">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-2xl text-center" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg></div>

                    <div className="text-xs leading-3 text-center">Login</div>
                    </Link>
                    </>
                )}

                </div>
            </div>
        </div>



        {/* bottom Navbar */}
        <div className="bg-color1 py-2">
            <div className="container flex h-10">
                <div className="flex items-center justify-center flex-grow  ">
                        


                    <nav className="flex items-center space-x-6 capitalize ">

                    {/* For medium and plus sized devices */}
                    <ul className="hidden md:flex  flex-auto space-x-2">
                        <Link to="/products/eye"><li onClick={()=>selected(0)} className={`${style[0] ? 'text-color11 bg-color2 font-medium text-base' : 'text-color11 border border-color1 font-medium text-base '}  focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-color2  cursor-pointer px-3 py-2.5 font-normal text-xs leading-3 shadow-md rounded`}>Eye</li></Link>
                        <Link to="/products/face"><li onClick={()=>selected(1)} className={`${style[1] ? 'text-color11 bg-color2 font-medium text-base' : 'text-color11 border border-color1 font-medium text-base   '} focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 cursor-pointer px-3 py-2.5 font-normal text-xs leading-3 shadow-md rounded`}>Face</li></Link>
                        <Link to="/products/lip"><li onClick={()=>selected(2)} className={`${style[2] ? 'text-color11 bg-color2 font-medium text-base' : 'text-color11 border border-color1 font-medium text-base '} focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 cursor-pointer px-3 py-2.5 font-normal text-xs leading-3 shadow-md rounded`}>Lip</li></Link>
                    </ul>
                </nav>
                {/* for smaller devcies */}
                <div className="block md:hidden w-full mt-5 text-color3 text-center ">
                    <div onClick={()=>setDropDown(!dropDown)} className="cursor-pointer px-4 py-3 text-color11 font-medium text-base rounded flex justify-between items-center w-full">
                        <div className="flex space-x-2">
                            <span id="s1" className={`${text.length != 0 ? '' : 'hidden'} font-semibold text-sm leading-3`}>Selected: </span><p id="textClicked" className="font-normal text-sm leading-3 focus:outline-none  duration-100 cursor-pointer ">{text ? text : "Category"}</p>
                        </div>
                        <svg id="ArrowSVG" className={`${dropDown ? '' : 'rotate-180'} transform duration-100`} width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M6 9L12 15L18 9" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </div>
                    <div className=" relative">
                        <ul id="list" className={`${dropDown ? 'hidden' : 'block'} font-normal text-color3 text-base leading-4 absolute top-2  w-full rounded shadow-md`}>
                        <Link to="/products/eye"><li onClick={()=>setSelectedText("Eye")} className="px-4 py-3 text-color11 bg-color1 border border-color1 focus:outline-none focus:bg-color2 hover:bg-color8 hover:text-color3 duration-100 cursor-pointer text-sm leading-3 font-normal">Eye</li></Link>
                        <Link to="/products/face"><li onClick={()=>setSelectedText("Face")} className="px-4 py-3 text-color11 bg-color1 border border-color1 focus:outline-none focus:bg-color2 hover:bg-color8 hover:text-color3 duration-100 cursor-pointer text-sm leading-3 font-normal">Face</li></Link>
                        <Link to="/products/lip"><li onClick={()=>setSelectedText("Lip")} className="px-4 py-3 text-color11 bg-color1 border border-color1 focus:outline-none focus:bg-color2 hover:bg-color8 hover:text-color3 duration-100 cursor-pointer text-sm  leading-3 font-normal">Lip</li></Link>
                            
                        </ul>
                    </div>
                </div>
            


                        {/* <Link to="/products/eye" className="text-color11 hover:text-color3 transition" >Eye</Link>
                        <Link to="/products/face" className="text-color11 hover:text-color3 transition" >Face</Link>
                        <Link to="/products/lip" className="text-color11 hover:text-color3 transition" >Lip</Link>
                    </div> */}
                </div>
            </div>
        </div>

</>
    )
}

export default Navbar;