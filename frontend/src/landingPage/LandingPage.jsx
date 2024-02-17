import React from "react";
import { Link } from "react-router-dom";
import Footer from "../utils/Footer";

export default function LandingPage() {
    return (
        <>
            <div>
                <h1 class="text-3xl font-bold">Welcome to Workplace Wellness</h1>    
                <h3>ABC</h3>
                <p class="text-blue-700">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis laborum deleniti provident fugit suscipit explicabo quis quos. Nesciunt, dolorem mollitia?</p>
            </div>
            <div>
                <p>Already a member?</p>
                <Link to="/login">
                    <button>SIGN IN</button>
                </Link>
                <p>Don't have an account?</p>
                <Link to="/register">
                    <button>REGISTER</button>
                </Link>
                </div>
                <Footer />
        </>
    );
}

