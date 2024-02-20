import React from "react";
import { Link } from "react-router-dom";
import "../index.css";

export default function LandingPage() {
    return (
        <div>
            <div className="columns-2 mx-10 py-5">
                <div className="break-after-column m-6">
                    <h1 className="text-4xl font-bold mb-5">Welcome to Workplace Wellness</h1>    
                    <p>At Workplace Wellness, we are dedicated to guiding you on a journey towards
improved sleep quality and enhanced mental wellness. Our mission is to empower
you with our expertly curated articles, evidence-based tips, and personalized
strategies designed to help you unlock the secrets to a restful night's sleep. Whether you're dealing with stress, anxiety, insomnia, or simply seeking to
optimize your sleep routine, we are here to provide a compassionate and
informative space where you can embark on your path to better sleep and mental
resilience.</p><br/>
                    <p>Join our community of like-minded individuals who are committed to prioritizing their mental health through the transformative power of quality sleep.</p>
                </div>
                {/* Buttons section */}
                <div className="bg-blue-100 m-10 pb-10">
                    <div className="flex flex-col items-center justify-center">
                        <p className="text-2xl mt-8 mb-5">Already a member?</p>
                        <div className="pb-5 mt-3">                             
                            <Link to="/login"
                                className="w-1/2 rounded border-2 bg-blue-800  text-white leading normal 
                                mx-50 px-20 py-6
                                text-xl font-bold text-primary 
                                transition duration-150 ease-in-out 
                                hover:border-primary-600 hover:bg-neutral-500 hover:bg-opacity-10 hover:text-primary-600 
                                focus:border-primary-600 focus:text-primary-600 focus:outline-none focus:ring-0 
                                active:border-primary-700 active:text-primary-700
                                 dark:hover:bg-neutral-100 dark:hover:bg-opacity-10 border-black 
                                 hover:bg-gray-100 focus:ring-4
                                focus:outline-none focus:ring-gray-100 
                                rounded-xl px-10 py-1 me-2 mb-2"
                            >SIGN IN</Link>
                        </div>
                        <p className="text-2xl mt-12 mb-5">Don't have an account?</p>
                        <div className="pb-5 mt-3 mb-6">
                            <Link to="/register"
                                className="w-1/2 rounded border-2 bg-blue-800  text-white
                                mx-50 px-20 py-6 
                                text-xl font-bold text-primary 
                                transition duration-150 ease-in-out 
                                hover:border-primary-600 hover:bg-neutral-500 hover:bg-opacity-10 hover:text-primary-600 
                                focus:border-primary-600 focus:text-primary-600 focus:outline-none focus:ring-0 
                                active:border-primary-700 active:text-primary-700
                                 dark:hover:bg-neutral-100 dark:hover:bg-opacity-10 border-black 
                                 hover:bg-gray-100 focus:ring-4
                                 focus:outline-none focus:ring-gray-100 
                                 rounded-xl px-10 py-1 me-2 mb-2"
                            >REGISTER</Link>
                        </div> 
                    </div>
                </div>
            </div>

            {/* Footer section */}
            <div>
                
            </div>
        </div>    
    );
}
