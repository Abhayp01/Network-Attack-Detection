import React from "react";
import Radial from "./Radial";
function Phone() {
  return (
    <div className="mockup-phone w-[300px] border-[#f3b8e6]">
      <div className="camera"></div>
      <div className="display w-auto">
        <div className="artboard artboard-demo phone-1">
          <div className="mr-10 font-bold">Accuracy</div>
          <div className="mr-10"><Radial /></div>
          <div><div id="hs-single-bar-chart"></div></div>
        </div>
      </div>
    </div>
  );
}

export default Phone;
