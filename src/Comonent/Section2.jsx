import React from 'react'

const Section2 = () => {
    const link1 = [
        "https://f.nooncdn.com/mpcms/EN0001/assets/58148da9-50f1-49b4-939a-c9e9ffe4b756.png",
        "https://f.nooncdn.com/mpcms/EN0001/assets/8510520a-6a55-4871-8e30-00e624dc1218.png",
        "https://f.nooncdn.com/mpcms/EN0001/assets/b2bf8759-55be-43c3-a300-260d9ec9540b.png",
        "https://f.nooncdn.com/mpcms/EN0001/assets/abb6921f-7493-4427-889f-08f3a0e48f06.png"
    ]

    const link2 = [
        "pic1.png",
        "pic2.png",
        "pic3.png",
        "pic4.png",
    ]

  return (
    <div className='section2 container mx-auto  '>
      <div className='section2-main'>
        <p className='font-bold text-2xl p-2'>MORE REASON TO <span className='font-bold text-red-500'>SHOP</span></p>
       <div className='flex flex-wrap justify-center gap-4 '>
       {
            link1.map((item,index) => {
                return (
                    <div className='sec2-div' key={index}>
                        <img src={item} className='w-full height-full'  alt="img" />
                    </div>
                )
            })
       }
       </div>
       
      </div>
      <div className='section2-main'>
      <p className='font-bold text-2xl p-2'>MORE REASON TO <span className='font-bold text-red-500'>SHOP</span></p>
       <div className='flex flex-wrap justify-center gap-4  '>
       {
            link2.map((item,index) => {
                return (
                    <div className='sec2-div' key={index}>
                        <img src={item} alt="img" className='w-full h-full'  />

                    </div>
                )
            })
       }
       </div>
      </div>
      <div className='section2-main'>
        <p className='font-bold text-2xl p-2'>IN <span className='font-bold text-red-500'>FOCUS</span></p>
        <div className='flex flex-col items-center justify-center gap-3'>
            <div className='w-[98%]'>
                <img src="https://f.nooncdn.com/ads/banner-410x410/en_dk_uae-top-01%20(1).1742367339.3466096.png" className='w-full h-[230px]' alt="" />
            </div>
            <div className='w-[98%]'>
                <img src="https://f.nooncdn.com/ads/banner-410x410/en_dk_uae-top-02%20(3).1741352283.1555793.png" className='w-full h-[230px]' alt="" />
            </div>
        </div>
      </div>
    </div>
  )
}

export default Section2
