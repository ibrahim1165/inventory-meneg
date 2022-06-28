import React, { useEffect, useState } from 'react';
import Laptop from './Laptop';

const Laptops = () => {
    const [services,setServices]= useState([])
    useEffect(()=>{
        fetch('http://localhost:5000/laptop')
        .then(res =>res.json())
        .then(data =>setServices(data))
    },[])
    const DeleteBtn = (id) => {
        const proceed = window.confirm("Are you sure you want to delete");
        if (proceed) {
          const url = `http://localhost:5000/laptop/${id}`;
          fetch(url, {
            method: "DELETE",
          })
            .then((res) => res.json())
            .then((data) => {
              console.log("success", data);
              const remaing = services.filter((item) => item._id !== id);
              setServices(remaing);
            });
        }
      }
    return (
        <div>
            <div className=" text-center">
            <h1 className="text-4xl m-4 text-orange-500">
                Laptop</h1>
                <p className="text-5xl font-bold ">WE PROVIDE BEST LAPTOP</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 px-6 gap-8 mt-8 my-12">
                {
                    services.map(service=><Laptop
                    key={service.id}
                    service={service}
                    DeleteBtn={DeleteBtn}
                    ></Laptop>)
                }
            </div>
        </div>
    );
};

export default Laptops;