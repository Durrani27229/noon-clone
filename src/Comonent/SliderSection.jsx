
import { Carousel } from 'antd';
const SliderSection = () => {
    const contentStyle = {
        height: '160px',
        color: '#fff',
        lineHeight: '160px',
        textAlign: 'center',
        background: '#364d79',
      };
  return (
    <div className="slider grid sm:grid-cols-12 ">
      <div className=" sm:col-span-8 grid-cols-12">
        <Carousel autoplay>
          <div>
            <img src="https://f.nooncdn.com/mpcms/EN0001/assets/528577cf-72d7-43c8-8323-b8ad4914d63c.png"  alt="" />
          </div>
          <div>
            <img src="https://f.nooncdn.com/mpcms/EN0001/assets/97fa07de-7339-4dff-9808-066f6a9e052f.png" alt="" />
          </div>
          <div>
            <img src="https://f.nooncdn.com/mpcms/EN0001/assets/c073ada9-d673-45a4-bcb3-8c7f4c89e327.png" alt="" />
          </div>
          
        </Carousel>
      </div>
      <div className="sm:col-span-4 slider-deal flex items-center grid-cols-12 ">
        <img src="https://f.nooncdn.com/mpcms/EN0001/assets/12d3e1cf-7458-4783-aae2-604ae8126d54.png" alt=""   />
        <img src="https://f.nooncdn.com/mpcms/EN0001/assets/8d89fcb2-68e0-4fa7-83a7-11fba284094e.png" alt="" />
      </div>
    </div>
  );
};

export default SliderSection;
