import React from 'react'
import Btn from "./Btn"
import { FaRegHeart } from "react-icons/fa";
import { MdOutlineShoppingCart } from "react-icons/md";
import { FaStar } from "react-icons/fa";
import { TbTruckDelivery } from "react-icons/tb";

const BestSeller = () => {
    const cartItems = [
        {
          id: 1,
          img: "https://f.nooncdn.com/p/pnsku/N70004054V/45/_/1724658691/17c0ea9d-4d2e-4eff-a6c8-e2c3c787fcf6.jpg?format=jpg&width=240",
          rating: "4.4",
          reviews: "911",
          title:
            "4L Air Fryer, Compact Design, Fast Crispy Cooking, Roast, Bake & Reheat, Adjustable Temperature & Timer 4 L 1600 W EVKA-AF3801B Black",
          price: "79",
          previous: "199",
          discount: "60%",
        },
        {
          id: 2,
          img: "https://f.nooncdn.com/p/pnsku/N42370482A/45/_/1722495694/794e58e8-fa32-4f22-9e21-13e138db0e88.jpg?format=jpg&width=240",
          rating: "4.6",
          reviews: "521",
          title:
            "4L Air Fryer, 3D Airflow System, Non-Stick Multi-Layer Basket, Less Oil Cooking, Adjustable Time & Temperature 4 L 1500 W EVKA-AF4001BS Black",
          price: "98",
          previous: "389",
          discount: "74%",
        },
        {
          id: 3,
          img: "https://f.nooncdn.com/p/pnsku/N53390404A/45/_/1731583066/57d5b46a-cdf2-490f-a675-6245a6541738.jpg?format=jpg&width=240",
          rating: "4.6",
          reviews: "215",
          title:
            "Air Fryer 4 L Pot| Non-Stick Coating with Vortex Frying Technology| Multiple Function, 1-60 Min Timer, Temperature 80-200 Degree Celsius| Ideal for Fries Steak Chicken Cake Meat Bread etc| 2 Years Warranty 4 L 1500 W GAF37513 Black",
          price: "99",
          previous: "319",
          discount: "68%",
        },
        {
          id: 4,
          img: "https://f.nooncdn.com/p/pnsku/N53403324A/45/_/1733722597/3f08ae7f-df13-4f2d-8ccc-dbebc2eeb29b.jpg?format=jpg&width=240",
          rating: "4.7",
          reviews: "66",
          title:
            "Easy Fry Max Digital Air Fryer, 3.5L, 10in1, Uses No Oil, Air Fry, Extra Crisp, Roast, Bake, Reheat, Dehydrate, 6 Portions, Non-Stick, Dishwasher Safe Baskets",
          price: "99",
          previous: "349",
          discount: "78%",
        },
        {
          id: 5,
          img: "https://f.nooncdn.com/p/pnsku/N70083886V/45/_/1732104736/faba8b03-4b18-4924-89ae-b2db1b30c315.jpg?format=jpg&width=240",
          rating: "4.3",
          reviews: "1.5k",
          title:
            "Digital Air Fryer, Rapid Air Convection Technology, Multi-Function for Frying, Baking, Grilling & Roasting, Cool-Touch Handle, Safety Lock, 4 L 1500 W AF400-B5 Black",
          price: "169",
          previous: "785",
          discount: "78%",
        },
        {
          id: 6,
          img: "https://f.nooncdn.com/p/pzsku/ZFEB6EC632D7F0908CC57Z/45/_/1735380944/b36df90a-684c-4a8f-aa4a-65a2e135f423.jpg?format=jpg&width=240",
          rating: "4.5",
          reviews: "4.6k",
          title:
            "Essential Air Fryer With Rapid Air Technology 4.1 L 1400 W HD9200/91/90 Black",
          price: "199",
          previous: "399",
          discount: "50%",
        },
      ];
  return (
    <div className="container mx-auto px-4 mt-5 mb-5 rounded-3xl pt-5 pb-5 bg-gray-100">
    <div className="flex justify-between items-center px-3 mb-2 ">
      <p className="font-bold text-3xl flex gap-1  text-red-500 p-2">
        BEST SELLER IN
        <span className="font-bold text-3xl text-black">
           HOME APPLIANCES
        </span>
      </p>
      <Btn title="View All" color="black" textColor="white" />
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
              <img
                className="rounded-2xl w-full"
                src={item.img}
                alt=""
              />
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
            <p className="text-sm">
             {item.title.slice(0, 100)}
            </p>
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
  )
}

export default BestSeller
