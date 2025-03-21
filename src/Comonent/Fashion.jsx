import React from "react";
import Btn from "./Btn";

import { FaRegHeart } from "react-icons/fa";
import { MdOutlineShoppingCart } from "react-icons/md";
import { FaStar } from "react-icons/fa";
import { TbTruckDelivery } from "react-icons/tb";

const Fashion = () => {
  const cartItems = [
    {
      id: 1,
      img: "https://f.nooncdn.com/p/pzsku/Z0D46B1BF1F048F18B94FZ/45/_/1742374050/c43f0d25-2206-427f-baa5-e0fa3f936d4b.jpg?format=jpg&width=240",
      rating: "4.4",
      reviews: "911",
      title: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quidem.",
      price: "79",
      previous: "199",
      discount: "60%",
    },
    {
      id: 2,
      img: "https://f.nooncdn.com/p/pzsku/ZEB6C719FFD188F9620FFZ/45/_/1738956026/44c75ca2-8d8a-4bc9-a7ab-08eb98562c20.jpg?format=jpg&width=240",
      rating: "4.6",
      reviews: "521",
      title:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quidem.",
      price: "98",
      previous: "389",
      discount: "74%",
    },
    {
      id: 3,
      img: "https://f.nooncdn.com/p/pzsku/Z500663E7FB1AE2AB593EZ/45/_/1739960835/62c9b4c6-19c5-4722-8f9d-4979e12e72a7.jpg?format=jpg&width=240",
      rating: "4.6",
      reviews: "215",
      title:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quidem.",
      price: "99",
      previous: "319",
      discount: "68%",
    },
    {
      id: 4,
      img: "https://f.nooncdn.com/p/pzsku/Z841FC5ED8C0E8D8BE6FAZ/45/_/1722567636/37c4c87b-03a4-41b8-8c85-64aa7c077670.jpg?format=jpg&width=240",
      rating: "4.7",
      reviews: "66",
      title:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quidem.",
      price: "99",
      previous: "349",
      discount: "78%",
    },
    {
      id: 5,
      img: "https://f.nooncdn.com/p/pzsku/Z6615EAF6BFB9C1A9C92EZ/45/_/1739438049/aa1a30c5-c291-41b3-9bc6-dc34b7ca9623.jpg?format=jpg&width=240",
      rating: "4.3",
      reviews: "1.5k",
      title:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quidem.",
      price: "169",
      previous: "785",
      discount: "78%",
    },
    {
      id: 6,
      img: "https://f.nooncdn.com/p/pzsku/Z61E886D13430E849B011Z/45/_/1726948466/86011fb4-1c7e-488d-b276-1cf2c994adfc.jpg?format=jpg&width=240",
      rating: "4.5",
      reviews: "4.6k",
      title:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quidem.",
      price: "199",
      previous: "399",
      discount: "50%",
    },
  ];
  return (
    <div className="container mx-auto px-4 mt-5 mb-5 rounded-3xl pt-5 pb-5 bg-gray-100">
      <div className="flex justify-between items-center  px-3 mb-2 ">
        <p className="font-res font-bold text-3xl flex gap-1  text-red-500 p-2">
          RECOMMENDED
          <span className="font-res font-bold text-3xl text-black">FOR YOU</span>
        </p>
        <Btn title="View All" color="black" textColor="white" class="btn-res" />
      </div>
      <div className="cart-main flex gap-2 bg-gray-100 rounded-2xl flex-wrap justify-center">
        {cartItems.map((item, index) => {
          return (
            <div className="cart" key={index}>
              <div className="relative rounded-2xl p-2 flex flex-col">
                <div className="flex justify-between">
                  <button className="bg-gray-700 text-sm text-white px-2 rounded-2xl absolute">
                    Best Seller
                  </button>
                  <FaRegHeart className="text-2xl absolute right-2" />
                </div>
                <div>
                  <img className="rounded-2xl w-full" src={item.img} alt="" />
                </div>
                <div className="flex justify-between items-center">
                  <p className="text-sm flex gap-1 items-center">
                    {item.rating}
                    <span>
                      <FaStar className="text-green-400" />
                    </span>
                    <span className="text-gray-400">{item.reviews}</span>
                  </p>
                  <MdOutlineShoppingCart className="text-3xl" />
                </div>
              </div>
              <div>
                <p className="text-sm">{item.title.slice(0, 100)}</p>
              </div>
              <div className="flex text-sm items-center">
                <p>AED</p>
                <p className="font-bold text-xl">{item.price}</p>
                <p className="line-through text-gray-300">{item.previous}</p>
                <p className="text-green-500 font-bold">{item.discount}</p>
              </div>
              <div className="flex items-center gap-2 mb-1">
                <TbTruckDelivery />
                <p className="text-sm text-gray-400">Free Delivery</p>
              </div>
              <div>
                <button className="bg-yellow-300 px-3 rounded-2xl">
                  express
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Fashion;
