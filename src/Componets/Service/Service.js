import React from 'react';
import { Link } from 'react-router-dom';

const Service = ({ service, DeleteBtn }) => {
    const { name, price, img, description } = service;
    return (
        <div>
        <div class="card card-compact w-[350px] h-[460px] bg-white shadow-lg">
            <figure><img className="" src={img} alt="product" /></figure>
            <div class="card-body">
                <h2 class="card-title">Name: {name}</h2>
                <p>Price: ${price}</p>
                <p>Description: <span className="text-sm text-gray-500">{description}</span></p>
            </div>
            <div className="flex justify-between">
            <div class="card-actions justify-end p-2">
                <button class="btn btn-sm btn-primary btn-outline  mt-[-30px]">
                    <button onClick={() => DeleteBtn(service._id)}>Delete</button>
                </button>
            </div>
            {/* <div class="card-actions justify-end p-2">
                <button class="btn btn-sm btn-primary btn-outline  mt-[-30px]">
                <Link to={`/update/${service._id}`}><button>Update</button></Link>
                </button>
            </div> */}
            </div>
            
        </div>
    </div>
    );
};

export default Service;