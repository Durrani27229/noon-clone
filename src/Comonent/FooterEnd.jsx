const FooterEnd = () => {
    return (
       <div className="bg-[#f3f4f8] ">
        <div className="min-h-[80px] container mx-auto flex flex-col mt-5"> 
        <div className="flex justify-between p-4 footer-end">
            <div>
                <p className="text-sm text-gray-400">© 2025 noon. All Rights Reserved</p>
            </div>
            <div className="flex gap-2">
                <img src="https://f.nooncdn.com/s/app/com/noon/design-system/payment-methods-v2/card-mastercard.svg" alt="master" />
                <img src="https://f.nooncdn.com/s/app/com/noon/design-system/payment-methods-v2/card-visa.svg" alt="visa" />
                <img src="https://f.nooncdn.com/s/app/com/noon/design-system/payment-methods-v2/tabby_v2.svg" alt="tabby" />
                <img src="https://f.nooncdn.com/s/app/com/noon/design-system/payment-methods-v2/tamara-en.svg" alt="tamara" />
                <img src="https://f.nooncdn.com/s/app/com/noon/design-system/payment-methods-v2/card-amex.svg" alt="american" />
                <img src="https://f.nooncdn.com/s/app/com/noon/design-system/payment-methods-v2/cod-en.svg" alt="cash" />
            </div>
        </div>
        <div className="text-gray-400 font-bold px-4 leading-0">
            <ul>
                <li>Careers</li>
                <li>Warrenty Policy</li>
                <li>Sell with us</li>
                <li>Terns of Use</li>
                <li>Term of Sale</li>
                <li>Privacy Policy</li>
                <li>Cunsumer Right</li>
            </ul>
        </div>
        </div>
       </div>
    )
}

export default FooterEnd