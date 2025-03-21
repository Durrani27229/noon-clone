import { electronicsCategories , fashionCategories ,
     homeAndKitchen , 
     beauty , 
     babyAndToys, 
     topBrands, 
     discoverNow  } from "./app" 

const FooterLinks = () => {
 
    return (
        <div className="container mx-auto">
            <div className="grid hide-on-small sm:grid-cols-5 lg:grid-cols-7 xl:grid-cols-7 gap-3 py-2 px-4 mt-5 mb-5 " >
            
            <div>
                <p className="font-bold text-xs mb-2">ELECTRONICS</p>
                {electronicsCategories.map((items,index) => {
                    return (
                        <div key={index} className="text-[10px]/6">
                            <p>{items}</p>
                        </div>
                    )
                })}
            </div>

            <div>
                <p className="font-bold text-xs mb-2">FASHIONS</p>
                {fashionCategories.map((items,index) => {
                    return (
                        <div key={index} className="text-[10px]/6">
                            <p>{items}</p>
                        </div>
                    )
                })}
            </div>

            <div>
                <p className="font-bold text-xs mb-2">HOME & KITCHEN</p>
                {homeAndKitchen.map((items,index) => {
                    return (
                        <div key={index} className="text-[10px]/6">
                            <p>{items}</p>
                        </div>
                    )
                })}
            </div>

            <div>
                <p className="font-bold text-xs mb-2">BEAUTY</p>
                {beauty.map((items,index) => {
                    return (
                        <div key={index} className="text-[10px]/6">
                            <p>{items}</p>
                        </div>
                    )
                })}
            </div>

            <div>
                <p className="font-bold text-xs mb-2">BABY & TOYS</p>
                {babyAndToys.map((items,index) => {
                    return (
                        <div key={index} className="text-[10px]/6">
                            <p>{items}</p>
                        </div>
                    )
                })}
            </div>  

            <div className="hide-on-small1">
                <p className="font-bold text-xs mb-2 ">TOP BRANDS</p>
                {topBrands.map((items,index) => {
                    return (
                        <div key={index} className="text-[10px]/6">
                            <p>{items}</p>
                        </div>
                    )
                })}
            </div>

            <div className="hide-on-small1">
                <p className="font-bold mb-2 text-xs">DISCOVER NOW</p>
                {discoverNow.map((items,index) => {
                    return (
                        <div key={index} className="text-[10px]/6">
                            <p>{items}</p>
                        </div>
                    )
                })}
            </div>
        </div>
        </div>
    )
    
}

export default FooterLinks