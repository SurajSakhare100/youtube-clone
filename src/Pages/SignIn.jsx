import React, { useState } from 'react'
import { useapi } from '../context/Youtube'
import google from '../assets/google.png'
import { Link, useNavigate } from 'react-router-dom';
import { auth } from './SignUp';
import { GoogleAuthProvider } from 'firebase/auth';
const provider = new GoogleAuthProvider();
function SignIn() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const {signingoogle,signinemail}=useapi()
    const signwithgoogle=()=>{
        signingoogle(auth,provider)
    }
    const signInwithemail=()=>{
        console.log(auth,password)
        signinemail(auth,email,password)
    }
    
  return (
    <section className="w-full h-screen bg-gray-50 dark:bg-gray-900 flex items-center justify-center">
    <div className=" w-[90%] md:w-1/2  flex flex-col items-center justify-center px-6 py-6 mx-auto md:h-screen lg:py-0">

        <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8 ">
                <h1 className=" font-bold leading-tight text-center tracking-tight text-gray-900 md:text-3xl dark:text-white">
                    Sign In
                </h1>
                <div className="space-y-4 md:space-y-6" action="#">
                    
                    <div>
                        <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
                        <input type="email" name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@gmail.com"
                         value={email}
                         onChange={(e) => setEmail(e.target.value)}
                        required="" />
                    </div>
                    <div>
                        <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                        <input type="password" name="password" id="password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        
                        value={password}
                        onChange={(e) => setPassword(e.target.value)} required="" />
                    </div>

                    <button type="submit" onClick={signInwithemail} className="w-full text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800 shadow-md ">
                        Sign In</button>
                    <div className='flex gap-2 items-center justify-center my-0'>
                        <div className='w-full h-[1px] bg-gray-500 '></div>
                        <p className='text-xl text-gray-400 pb-2'>or</p>
                        <div className='w-full h-[1px] bg-gray-500'></div>
                    </div>
                    <button type="submit" onClick={signwithgoogle} className="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800 border flex items-center justify-center gap-2">
                        <img src={google} width={24} alt="dd" />
                        Sign In with Google</button>
                    <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                        Don't have an account? <Link to="/auth/SignUp" className="font-medium text-primary-600 hover:underline dark:text-primary-500">SignUp here</Link>
                    </p>
                    <p className="text-sm font-light text-gray-500 dark:text-gray-400 p-0 m-0">Dummy Account :</p>
                    <div className='flex gap-4'>
                    <p className="text-sm  font-semibold text-gray-800 dark:text-gray-400 p-0 m-0">Email : abc@gmail.com</p>
                    <p className="text-sm  font-semibold text-gray-500 dark:text-gray-400">password : abc123</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
  )
}

export default SignIn
