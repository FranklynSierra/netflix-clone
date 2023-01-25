import React,{useState} from 'react';
import { Link,useNavigate } from 'react-router-dom';
import { UserAuth } from '../context/AuthContext';
const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const { user,logIn } = UserAuth();
    const [error, setError] = useState('');
    const navigate = useNavigate()
  
    const handleSubmit = async (e) => {
      e.preventDefault();
      setError('')
      try {
        await logIn (email, password);
        
        navigate('/')
      } catch (error) {
        console.log(error);
        setError(error.message)
      }
    };
    return (
      <>
             <div className='w-full h-screen '>
                <img
                    className='hidden sm:block absolute w-full h-full object-cover'
                    src='https://assets.nflxext.com/ffe/siteui/vlv3/f841d4c7-10e1-40af-bcae-07a3f8dc141a/f6d7434e-d6de-4185-a6d4-c77a2d08737b/US-en-20220502-popsignuptwoweeks-perspective_alpha_website_medium.jpg'
                    alt='/'
                />
                <div className='bg-black/60 fixed top-0 left-0 w-full h-screen'></div>
                <div className='fixed w-full px-4 py-24 z-50'>
                    <div className='max-w-[450px] h-[600px] mx-auto bg-black/75 text-white'>
                           <div className='max-w-[320px] mx-auto py-16'>
                            <h1 className='text-3xl font-bold'>Sign In</h1>
                            {error ? <p className='py-3 bg-red-600 my-2'>{error}</p>:null}
                            
                            <form onSubmit={handleSubmit} className='w-full flex flex-col py-4'>
                                <input onChange={(e)=>setEmail(e.target.value)} className=' py-4 my-6 bg-gray-700 rounded' type='email'placeholder='Email' autoComplete='email'/>
                                <input onChange={(e)=>setPassword(e.target.value)} className=' py-4 my-6 bg-gray-700 rounded' type='password'placeholder='Password'/>
                                <button className='bg-red-600 py-3 my-6 rounded font-bold'>Sign In</button>
                        
                           <p className='py-8 '><span className='text-gray-600'>Are you new to Netflix?  </span><Link to='/netflix-signup'>Sign Up</Link></p>
                            </form>
                           </div>  
                    </div>
                </div>
            </div>
      </>
    );
}

export default Login;
