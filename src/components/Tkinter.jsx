import React from "react";
import Progressbar from "./Progressbar";

function Tkinter() {
  return (
    <div className="mockup-window border bg-base-300 w-[500px]">
      <div className="flex justify-center px-4 py-16 bg-base-200">
        <div> 
            <div className="ml-4 text-black">Network Attack Detection</div>
             <Progressbar/>
        </div>
         </div>
    </div>
  );
}

export default Tkinter;
