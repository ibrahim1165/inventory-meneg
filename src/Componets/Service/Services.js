import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Update from '../../Hook/Update';
import Service from './Service';

const Services = () => {
    const [services,setServices]= useState([])
    useEffect(()=>{
        fetch('https://ancient-brook-51356.herokuapp.com/product')
        .then(res =>res.json())
        .then(data =>{
            setServices(data)})
    },[])
    const DeleteBtn = (id) => {
        const proceed = window.confirm("Are you sure you want to delete");
        if (proceed) {
          const url = `https://ancient-brook-51356.herokuapp.com/product/${id}`;
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
        <div className=" text-center ">
             <h1 className="text-4xl m-4 text-orange-500">
                All Product</h1>
                 <p className="text-5xl font-bold ">WE PROVIDE BEST CUSTOM <br />PC & LAPTOP</p>
             </div>
             <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 px-6 gap-4 mt-8 my-12 mx-auto">
                 {
                     services.map(service=><Service
                     key={service.id}
                     service={service}
                     DeleteBtn={DeleteBtn}
                     ></Service>)
                 }
             </div>
         </div>
    );
};

export default Services;