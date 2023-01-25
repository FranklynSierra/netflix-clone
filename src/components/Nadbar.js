import React from 'react';
import { Link,useNavigate } from 'react-router-dom';
import { UserAuth } from '../context/AuthContext';


const Nadbar = () => {
    const { user, logOut } = UserAuth()
const navigate=useNavigate()
   async function handleLogout(){
     try{
       await logOut()
       navigate('/')
     } catch(err){
        console.log(err)
     }
    }
    return (
        <div className='flex items-center justify-between w-full p-4 z-[100] absolute'>
            <Link to='/netflix'>
                <h1 className='text-red-600 text-4xl font-bold cursor-pointer'>NETFLIX</h1>
            </Link>
            {user?.email ?
             <div>

                <Link to='/netflix-account'>  <button className='text-white pr-4'>Account</button></Link>
                  <button onClick={handleLogout} className='bg-red-600 px-6 py-2 rounded cursor-pointer text-white '>Logout</button>

            </div>
                : <div>

                    <Link to='/netflix-login'>  <button className='text-white pr-4'>Sign In</button></Link>
                    <Link to='/netflix-signup'>  <button className='bg-red-600 px-6 py-2 rounded cursor-pointer text-white '>Sign Up</button></Link>

                </div>
            }
        </div>
    );
}

export default Nadbar;
