import React from "react";

import Hero from "./components/hero";
import TopSale from "./components/topsale";
import Product from "./components/product";
import Style from "./components/style";



export default function Page (){
  return (
    <div>
   <Hero/>
   <TopSale/> 
   <Product/>
   <Style/>

   </div>

  )

}