import React, { useEffect, useState } from 'react'
import youtube from '../assets/youtube.png'
import google from '../assets/google.png'
import { createUserWithEmailAndPassword ,getAuth,GoogleAuthProvider } from "firebase/auth";
import { getDatabase, ref, set } from 'firebase/database'
import { db,app } from "../firebase/firebase";
import { useapi } from '../context/Youtube';
import { useNavigate } from 'react-router-dom';

const auth = getAuth(app);
const provider = new GoogleAuthProvider();
function Auth() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [username, setUsername] = useState('')
    const {signingoogle,signinemail,authStatus}=useapi()
    const signwithgoogle=()=>{
        signingoogle(auth,provider)
    }
    const signwithemail=()=>{
        console.log(email,password)
        signinemail(auth,email,password,username)
    }
    
    return (
        <section className="w-full h-screen bg-gray-50 dark:bg-gray-900 flex items-center justify-center">
            <div className=" w-[90%] md:w-1/2  flex flex-col items-center justify-center px-6 py-6 mx-auto md:h-screen lg:py-0">

                <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                    <div className="p-6 space-y-4 md:space-y-6 sm:p-8 ">
                        <h1 className=" font-bold leading-tight text-center tracking-tight text-gray-900 md:text-3xl dark:text-white">
                            Sign Up
                        </h1>
                        <div className="space-y-4 md:space-y-6" action="#">
                            <div>
                                <label htmlFor="username" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your Full Name</label>
                                <input type="username" name="username" id="username" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                                 value={username}
                                 onChange={(e) => setUsername(e.target.value)}
                                 placeholder="username" required="" />
                            </div>
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

                            <div className="flex items-start">
                                <div className="flex items-center h-5">
                                    <input id="terms" aria-describedby="terms" type="checkbox" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800" required/>
                                </div>
                                <div className="ml-3 text-sm">
                                    <label htmlFor="terms" className="font-light text-gray-500 dark:text-gray-300">I accept the <a className="font-medium text-primary-600 hover:underline dark:text-primary-500" href="#">Terms and Conditions</a></label>
                                </div>
                            </div>
                            <button type="submit" onClick={signwithemail} className="w-full text-white bg-blue-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800 shadow-md ">
                                Sign Up</button>
                            <div className='flex gap-2 items-center justify-center'>
                                <div className='w-full h-[1px] bg-gray-500 '></div>
                                <p className='text-xl text-gray-400 pb-2'>or</p>
                                <div className='w-full h-[1px] bg-gray-500'></div>
                            </div>
                            <button type="submit" onClick={signwithgoogle} className="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800 border flex items-center justify-center gap-2">
                                <img src={google} width={24} alt="dd" />
                                Sign Up with Google</button>
                            <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                                Already have an account? <a href="#" className="font-medium text-primary-600 hover:underline dark:text-primary-500">Login here</a>

                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Auth
