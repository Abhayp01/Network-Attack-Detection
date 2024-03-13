import React from "react";
import Progressbar from "./Progressbar";

function Tkinter() {
  return (
    <div className="mockup-window border w-[500px] bg-blue-500">
      <div className="flex justify-center px-4  h-[400px] py-16 bg-base-200">
        <div> 
            <div className="ml-4 text-black">Network Attack Detection</div>
             <Progressbar/>
        </div>
         </div>
    </div>
  );
}

export default Tkinter;
