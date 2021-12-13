import React from 'react'
import {Link} from "react-router-dom";

function CategoryItem() {
    return (
        <div>
              {/* Categories */}
        <div className="container py-16">
            <h2 className="text-3xl font-medium text-color5 uppercase mb-6">Shop By Category</h2>
            <div className="grid grid-cols-3 gap-3">
                {/* single category */}
               
            <div className="relative rounded-md overflow-hidden group">
                <img src="https://a.namshicdn.com/cms/large/women/20210113/makeup/module_03.jpg" className="w-full  " alt="Eye"/>
                <Link to="/products/eye" className="absolute inset-0 bg-color6 bg-opacity-30 flex items-center justify-center text-4xl text-color11 font-roboto font-medium group-hover:bg-opacity-60 transition">Eye</Link>
            </div>  
                 {/* single category */}
                
                <div className="relative rounded-md overflow-hidden group">
                <img src="https://a.namshicdn.com/cms/large/women/20210113/makeup/module_04.jpg" className="w-full " alt="Eye"/>
                <Link to="/products/face" className="absolute inset-0 bg-color6 bg-opacity-30 flex items-center justify-center text-4xl text-color11 font-roboto font-medium group-hover:bg-opacity-60 transition">Face</Link>
            </div> 
                 {/* single category */}
               
                <div className="relative rounded-md overflow-hidden group">
                <img src="https://a.namshicdn.com/cms/large/women/20210113/makeup/module_02.jpg" className="w-full " alt="Eye"/>
                <Link to="/products/lip" className="absolute inset-0 bg-color6 bg-opacity-30 flex items-center justify-center text-4xl text-color11 font-roboto font-medium group-hover:bg-opacity-60 transition">Lip</Link>
            </div> 

            </div>
        </div>
        </div>
    )
}

export default CategoryItem;
