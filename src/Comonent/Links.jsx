const Links = () => {
 
    const linksArray = [
        "Electronics",
        "Men's Fashion",
        "Women's Fashion",
        "Kid's Fashion",
        "Home & Kitchen",
        "Beauty & Fragrance",
        "Baby",
        "Toys",
        "Sports",
        "Automotive",
        "Grocery",
     
    ]

return(
    <div className="header-links">
        {
            linksArray.map((items,index) => {
                return (
                    <div key={index} className="px-2">
                        <p >{items}</p>
                    </div>
                )
            })
        }
    
    </div>
)



}

export default Links