import React from "react";
import { IoMdArrowDown } from "react-icons/io";
import { CiSearch } from "react-icons/ci";
;

const Header = () => {
    return(

        <div className="bg-white">
      {/* Top*/}
      <div className="bg-black text-center py-2 text-sm text-gray-600">
        Sign up and get 20% off your first order.{' '}
        <a href="#" className="text-white font-semibold underline">Sign Up Now</a>
      </div>

      {/* Header */}
      <header className="border-b py-4 px-4 lg:px-8 flex justify-between items-center">
        <h1 className="text-3xl font-extrabold">Shop.CO</h1>
        <nav className="hidden md:flex space-x-8 text-gray-700">
          <a href="#" className="hover:text-black hover:underline ">Shop</a>
          <IoMdArrowDown className=" justify-start "/>
          <a href="#" className="hover:text-black hover:underline">On Sale</a>
          <a href="#" className="hover:text-black hover:underline">New Arrivals</a>
          <a href="#" className="hover:text-black hover:underline">Brands</a>
        </nav>
        <div className="flex items-center space-x-4">
          <input
            type="text"
            className="border px-4 py-2 rounded-md text-sm hidden md:block"
            placeholder="Search for products..."
          />
          <button className="text-gray-600">🛒</button>
          <button className="text-gray-600">👤</button>
          <button className='text-gray-600 lg:hidden md:hidden'><CiSearch /></button>
        </div>
        {/* Mobile Menu Icon */}
        <button className=" justify-items-start md:hidden text-gray-600">☰</button>
      </header>
</div>
    )
}
export default Header;