import React from "react";
import LoginButton from './LoginButton';

export default function LandingPage() {
    return (
        <>
        <div>
        {/* <div className = 'background-image'> */}
            <div>
                </div>
                <h1>Welcome to Workplace Wellness</h1>
                <div>
                    <h3>ABC</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis laborum deleniti provident fugit suscipit explicabo quis quos. Nesciunt, dolorem mollitia?</p>
                    <h3>ABC</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque nesciunt obcaecati reprehenderit fuga cupiditate ipsa quia nostrum saepe. Nemo, ipsum.</p>
                </div>
                </div>
                <div>
                    <p>Already a member?</p>
                    <LoginButton />
                    <p>Create an account</p>
                    <LoginButton />
                </div>
       
    </>
    );
}

