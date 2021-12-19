import { useState, useEffect} from "react";
import {Link,useParams } from "react-router-dom";
import Products from "../Component/Products";

export default function ProductsList() {
    const {category} = useParams();
    console.log(category);

    const [filter,setFilter] = useState("");
    const [sort, setSort] = useState("newest");

    


    return (
        <>
        {/* shop wrapper */}
        <div className="container grid grid-cols-3 gap-6  pt-20 pb-16 items-start">
            {/* products */}
            <div className="col-span-3">
                {/* sorting */}
                <div className="flex items-center mb-4">
                <select name="sort" onChange={(e)=> setSort(e.target.value)} className="w-44 text-sm justify-center text-color5 px-4 py-3  border-color12 shadow-sm rounded focus:ring-color1 focus:border-color1">
                <option  selected disabled>Sort</option>
                    <option value="newst">Newest</option>
                    <option value="asc">Price (Low)</option>
                    <option value="desc">Price (High)</option>
                </select> 
            

                <div className=" flex gap-2 ml-auto">
                <select name="brand" onChange={(e)=> setFilter(e.target.value)} className="w-44 justify-center  text-sm text-color5 px-4 py-3  border-color1 shadow-sm rounded focus:ring-color1 focus:border-color1">
                <option selected disabled>Brand</option>
                    <option   value="kiko">KIKO</option>
                    <option value="benefit">Benefit</option>
                    <option value="nyx">NYX</option>
                    <option value="mac">MAC</option>
                </select> 
                </div>
                </div>

                
            {/* product Grid */}
            
                {/* map products */}
                <Products category={category} filter={filter} sort={sort}/>
            
            </div>
        </div>
            
        </>
    )
}
