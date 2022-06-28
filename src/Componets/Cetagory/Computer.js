import React, { useEffect, useState } from 'react';
import Computers from './Computers';
import { AiFillPlusCircle, } from "react-icons/ai";
import "./Style.css"
import { FaBeer, FaPlusCircle, FaPlusSquare } from 'react-icons/fa';

import { Link } from 'react-router-dom';

const Computer = () => {
    const [services,setServices]= useState([])
    useEffect(()=>{
        fetch('http://localhost:5000/computer')
        .then(res =>res.json())
        .then(data =>setServices(data))
    },[])
    const DeleteBtn = (id) => {
        const proceed = window.confirm("Are you sure you want to delete");
        if (proceed) {
          const url = `http://localhost:5000/computer/${id}`;
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
                Computer</h1>
                <p className="text-5xl font-bold ">WE PROVIDE BEST CUSTOM <br />Pc</p>
            </div>
            <div className="text-end text-5xl px-4">
              <button className="btn btn-primary">
              <Link to="/com">
                <FaPlusCircle />
              </Link>
              </button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 px-6 gap-8 mt-8 my-12">
                {
                    services.map(service=><Computers
                    key={service.id}
                    service={service}
                    DeleteBtn={DeleteBtn}
                    ></Computers>)
                }
            </div>
            
        </div>
    );
};

export default Computer;