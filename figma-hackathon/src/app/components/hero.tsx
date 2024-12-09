import React from 'react';
import Image from 'next/image';

import { FC } from 'react';


const Hero: FC = () => {
  return (
    <div className="bg-white">
     


      {/* Hero Section */}
      <section className="container mx-auto px-4 lg:px-8 py-16 lg:py-24 flex flex-col lg:flex-row items-center justify-between">
        <div className="text-center lg:text-left lg:w-1/2 space-y-6">
          <h2 className="text-4xl lg:text-6xl font-extrabold leading-tight text-black">
          FIND CLOTHES THAT MATCHES YOUR STYLE
          </h2>
          <p className="text-gray-600 max-w-lg">
            Browse through our diverse range of meticulously crafted garments,
            designed to bring out your individuality and cater to your sense of style.
          </p>
          <a href="#" className="bg-black text-white px-8 py-3 rounded-full inline-block mt-6">
            Shop Now
          </a>
        </div>
        <div className="lg:w-1/2 mt-10 lg:mt-0">
          <img src="/main.png" alt="model" className="w-full object-cover" 
  width={800}       
  height={600}        
 />
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-gray-50 py-12">
        <div className="container mx-auto px-4 lg:px-8 flex justify-between text-center">
          <div className="space-y-2">
            <h3 className="text-3xl font-bold text-black">200+</h3>
            <p className="text-gray-500">International Brands</p>
          </div>
          <div className="space-y-2">
            <h3 className="text-3xl font-bold text-black">2,000+</h3>
            <p className="text-gray-500">High-Quality Products</p>
          </div>
          <div className="space-y-2">
            <h3 className="text-3xl font-bold text-black">30,000+</h3>
            <p className="text-gray-500">Happy Customers</p>
          </div>
        </div>
      </section>

    
{/* Brands Section */}
<section className="py-12 bg-black">
  <div className="container mx-auto px-4 lg:px-8 flex flex-wrap justify-center gap-12 text-white">
    <ul className="flex flex-wrap gap-8 justify-center items-center">
      <li className="text-3xl md:text-4xl lg:text-5xl">VERSACE</li>
      <li className="text-2xl md:text-3xl lg:text-4xl">ZARA</li>
      <li className="text-2xl md:text-3xl lg:text-4xl">GUCCI</li>
      <li className="font-bold text-2xl md:text-3xl lg:text-4xl">PRADA</li>
      <li className="text-2xl md:text-3xl lg:text-4xl">Calvin Klein</li>
    </ul>
  </div>
</section>

{/* product section  */}


<div>
  
</div>
 </div>

  );
};

export default Hero;
