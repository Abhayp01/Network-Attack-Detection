import React, { useState } from "react";

import Mlmodel from "./components/Mlmodel";
import Products from "./components/Products";
import Navbar from "./components/Navbar";
Navbar
function App() {
  return (
    <>
      <div className="">
        <Navbar/>
      </div>
      <section className="mlmodel">
      <div>
        <Mlmodel />
      </div>
      </section>
      <section id="Product">
      <div className="mt-10">
        <Products/>
      </div>
      </section>
    </>
  );
}

export default App;
