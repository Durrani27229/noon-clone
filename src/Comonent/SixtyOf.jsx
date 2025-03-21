import React from 'react'
import Btn from "./Btn"

const SixtyOf = () => {
    const link = [
        "https://f.nooncdn.com/mpcms/EN0001/assets/ba9c31da-10e9-47e9-bea1-d8d8f6aaf270.png",
        "https://f.nooncdn.com/mpcms/EN0001/assets/55b0f518-36d6-4036-9fa3-e1c457f71ae7.png",
        "https://f.nooncdn.com/mpcms/EN0001/assets/412fc52b-9508-4321-840b-4181a38d4f85.png",
        "https://f.nooncdn.com/mpcms/EN0001/assets/f25ae3cd-ee90-41a0-a705-b6485d1df630.png",
        "https://f.nooncdn.com/mpcms/EN0001/assets/7182354c-6cc3-4a86-ac5f-e8f3c38837c4.png",
        "https://f.nooncdn.com/mpcms/EN0001/assets/106a3951-0bc6-4da2-84eb-f075739e2319.png",
        "https://f.nooncdn.com/mpcms/EN0001/assets/5b41142e-2209-4cf2-acf1-9480b9e4de2d.png"
    ]
  return (
    <div className='mt-3 mb-4 p-3 bg-[#feead5] rounded-2xl container mx-auto px-4'>
    <div className="flex justify-between items-center  px-3 ">
     <p className="font-res font-bold text-3xl flex gap-1  text-red-500  p-2">
     Up TO 60% OFF
       <span className="font-res font-bold text-3xl text-black">
           ELECTRONICS
       </span>
     </p>
     <Btn title="View All" color="black" textColor="white" class="btn-res" />
   </div>

   <div className='mother flex justify-center gap-4 mt-3  '>
    {
         link.map((item,index) => {
             return (
                 <div  key={index}>
                     <img src={item}  className='h-full w-full'   alt="img" />
                 </div>
             )
         })
    }
    </div>

 </div>
  )
}

export default SixtyOf
