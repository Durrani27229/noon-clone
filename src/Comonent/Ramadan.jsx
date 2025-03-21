import React from 'react'
import Btn from "./Btn"

const Ramadan = () => {
    const link = [
        "https://f.nooncdn.com/mpcms/EN0001/assets/a30c905a-4c97-488e-aeae-7f1b14b26732.png",
        "https://f.nooncdn.com/mpcms/EN0002/assets/e51a27f7-6528-4f45-b80c-51cd49a1e94a.png",
        "https://f.nooncdn.com/mpcms/EN0001/assets/55b1226c-0eb2-4caf-866d-c54b5e50a052.png",
        "https://f.nooncdn.com/mpcms/EN0001/assets/8d26aab4-cfff-4769-9091-ebc8fd7c39d7.png",
        "https://f.nooncdn.com/mpcms/EN0001/assets/7ca559bb-edae-4a13-b92c-f3c9bfc3756c.png",
        "https://f.nooncdn.com/mpcms/EN0001/assets/a1cf9227-c4f5-4e6e-9273-10779069e659.png",
        "https://f.nooncdn.com/mpcms/EN0001/assets/a4fb0365-e21f-4028-abd1-9e124995b02c.png"
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

      <div className='flex justify-center gap-4 mt-3  '>
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

export default Ramadan
