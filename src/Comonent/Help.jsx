import { CiCircleAlert } from "react-icons/ci";
const Help = () => {
  return (
    <div className=" hide-on-small bg-[#f3f4f8]">
      <div className="footer-banner container mx-auto ">
      <div>
        <p className="font-bold">We're Always Here To Help</p>
        <p className="text-sm text-gray-300">Reach out to us through any of these support channels</p>
      </div>
     <div className="flex gap-20">
     <div className="flex items-center gap-2">
        <div>
        <CiCircleAlert />
        </div>
        <div>
          <p className="text-xs/1.5 text-gray-400">HELP CENTER</p>
          <a href="" className="text-sm">help.noon.com</a>
        </div>
      </div>
      <div className="flex  items-center gap-2 px-5">
        <div><CiCircleAlert /></div>
        <div>
          <p className="text-xs/1.5 text-gray-400">Email Support</p>
          <a href="">care@noon.com</a>
        </div>
      </div>
     </div>
    </div>
    </div>
  );
};

export default Help;
