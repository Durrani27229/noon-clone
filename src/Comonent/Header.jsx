import { Divider, Input } from "antd";
import { UserOutlined, HeartOutlined, ShoppingCartOutlined } from "@ant-design/icons";
import { Avatar } from "antd";

const Header = () => {
  return (
    <div className="header">
      
      {/* Logo Section */}
      <div className="logo flex items-center justify-center">
        <img
          src="https://f.nooncdn.com/s/app/com/noon/design-system/logos/noon-logo-en.svg"
          width={100}
          height={24}
          alt="logo"
        />
      </div>

      {/* Location Selector */}
      <div className="drop hide-on-small flex items-center justify-center space-x-2 p-2">
        <img src="https://f.nooncdn.com/s/app/com/common/images/flags/ae.svg" alt="flag" className="w-6 h-6" />
        <select className="bg-transparent outline-none">
          <option value="">Dubai</option>
        </select>
      </div>

      {/* Search Bar */}
      <div className="input flex items-center  px-2">
        <Input placeholder="What are you looking for?" size="large" />
      </div>

      {/* Language & Login */}
      <div className="login flex items-center gap-2 py-2">
        <p>العربية</p>
        <Divider
          style={{ height: "20px", width: "2px", backgroundColor: "black" }}
          type="vertical"
        />
        <p className=" flex items-center space-x-2">
          <span>Login</span>
          <Avatar size="small" icon={<UserOutlined />} />
        </p>
      </div>

      {/* Wishlist & Cart (Hidden on Small Screens) */}
      <div className="hide-on-small1 addCart flex items-center gap-5  min-h-[50px]">
        <HeartOutlined />
        <ShoppingCartOutlined />
      </div>
    </div>
  );
};

export default Header;
