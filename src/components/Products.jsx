import React from 'react'
import Tkinter from "./Tkinter";
import Steps from "./Steps";
import Phone from "./Phone";
function Products() {
  return (
    <div className=''>
    <h1 className='flex justify-center font-extrabold text-5xl mt-10 mb-5 text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-blue-500'>Products</h1>
    <div className="flex flex-col gap-10 items-center py-10">
        <div className="flex justify-center w-full">
            <div className="product-card bg-gradient-to-br from-gray-800 to-gray-700 rounded-xl shadow-xl p-5 hover:scale-105 transition-transform duration-300 ease-in-out">
                <Steps />
            </div>
        </div>
       
        <div className="flex flex-col lg:flex-row lg:justify-around lg:items-center w-full px-5">
            <div className="w-fit mx-auto product-card  rounded-xl shadow-xl p-5 hover:scale-105 transition-transform duration-300 ease-in-out">
                <Tkinter />
            </div>
            <div className="w-fit mx-auto product-card  rounded-xl shadow-xl p-5 hover:scale-105 transition-transform duration-300 ease-in-out">
                <Phone />
            </div>
        </div>
    </div>
</div>
  )
}

export default Products