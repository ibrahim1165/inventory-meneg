import React from 'react';
import hader from "../../assets/header.jpg"
const Carosel = () => {
    return (
        <div>
           <div className="mx-auto">
        <div className="hero min-h-screen" style={{
            background: `url(${hader})`,
            backgroundSize:"cover",
        }}>
             <div className=""></div>
  <div className="hero-content text-neutral-content mx-auto">
    <div className=" lg:pr-96 sm:pr-0 mx-auto">
      <h1 className="mb-5 text-7xl font-bold">ALWAYS BE <br /> ORIGINAL</h1>
      <p className="mb-5 mt-5">Buy Desktop PC, Laptop, Gaming PC, Monitor, Keyboard, Mouse Headset,<br /> Gaming Chair and all kind of IT Product From  Computer House !!</p>
      <button className="btn btn-outline btn-primary lg:btn-lg">CONTACT US</button>
    </div>
  </div>
</div>
        </div>
        
        </div>
    );
};

export default Carosel;