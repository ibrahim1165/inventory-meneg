import React from 'react';
import { Link } from 'react-router-dom';
import cover from "../../assets/computer.jpg"
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { signOut } from 'firebase/auth';
const Nabver = () => {
  const [user] = useAuthState(auth);
  const singout = () => {
    signOut(auth)
  }
  return (
    <div className="navbar bg-gray-900 px-8 lg:text-white">
      <div className="navbar-start">
        <div className="dropdown">

          <label tabIndex="0" className="btn btn-ghost lg:hidden ">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
          </label>

          <ul tabIndex="0" className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 ">
            <li><Link to="/">Home</Link></li>
            <li>

            </li>
            <li><Link to="/item">Add Item</Link></li>
            <li>{user ? <button onClick={singout}>Logout</button> :
              <Link to="/login">Login</Link>
            }</li>
             <li class='dropdown dropdown-hover dropdown-end'>
            <label
              tabindex='0'
              class=' btn-outline rounded-lg'
            >
              Category
            </label>
            <ul
              tabindex='0'
              class='dropdown-content menu p-2 shadow bg-black  rounded-box w-52'
            >
              <li>
                <Link to=''>Laptop</Link>
              </li>
              <li>
                <Link to=''>Computer</Link>
              </li>
            </ul>
          </li>
            <li>
              {user ? <div class=" w-14 rounded-full">
                <Link to="profile" className="flex items-center justify-center">
                  <p>{user.displayName}</p>
                </Link>
              </div> : <li>

              </li>}
            </li>


          </ul>
        </div>
        <div className="w-12 rounded-lg">
          <img src={cover} alt="" />
        </div>
        <Link to="/" className="btn btn-ghost normal-case text-xl text-white">Computer House</Link>
      </div>
      <div className="navbar-end hidden lg:flex">
        <ul className="menu menu-horizontal p-0">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/item">Add Item</Link></li> 

          <li class='dropdown dropdown-hover dropdown-end'>
            <label
              tabindex='0'
              class=' btn-outline rounded-lg'
            >
              Category
            </label>
            <ul
              tabindex='0'
              class='dropdown-content menu p-2 shadow bg-black  rounded-box w-52'
            >
              <li>
                <Link to='/laptop'>Laptop</Link>
              </li>
              <li>
                <Link to='/computer'>Computer</Link>
              </li>
            </ul>
          </li>
          <li>{user ? <button onClick={singout}>Logout</button> :
            <Link to="/login">Login</Link>
          }</li>
          <li>
            {user ? <div class="flex items-center justify-center w-14 rounded-full">
              <Link to="profile">
                <img src={user.photoURL} /></Link>
            </div> : <li>

            </li>}
          </li>


        </ul>
      </div>
    </div>
  );
};

export default Nabver;