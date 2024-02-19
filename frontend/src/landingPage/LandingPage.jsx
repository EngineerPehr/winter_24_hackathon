import React from "react";
import { Link } from "react-router-dom";
import Footer from "../utils/Footer";
import "../index.css";

export default function LandingPage() {
    return (
        <div>
            <div className="columns-2 mx-10 py-5">
                <div className="break-after-column m-6">
                    <h1 className="text-4xl font-bold">Welcome to Workplace Wellness</h1>    
                    <h3 className="text-2xl my-3">ABC</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis laborum deleniti provident fugit suscipit explicabo quis quos. Nesciunt, dolorem mollitia?</p><br/>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis laborum deleniti provident fugit suscipit explicabo quis quos. Nesciunt, dolorem mollitia?</p><br/>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis laborum deleniti provident fugit suscipit explicabo quis quos. Nesciunt, dolorem mollitia?</p>
                </div>
                {/* Buttons section */}
                <div className="bg-gray-300 m-10 pb-3">
                    <div className="flex flex-col items-center justify-center">
                        <p className="text-2xl mt-8 mb-6">Already a member?</p>
                        <button                             
                             className="mb-3 block w-1/2 rounded border-2 border-black px-6 pb-[6px] pt-2 text-xl font-bold uppercase leading-normal text-primary transition duration-150 ease-in-out hover:border-primary-600 hover:bg-neutral-500 hover:bg-opacity-10 hover:text-primary-600 focus:border-primary-600 focus:text-primary-600 focus:outline-none focus:ring-0 active:border-primary-700 active:text-primary-700 dark:hover:bg-neutral-100 dark:hover:bg-opacity-10"
                             
                             data-te-ripple-init>
                            <Link to="/login">SIGN IN</Link>
                        </button>
                        <p className="text-2xl my-5 mt-10">Don't have an account?</p>
                        <button 
                            className="mb-10 block w-1/2 rounded border-2 border-black px-6 pb-[6px] pt-2 text-xl font-bold uppercase leading-normal text-primary transition duration-150 ease-in-out hover:border-primary-600 hover:bg-neutral-500 hover:bg-opacity-10 hover:text-primary-600 focus:border-primary-600 focus:text-primary-600 focus:outline-none focus:ring-0 active:border-primary-700 active:text-primary-700 dark:hover:bg-neutral-100 dark:hover:bg-opacity-10"
                            data-te-ripple-init>
                            <Link to="/register">REGISTER</Link>
                        </button> 
                    </div>
                </div>
            </div>

            {/* Footer section */}
            <div>
                <Footer />
            </div>
        </div>    
    );
}

