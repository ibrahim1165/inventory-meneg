import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { useQuery } from "react-query";
import { toast } from 'react-toastify';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../firebase.init';
const Update = () => {
    const navigate = useNavigate()
    const { register, } = useForm();
    const id = useParams()
    const [user] = useAuthState(auth);
    const {
        isLoading,
        error,
        refetch,
        data: profile,
      } = useQuery(["userData",], () =>
        fetch(
          `https://ancient-brook-51356.herokuapp.com/user/${user?.email}`
        ).then((res) => res.json())
      );

      const handleSubmit =e=>{
        e.preventDefault();
        const name = e.target.name.value;
        const price = e.target.price.value;
        const description = e.target.description.value;
        const updateUser ={name, price, description};
        const url = `https://ancient-brook-51356.herokuapp.com/product/${id}`;
        fetch(url, { 
         method: 'PUT',
         headers: {
             'content-type': 'application/json'
         },
         body: JSON.stringify(updateUser),
        })
        .then(res=>res.json())
        .then(data =>{
         console.log(data);
       toast("Product added successfully")
       navigate("/services")
         
        })
    }
    return (
        <div>
            <div className="mt-4">
                <h2 className="text-center my-2 d-block text-2xl text-bold ">Update Product</h2>
                <div className=" block p-6 rounded-lg shadow-lg bg-white max-w-lg mx-auto">
                    <form onSubmit={handleSubmit}>
                        <div className="form-group mb-6">
                            <input type="text" className="form-control block
   w-full
   px-3
   py-1.5
   text-base
   font-normal
   text-gray-700
   bg-white bg-clip-padding
   border border-solid border-gray-300
   rounded
   transition
   ease-in-out
   m-0
   focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" id="exampleInput7"
                                placeholder="Name" name="name" />
                        </div>
                        <div className="form-group mb-6">
                            <input type="number" className="form-control block
   w-full
   px-3
   py-1.5
   text-base
   font-normal
   text-gray-700
   bg-white bg-clip-padding
   border border-solid border-gray-300
   rounded
   transition
   ease-in-out
   m-0
   focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"  placeholder="price" name="price" />
                        </div> 
                        <div className="form-group mb-6">
                            <textarea
                                className="
                           form-control
                           block
                           w-full
                           px-3
                           py-1.5
                           text-base
                           font-normal
                           text-gray-700
                           bg-white bg-clip-padding
                           border border-solid border-gray-300
                           rounded
                           transition
                           ease-in-out
                           m-0
                       focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                                id="text"
                                rows="3"
                                placeholder="Discreption" name="description"
                            ></textarea>
                        </div>
                        <div className="form-group form-check text-center mb-6">
                        </div>

                        <input type="submit" className="
                                w-full
                               px-6
                               py-2.5
                               bg-blue-600
                               text-white
                               font-medium
                               text-xs
                               leading-tight
                               uppercase
                               rounded
                               shadow-md
                               hover:bg-blue-700 hover:shadow-lg
                               focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0
                               active:bg-blue-800 active:shadow-lg
                               transition
                               duration-150
                               ease-in-out" value="Add" />
                    </form>
                </div>


            </div>
        </div>
    );
};

export default Update;