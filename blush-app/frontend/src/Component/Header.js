import react, { useState } from "react";
import {Link} from "react-router-dom";
function Header() {
    const [menu, setMenu] = useState(false);
    return (
        <>
{/* <div>
 <section>
            <div class="w-full relative pb-6 px-6 xl:px-0">
                <div class="absolute w-full inset-0 h-full object-cover object-center bg-color8" ></div>
                <div class="pt-24 lg:flex items-center relative z-10 container mx-auto">
                    <div class="w-full lg:w-1/2 h-full lg:pr-10 xl:pr-0">
                        <img tabindex="0" role="img" aria-label="people smiling" class="mx-auto" src="https://cdn.tuk.dev/assets/templates/weCare/hero2-left.png"  alt="people smiling"/>
                    </div>
                    <div  role="contentinfo"  class="w-full lg:w-1/2 h-full">
                        <p tabindex="0" class="text-indigo-700 uppercase text-2xl mb-4">Qusique Tincidun sapien</p>
                        <h1 tabindex="0" class="text-indigo-700 text-4xl lg:text-6xl font-black mb-8">All natural ingredients</h1>
                        <p tabindex="0" class="text-gray-800 font-regular mb-8">COMBINING SCIENCE WITH BEAUTY. L'Oreal Paris offerincare products is developed and rigorously tested with leading scientists. Indulge yourself in a luxurious and sensorial skincare experience. Cutting-edge innovations, proven by Science.</p>
 
                    </div>
                </div>
            </div>
        </section> */}

            
        {/* header background */}
        <div className=" bg-cover  bg-no-repeat bg-center py-32 " style={{backgroundImage:"url(header.png)" }}>
            <div className="container">
                <h1 className="text-5xl text-color3 font-medium font-sans mb-5 capitalize"> Best Beauty Cosmetics</h1>
                {/* <h1 className="text-5xl text-color3 font-medium mb-4 capitalize"> Meet your latest obsessions </h1> */}
             
            </div>
            <div className="mt-12">
                <Link to="/products" className="bg-color5 border border-color5 text-color11  ml-32 px-8 py-3 font-medium rounded-md hover:bg-transparent hover:text-color5">
                    SHOPE NOW
                </Link>
            </div>
        </div>

        {/* features section */}
        <div className="container py-16">
            <div className="w-10/12 grid grid-cols-3 gap-6 mx-auto justify-center">

                {/* single feature */}
                <div className="border border-color1  rounded-md  px-3 py-6 flex justify-center items-center gap-5">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-9 w-9 object-contain text-color1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path d="M9 17a2 2 0 11-4 0 2 2 0 014 0zM19 17a2 2 0 11-4 0 2 2 0 014 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h1m8-1a1 1 0 01-1 1H9m4-1V8a1 1 0 011-1h2.586a1 1 0 01.707.293l3.414 3.414a1 1 0 01.293.707V16a1 1 0 01-1 1h-1m-6-1a1 1 0 001 1h1M5 17a2 2 0 104 0m-4 0a2 2 0 114 0m6 0a2 2 0 104 0m-4 0a2 2 0 114 0" />
                </svg>
                <div>
                    <h4 className="font-medium capitalize text-lg text-color5 ">Free Delivery</h4>
                    <p className="text-sm text-color4">Order Over 300 SAR</p>
                </div>
                </div>

                    {/* single feature */}
                    <div className="border border-color1  rounded-md  px-3 py-6 flex justify-center items-center gap-5">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-9 w-9 object-contain text-color1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                <div>
                    <h4 className="font-medium capitalize text-lg text-color5 ">Money Returns</h4>
                    <p className="text-sm text-color4">30 Days Money Returns</p>
                </div>
                </div>
                    {/* single feature */}
                    <div className="border border-color1  rounded-md  px-3 py-6 flex justify-center items-center gap-5">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-9 w-9 object-contain text-color1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
                    </svg>
                <div>
                    <h4 className="font-medium capitalize text-lg text-color5 ">24 / 7 Support</h4>
                    <p className="text-sm text-color4">Customer Support</p>
                </div>
                </div>
            </div>
        </div>

        </>
    )
}

export default Header
