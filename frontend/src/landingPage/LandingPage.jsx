import React from "react";
import { Link } from "react-router-dom";

export default function LandingPage() {
    return (
        <>
        <div>
            <h1>Welcome Back to Workplace Wellness</h1>    
            <div>
                <h3>ABC</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis laborum deleniti provident fugit suscipit explicabo quis quos. Nesciunt, dolorem mollitia?</p>
                <h3>ABC</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque nesciunt obcaecati reprehenderit fuga cupiditate ipsa quia nostrum saepe. Nemo, ipsum.</p>
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
            <div>
                <p>Connect with us on our other platforms</p>
                <Link to="https://www.linkedin.com/home" target="_blank">
                    <svg
                        xmlns="https://www.w3.org/TR/SVG/" 
                        viewBox="0 0 24 24" 
                        fill="#0077B5" 
                        width="24" 
                        height="24"
                    >
                        <path 
                            d="M4 2c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2H4zM8 18H6V10h2v8zm-1-9c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1zm11 9h-2V13.5c0-1.74-1.31-3.5-3-3.5s-3 1.76-3 3.5V18h-2V10h2v1.5c1.19-1.25 2.81-2.5 5-2.5s3.88 1.25 5 2.5V18z"
                        />
                    </svg>
                </Link>
                <Link to="https://www.instagram.com/" target="_blank"> 
                    <svg 
                        xmlns="http://www.w3.org/2000/svg" 
                        viewBox="0 0 24 24" 
                        fill="#FF69B4" 
                        width="24" 
                        height="24"
                    >
                        <path 
                            d="M12 2c-4.418 0-5.695.019-7.656.094-1.832.092-3.137.799-4.242 1.904S.097 7.752 0 9.584c-.075 1.961-.094 3.238-.094 7.656s.019 5.695.094 7.656c.092 1.832.799 3.137 1.904 4.242s1.411 1.812 3.243 1.904C6.305 23.981 7.582 24 12 24s5.695-.019 7.656-.094c1.832-.092 3.137-.799 4.242-1.904s1.812-1.411 1.904-3.243C23.981 18.695 24 17.418 24 12s-.019-5.695-.094-7.656c-.092-1.832-.799-3.137-1.904-4.242S21.751.097 19.919 0C18.695.019 17.418 0 12 0zm0 5c3.867 0 7 3.133 7 7s-3.133 7-7 7-7-3.133-7-7 3.133-7 7-7zm0 3c-2.756 0-5 2.244-5 5s2.244 5 5 5 5-2.244 5-5-2.244-5-5-5zm6.25-3.781c.356 0 .649.293.649.649s-.293.649-.649.649-.649-.293-.649-.649.293-.649.649-.649z"
                        />
                        <path 
                            d="M16.25 6.719c-.356 0-.649-.293-.649-.649s.293-.649.649-.649.649.293.649.649-.293.649-.649.649zM12 8.125c-1.957 0-3.547 1.59-3.547 3.547S10.043 15.219 12 15.219 15.547 13.629 15.547 11.672 13.957 8.125 12 8.125zm0 5.219c-1.21 0-2.172-.963-2.172-2.172s.963-2.172 2.172-2.172 2.172.963 2.172 2.172-.962 2.172-2.172 2.172z"
                        />
                    </svg>
                </Link>
            </div>
        </div>
    </>
    );
}

