const Banner = (value) => {
    return (
        <div className="container mx-auto    mt-2 mb-2 ">
            <img src={value.value} alt="banner" className="w-full" />
        </div>
    )
}
  
  export default Banner