import { useState, useEffect} from "react";
import {Link,useParams } from "react-router-dom";
import Products from "../Component/Products";

export default function ProductsList() {
    const {category} = useParams();
    console.log(category);

    const [filters,setFilters] = useState();
    const [sort, setSort] = useState("newest");

    const handleFilters = (e)=>{
        const value = e.target.value;
        setFilters({
            [e.target.name]: value,
        });
    };

    console.log(filters)

    return (
        <>
        {/* shop wrapper */}
        <div className="container grid grid-cols-3 gap-6  pt-20 pb-16 items-start">
            {/* sidebar */}
            {/* <div className="col-span-1 bg-color11 px-4 pb-6 shadow rounded overflow-hidden">
                <div className="divide-y divide-color12 space-y-5"> */}

                    {/* category filter
                    <div>
                        <h3 className="text-xl text-color5 mb-3 pt-4 uppercase font-medium">Categories</h3>
                        
                        <div className="space-y-2 select-none">
                            {/* single category */}
                            {/* <div className="flex items-center">
                                <input type="radio" id="eye" name="Cat" className="text-color1  focus:ring-0 rounded-sm cursor-pointer "/>
                                    <label className="text-color4 ml-3 cursor-pointer radio">Eye</label>
                            </div>
                              {/* single category */}
                            {/* <div className="flex items-center">
                                <input type="radio" id="face" name="Cat" className="text-color1 focus:ring-0 rounded-sm cursor-pointer"/>
                                    <label className="text-color4 ml-3 cursor-pointer radio">Face</label>
                            </div> */}
                              {/* single category */}
                            {/* <div className="flex items-center">
                                <input type="radio" id="lip" name="Cat" className="text-color1 focus:ring-0 rounded-sm cursor-pointer"/>
                                    <label className="text-color4 ml-3 cursor-pointer radio">Lip</label>
                            </div>

                        </div> */}

                    {/* </div>   */}

                     {/* brand filter */}
                    {/* <div className="pt-4">
                        <h3 className="text-xl text-color5 mb-3 uppercase font-medium">Brands</h3>
                        <div className="space-y-2"> */}
                            {/* single brand */}
                            {/* <div className="flex items-center">
                                <input type="radio" id="benefit" name="brand" className="text-color1 focus:ring-0 rounded-sm cursor-pointer"/>
                                    <label className="text-color4 ml-3 cursor-pointer">Benefit</label>
                            </div> */}
                              {/* single category */}
                            {/* <div className="flex items-center">
                                <input type="radio" id="kiko" name="brand" className="text-color1 focus:ring-0 rounded-sm cursor-pointer"/>
                                    <label className="text-color4 ml-3 cursor-pointer">KIKO</label>
                            </div> */}
                              {/* single category */}
                            {/* <div className="flex items-center">
                                <input type="radio" id="nyx" name="brand" className="text-color1 focus:ring-0 rounded-sm cursor-pointer"/>
                                    <label className="text-color4 ml-3 cursor-pointer">NYX</label>
                            </div> */}
                          {/* single category */}
                            {/* <div className="flex items-center">
                                <input type="radio" id="mac" name="brand" className="text-color1 focus:ring-0 rounded-sm cursor-pointer"/>
                                    <label className="text-color4 ml-3 cursor-pointer">MAC</label>
                            </div>

                        </div>
                    </div>

                </div>

            </div> */}

            {/* products */}
            <div className="col-span-3">
                {/* sorting */}
              
                
               <div className="flex items-center mb-4">
               <select className="w-44 text-sm justify-center text-color4 px-4 py-3  border-color12 shadow-sm rounded focus:ring-color1 focus:border-color1">
               <option disabled>Sort</option>
                    <option>Newest</option>
                    <option>Asc</option>
                    <option>Desc</option>
                </select> 
               

                <div className=" flex gap-2 ml-auto">
                <select name="brand"onChange={handleFilters} className="w-44 justify-center  text-sm text-color4 px-4 py-3  border-color1 shadow-sm rounded focus:ring-color1 focus:border-color1">
                   <option disabled>Brand</option>
                    <option>KIKO</option>
                    <option>Benefit</option>
                    <option>NYX</option>
                    <option>MAC</option>
                </select> 
                </div>
               </div>

                
            {/* product Grid */}
            
                {/* map products */}
                <Products category={category} filters={filters} sort={sort}/>
            
            </div>
        </div>
            
        </>
    )
}
