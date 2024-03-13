import React from 'react'
import { TypeAnimation } from "react-type-animation";
function Navbar() {
  return (
    <div className='flex justify-center'>
        <nav className="mt-8 bg-gradient-to-r from-slate-900 to-gray-950 rounded-full w-[60%] shadow-lg">
          <div className="container mx-auto px-4 py-2 flex justify-between items-center">
            <a
              href="#"
              className="gradient-text text-xl  font-extrabold uppercase hover:text-blue-400 transition duration-300 ease-in-out"
            >
              <TypeAnimation
                sequence={["NAD", 2000, "Network Attack Detection", 1000]}
                wrapper="span"
                speed={30}
                style={{ fontSize: "1em", display: "inline-block" }}
                repeat={Infinity}
              />
            </a>
            <ul className="flex space-x-4">
              <li>
                <a
                  href="#mlmodel"
                  className="flex items-center  font-bold text-white hover:text-blue-400 px-3 py-2 rounded-full transition duration-300 ease-in-out"
                >
                  <i className="fas fa-brain mr-2"></i> ML Model
                </a>
              </li>
              <li>
                <a
                  href="#Product"
                  className="flex items-center  font-bold text-white hover:text-blue-400 px-3 py-2 rounded-full transition duration-300 ease-in-out"
                >
                  <i className="fas fa-box-open mr-2"></i> Products
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="flex items-center  font-bold text-white hover:text-blue-400 px-3 py-2 rounded-full transition duration-300 ease-in-out"
                >
                  <i className="fas fa-cogs mr-2"></i> Features
                </a>
              </li>
            </ul>
          </div>
        </nav>
    </div>
  )
}

export default Navbar