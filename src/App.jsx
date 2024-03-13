import React, { useState } from "react";
import Tkinter from "./components/Tkinter";
import Steps from "./components/steps";
import Phone from "./components/Phone";
import Mlmodel from "./components/Mlmodel";
import { TypeAnimation } from "react-type-animation";
function App() {
  return (
    <>
  <div className="flex justify-center">
  <nav class="mt-8 bg-gradient-to-r from-slate-900 to-gray-900 rounded-full w-[60%] shadow-lg">
    <div class="container mx-auto px-4 py-2 flex justify-between items-center">
      <a href="#" class="gradient-text text-xl  font-extrabold uppercase hover:text-blue-400 transition duration-300 ease-in-out"><TypeAnimation
      sequence={[
        'NAD',
        2000,
        'Network Attack Detection',
        1000,
      ]}
      wrapper="span"
      speed={30}
      style={{ fontSize: '1em', display: 'inline-block' }}
      repeat={Infinity}
    /></a>
      <ul class="flex space-x-4">
        <li><a href="#" class="flex items-center  font-bold text-white hover:text-blue-400 px-3 py-2 rounded-full transition duration-300 ease-in-out"><i class="fas fa-brain mr-2"></i> ML Model</a></li>
        <li><a href="#" class="flex items-center  font-bold text-white hover:text-blue-400 px-3 py-2 rounded-full transition duration-300 ease-in-out"><i class="fas fa-box-open mr-2"></i> Products</a></li>
        <li><a href="#" class="flex items-center  font-bold text-white hover:text-blue-400 px-3 py-2 rounded-full transition duration-300 ease-in-out"><i class="fas fa-cogs mr-2"></i> Features</a></li>
      </ul>
    </div>
  </nav>
</div>
<div>
  <Mlmodel/>
</div>

    <div className="flex flex-col gap-5">
      <div className="flex justify-center"><Steps/></div>
      <div className="flex justify-center"><Tkinter/></div>
      <div className="flex justify-center"><Phone/></div>
    </div>
    </>
  );
}

export default App;
