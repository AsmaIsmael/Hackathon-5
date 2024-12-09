import React from 'react';
import { FaStar, FaRegStar } from 'react-icons/fa';


export default function TopSale() {
  return (
   <>
    <div  className="product">
    <h2 className="text-center p-2 font-bold text-[3rem]">NEW ARRIVALS</h2>
    </div>
    <section className="top-selling">
        <div className="products">
          {[
            { title: 'T-Shirt With Tape Detail', price: 120, oldPrice: null, rating: 4.5, img: '/blackshirt.png' },
            { title: 'Skinny Fit Jeans', price: 240, oldPrice:260, rating: 3.5, img: '/denimjeans.png' },
            { title: 'Checkered Shirt', price: 180, rating: 4.5, img: '/checkshirt.png' },
            { title: 'Sleeve Stripted T-Shirt', price: 130,oldPrice:160, rating: 4.5, img: '/orengeshirt.png' },
          ].map((product, idx) => (
            <div className="product-card" key={idx}>
              <img src={product.img} alt={product.title} />
              <h3>{product.title}</h3>
              <p>
                ${product.price}{' '}
                {product.oldPrice && (
                  <span className="old-price">${product.oldPrice}</span>
                )}
              </p>
              <div className="rating">
                {[...Array(5)].map((_, i) =>
                  i < Math.floor(product.rating) ? (
                    <FaStar key={i} />
                  ) : (
                    <FaRegStar key={i} />
                  )
                )}
              </div>
            </div>
          ))}
        </div>
      </section>
      <div
      className=" flex justify-center items-center w-full mt-4">
         <button className=" productBtn text-[#000000] p-2 border-2 border-[rgb(23,18,18)] ">View All</button>
      </div>


</>
  )}