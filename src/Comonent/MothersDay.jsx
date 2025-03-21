import React from 'react'
import Btn from "./Btn"

const MothersDay = () => {
    const link = [
        "https://f.nooncdn.com/mpcms/EN0001/assets/1c2e0aa5-8b96-4d19-a11e-466516387db6.png",
        "https://f.nooncdn.com/mpcms/EN0001/assets/a66ffa10-ea58-42a2-8565-97dfab712d07.png",
        "https://f.nooncdn.com/mpcms/EN0001/assets/64969e27-cb65-4cd4-8f15-5622fb0b82db.png",
        "https://f.nooncdn.com/mpcms/EN0001/assets/b66c8d20-3cf1-4703-b9f8-7212464cc3ae.png",
        "https://f.nooncdn.com/mpcms/EN0001/assets/b4a6bae1-f195-4624-903f-73105d2fcc21.png",
        "https://f.nooncdn.com/mpcms/EN0001/assets/318519c9-d111-443c-aa5d-d95564215f10.png",
        "https://f.nooncdn.com/mpcms/EN0001/assets/6385da9d-370b-43f7-8101-6fdabc228a6d.png",
    ]
  return (
    <div className='mt-3 mb-4 p-3 bg-[#feead5] rounded-2xl container mx-auto px-4'>
       <div className="flex justify-between items-center  px-3 ">
        <p className="font-res font-bold text-3xl flex gap-1  text-black  p-2">
          MOTHER'S DAY
          <span className="font-res font-bold text-3xl text-red-500">
             ESSENTIAL
          </span>
        </p>
        <Btn title="View All" color="black" textColor="white" class="btn-res" />
      </div>

      <div className='mother flex justify-center gap-4 mt-3 min-h-[330px] '>
       {
            link.map((item,index) => {
                return (
                    <div  key={index}>
                        <img src={item}     alt="img" />
                    </div>
                )
            })
       }
       </div>

    </div>
  )
}

export default MothersDay
