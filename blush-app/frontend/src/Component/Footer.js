import React from 'react'
import {Link} from "react-router-dom";

function Footer() {
    return (
        <div className=" bg-color8">
        <div className="px-4 pt-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
          <div className="grid row-gap-10 mb-8 lg:grid-cols-6">
            <div className="grid grid-cols-2 gap-5 row-gap-8 lg:col-span-4 md:grid-cols-4">
              <div>
                <p className="font-medium tracking-wide text-color3">
                  Our Category
                </p>
                <ul className="mt-2 space-y-2">
                  <li>
                    <Link
                      to="/"
                      className="text-color6 transition-colors duration-300 hover:text-color1"
                    >
                      News
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/products/lip"
                      className="text-color6 transition-colors duration-300 hover:text-color1"
                    >
                      Lip
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/products/eye"
                      className="text-color6 transition-colors duration-300 hover:text-color1"
                    >
                      Eye
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/products/face"
                      className="text-color6 transition-colors duration-300 hover:text-color1"
                    >
                      Face
                    </Link>
                  </li>
                </ul>
              </div>
              <div>
                <p className="font-medium tracking-wide text-color3">Our Brands</p>
                <ul className="mt-2 space-y-2">
                  <li>
                    <Link
                      to="/"
                      className="text-color6 transition-colors duration-300 hover:text-color1"
                    >
                      Benefit
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/"
                      className="text-color6 transition-colors duration-300 hover:text-color1"
                    >
                      Kiko
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/"
                      className="text-color6 transition-colors duration-300 hover:text-color1"
                    >
                      NYX
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/"
                      className="text-color6 transition-colors duration-300 hover:text-color1"
                    >
                      MAC
                    </Link>
                  </li>

                </ul>
              </div>
              <div>
                <p className="font-medium tracking-wide text-color3">Customer Services</p>
                <ul className="mt-2 space-y-2">
                  <li>
                    <Link
                      to="/"
                      className="text-color6 transition-colors duration-300 hover:text-color1"
                    >
                    Terms & Conditions
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/"
                      className="text-color6 transition-colors duration-300 hover:text-color1"
                    >
                      FAQS
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/"
                      className="text-color6 transition-colors duration-300 hover:text-color1"
                    >
                      Privacy Policy
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/"
                      className="text-color6 transition-colors duration-300 hover:text-color1"
                    >
                      Delivery
                    </Link>
                  </li>
                </ul>
              </div>

            </div>
            <div className="md:max-w-md lg:col-span-2">
              <span className="text-base font-medium tracking-wide text-color3">
                Subscribe for updates
              </span>
              <form className="flex flex-col mt-4 md:flex-row">
                <input
                  placeholder="Email"
                  required
                  type="text"
                  className="flex-grow w-full h-12 px-4 mb-3 transition duration-200 bg-color11 border border-color12 rounded shadow-sm appearance-none md:mr-2 md:mb-0 focus:border-color1 focus:outline-none focus:shadow-outline"
                />
                <button
                  type="submit"
                  className="inline-flex items-center justify-center h-12 px-6 font-medium tracking-wide text-color11 transition duration-200 rounded shadow-md bg-color10 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none"
                >
                  Subscribe
                </button>
              </form>
              <p className="mt-4 text-sm text-color14">
              To keep up to date with the latest arrivals,
              direct to your inbox..
              </p>
            </div>
          </div>
          <div className="flex flex-col justify-between pt-5 pb-10 border-t border-color12 sm:flex-row">
            <p className="text-sm text-color14">
              © Copyright 2021 Blush Store . All rights reserved.
            </p>
            <div className="flex items-center mt-4 space-x-4 mr-12 sm:mt-0">
              <Link
                to="/"
                className="text-color14 transition-colors duration-300 hover:text-color1"
              >
                <svg viewBox="0 0 24 24" fill="currentColor" className="h-5">
                  <path d="M24,4.6c-0.9,0.4-1.8,0.7-2.8,0.8c1-0.6,1.8-1.6,2.2-2.7c-1,0.6-2,1-3.1,1.2c-0.9-1-2.2-1.6-3.6-1.6 c-2.7,0-4.9,2.2-4.9,4.9c0,0.4,0,0.8,0.1,1.1C7.7,8.1,4.1,6.1,1.7,3.1C1.2,3.9,1,4.7,1,5.6c0,1.7,0.9,3.2,2.2,4.1 C2.4,9.7,1.6,9.5,1,9.1c0,0,0,0,0,0.1c0,2.4,1.7,4.4,3.9,4.8c-0.4,0.1-0.8,0.2-1.3,0.2c-0.3,0-0.6,0-0.9-0.1c0.6,2,2.4,3.4,4.6,3.4 c-1.7,1.3-3.8,2.1-6.1,2.1c-0.4,0-0.8,0-1.2-0.1c2.2,1.4,4.8,2.2,7.5,2.2c9.1,0,14-7.5,14-14c0-0.2,0-0.4,0-0.6 C22.5,6.4,23.3,5.5,24,4.6z" />
                </svg>
              </Link>
              <Link
                to="/"
                className="text-color14 transition-colors duration-300 hover:text-color1"
              >
                <svg viewBox="0 0 30 30" fill="currentColor" className="h-6">
                  <circle cx="15" cy="15" r="4" />
                  <path d="M19.999,3h-10C6.14,3,3,6.141,3,10.001v10C3,23.86,6.141,27,10.001,27h10C23.86,27,27,23.859,27,19.999v-10   C27,6.14,23.859,3,19.999,3z M15,21c-3.309,0-6-2.691-6-6s2.691-6,6-6s6,2.691,6,6S18.309,21,15,21z M22,9c-0.552,0-1-0.448-1-1   c0-0.552,0.448-1,1-1s1,0.448,1,1C23,8.552,22.552,9,22,9z" />
                </svg>
              </Link>
             
            </div>
          </div>
        </div>
      </div>
    )
}

export default Footer
