import { Divider, Input } from 'antd';
import { UserOutlined , HeartOutlined , ShoppingCartOutlined } from '@ant-design/icons';
import { Avatar, Space } from 'antd';



const Header = () => {
    return (
       <div className="header flex items-center grid gap-4 m-4 sm:grid-cols-24">
            {/* <div className='flex items-center sm:col-span-1'>
                <img src="https://f.nooncdn.com/s/app/com/noon/design-system/logos/noon-logo-en.svg" width={100} height={24} alt="logo" />
            </div>
            <div className='sm:col-span-1'>
                <select name="" id="">
                    <option value="">Dubai</option>
                </select>
            </div>
            <div className='sm:col-span-6'>
                <Input placeholder="What are you looking for?"  />
            </div>
            <div className='sm:cols-span-4'>
                <p>العربية</p>
                <Divider type="vertical" />
                <p>Login <Avatar size="small" icon={<UserOutlined />} /> </p>
                <p><HeartOutlined /></p>
                <p><ShoppingCartOutlined /></p>
            </div> */}
            <div className='rounded min-h-[50px] flex items-center  bg-amber-500 sm:col-span-3'>
            <img src="https://f.nooncdn.com/s/app/com/noon/design-system/logos/noon-logo-en.svg" width={100} height={24} alt="logo" />
            </div>
            <div className='rounded min-h-[50px] bg-red-400 sm:col-span-3'>
            <select name="" id="">
                    <option value="">Dubai</option>
                </select>
            </div>
            <div className='rounded min-h-[50px] flex items-center bg-blue-400 sm:col-span-10'>
            <Input placeholder="What are you looking for?" size='large'  />
            </div>
            <div className='rounded flex items-center min-h-[50px] bg-green-500 sm:col-span-4'>
                <p>العربية</p>
                <Divider style={{ height: '20px' , color: 'black !important' , width: '1px', backgroundColor: 'white' }} type="vertical" />
                <p>Login <Avatar size="small" icon={<UserOutlined />} /> </p>
            </div>
            <div className='rounded flex justify-evenly min-h-[50px] bg-gray-500 sm:col-span-4'>
            <HeartOutlined />
            <ShoppingCartOutlined />
            </div>
       </div>
    )
}

export default Header