import React from 'react';

const Computers = ({ service, DeleteBtn }) => {
    const { name, price, img, description } = service;

    return (
        <div>
            <div class="card card-compact w-[380px] h-[450px] bg-white shadow-lg">
                <figure><img className="" src={img} alt="Shoes" /></figure>
                <div class="card-body">
                    <h2 class="card-title">Name: {name}</h2>
                    <p>Price: ${price}</p>
                    <p>Description: <span className="text-sm text-gray-500">{description}</span></p>
                </div>
                <div class="card-actions justify-end p-2">
                    <button class="btn btn-sm btn-primary btn-outline  mt-[-50px]">
                        <button onClick={() => DeleteBtn(service._id)}>Delete</button>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Computers;