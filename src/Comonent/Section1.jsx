const Section1 = () => {

    const links = [
        'https://f.nooncdn.com/mpcms/EN0001/assets/2b5a5f4e-5b9d-48f3-ae5d-cd00f52fcc2e.gif',
        'https://f.nooncdn.com/mpcms/EN0001/assets/c914d754-deb2-4696-9369-2dd9ec230941.png',
        'https://f.nooncdn.com/mpcms/EN0001/assets/774ab4c6-2e57-408f-ab63-0947b634a5a9.png',
        'https://f.nooncdn.com/mpcms/EN0001/assets/71e68fed-e518-40ba-91a3-c6eebd40194a.png',
        'https://f.nooncdn.com/mpcms/EN0001/assets/a901e2cb-4af3-48f3-9231-99f985e6c860.png',
        'https://f.nooncdn.com/mpcms/EN0001/assets/bfcd38fe-1d54-4800-8df4-c06ccafaa0d2.png',
        'https://f.nooncdn.com/mpcms/EN0001/assets/7c6266a1-5948-43fd-9a0d-899f0c0affc1.png', 
        'https://f.nooncdn.com/mpcms/EN0001/assets/49d1511b-6e1b-498b-8cca-e323954f9c02.png',
        'https://f.nooncdn.com/mpcms/EN0001/assets/a646a43b-f901-4346-86b8-3b4026cfa8b0.png',
        'https://f.nooncdn.com/mpcms/EN0001/assets/051f8191-c11a-4adf-955d-4239ece98238.png',
        'https://f.nooncdn.com/mpcms/EN0001/assets/4144c09a-ff88-45d0-8137-5060ebcc9750.png',
        'https://f.nooncdn.com/mpcms/EN0001/assets/aecce0d4-c343-4f20-bdda-62b8d1e85e49.png'
    ]



    return (
        <div className="section1 container mx-auto">
            {
                links.map((items,index) => {
                    return(
                       <div key={index}> <img  src={items}  alt="" /></div>
                    )
                })
            }
        </div>
    )
}

export default Section1