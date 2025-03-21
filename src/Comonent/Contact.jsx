import { FaFacebook , FaTwitter , FaInstagram , FaLinkedinIn } from "react-icons/fa";
const Contact = () => {
    return (
       <div className="flex justify-around min-h-[70px]">
        <div className="flex flex-col items-center justify-around">
            <div  >
            <p>Shop On The Go</p>
            </div>
            <div className="flex">
                <img src="https://f.nooncdn.com/s/app/com/common/images/logos/app-store.svg" alt="app-store" />
                <img src="https://f.nooncdn.com/s/app/com/common/images/logos/google-play.svg" alt="play-store" />
                <img src="https://f.nooncdn.com/s/app/com/noon/images/Huawei-icon.png" width={83} height={50} alt="gallery" />
            </div>
        </div>
        <div className="flex flex-col justify-around items-center">
            <div>
                <p>CONNECT WITH US</p>
                
            </div>
            {/* <div className="flex gap-3 text-yellow-400">
            <FaFacebook /> <FaTwitter /> <FaInstagram /> <FaLinkedinIn />
            </div> */}
            <div className="flex gap-3">
                <img src="https://f.nooncdn.com/s/app/com/noon/images/social-media-footer-facebook.svg" alt="fb" />
                <img src="https://f.nooncdn.com/s/app/com/noon/images/social-media-footer-twitter.svg" alt="x" />
                <img src="https://f.nooncdn.com/s/app/com/noon/images/social-media-footer-instagram.svg" alt="insta" />
                <img src="https://f.nooncdn.com/s/app/com/noon/images/social-media-footer-linkedIn.svg" alt="linkdin" />
            </div>
        </div>
       </div>
    )
}

export default Contact