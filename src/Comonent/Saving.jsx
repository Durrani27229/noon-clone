import React from 'react'
import Btn from "./Btn"

const Saving = () => {
    const link = [
        "https://f.nooncdn.com/mpcms/EN0001/assets/f1dd7583-1a21-4207-99ee-8598be45f0f1.png",
        "https://f.nooncdn.com/mpcms/EN0001/assets/a52e5dab-07f6-4bf2-a443-82e4051fa21e.png",
        "https://f.nooncdn.com/mpcms/EN0001/assets/db132ede-6be7-4071-874a-21c9c72591ff.png",
        "https://f.nooncdn.com/mpcms/EN0001/assets/82a91dca-b9ea-4ade-835e-6311e318f099.png",
    ]

  return (
    <div className='mt-3 mb-4 p-3 bg-[#feead5] rounded-2xl container mx-auto px-4'>
       <div className="flex justify-between items-center  px-3 ">
        <p className="font-res font-bold text-3xl flex gap-1  text-black  p-2">
          RAMADAN's ESSENTIAL
          <span className="font-res font-bold text-3xl text-red-500">
             ESSENTIAL
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

export default Saving
