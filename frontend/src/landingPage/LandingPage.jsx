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
                        <p className="text-2xl mt-8 mb-5">Already a member?</p>
                        <div className="pb-5 px-10 mt-3">
                            <Link to={`/login`} 
                                className="w-1/2 rounded border-2 border-black leading normal 
                                    px-20 py-3 
                                    text-xl font-bold text-primary 
                                    transition duration-150 ease-in-out 
                                    hover:border-primary-600 hover:bg-neutral-500 hover:bg-opacity-10 hover:text-primary-600 
                                    focus:border-primary-600 focus:text-primary-600 focus:outline-none focus:ring-0 
                                    active:border-primary-700 active:text-primary-700
                                     dark:hover:bg-neutral-100 dark:hover:bg-opacity-10 border-black 
                                     hover:bg-gray-100 focus:ring-4
                                     focus:outline-none focus:ring-gray-100 
                                     rounded-xl px-5 py-1 me-2 mb-2"
                                >SIGN IN
                            </Link>
                        </div>
                        <p className="text-2xl mt-12 mb-5">Don't have an account?</p>
                        <div className="pb-5 px-10 mt-3 mb-6">
                            <Link to={`/login`} 
                                className="w-1/2 rounded border-2 border-black leading normal 
                                    px-20 py-3 
                                    text-xl font-bold text-primary 
                                    transition duration-150 ease-in-out 
                                    hover:border-primary-600 hover:bg-neutral-500 hover:bg-opacity-10 hover:text-primary-600 
                                    focus:border-primary-600 focus:text-primary-600 focus:outline-none focus:ring-0 
                                    active:border-primary-700 active:text-primary-700
                                     dark:hover:bg-neutral-100 dark:hover:bg-opacity-10 border-black 
                                     hover:bg-gray-100 focus:ring-4
                                     focus:outline-none focus:ring-gray-100 
                                     rounded-xl px-5 py-1 me-2 mb-2"
                                >REGISTER
                            </Link>
                        </div>
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




