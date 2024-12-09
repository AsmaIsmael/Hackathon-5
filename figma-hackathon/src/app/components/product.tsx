
import React from 'react';
import { FaStar, FaRegStar } from 'react-icons/fa';


export default function Product() {
  return (
    <div>
      {/* Top Selling Section */}
      <section className="top-selling">
        <h2 className='text-center p-2 font-bold text-[3rem]'>Top Selling</h2>
        <div className="products">
          {[
            { title: 'Vertical Striped Shirt', price: 212, oldPrice: 232, rating: 5, img: '/greenshirt.png' },
            { title: 'Courage Graphic T-shirt', price: 145, rating: 4, img: '/couregshirt.png' },
            { title: 'Loose Fit Bermuda Shorts', price: 80, rating: 3, img: '/denimshort.png' },
            { title: 'Faded Skinny Jeans', price: 210, rating: 4.5, img: '/blackjeans.png' },
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
    </div>
  );
}