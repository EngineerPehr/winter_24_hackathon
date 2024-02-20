<<<<<<< HEAD
import { Layout } from './Layout/Layout'
=======
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom"
import LandingPage from "./LandingPage/LandingPage";
import AdminHome from "./AdminHome/AdminHome";
import LoginPage from "./LoginPage/LoginPage";
import CreateAccount from "./CreateAccount/CreateAccount";
import UserHome from "./UserHome/UserHome";
import Footer from "./utils/Footer";
import UserActivityLog from "./UserActivityLog/UserActivityLog";
import CreateUserAccount from "./CreateAccount/CreateUserAccount";
import CreateAdminAccount from "./CreateAccount/CreateAdminAccount";
import UserRegisterForm from "./CreateAccount/UserRegisterForm";
// import TipsPage from "./Tips/TipsPage";

import UserPastReports from "./UserPastReports/UserPastReports";
>>>>>>> f3a2cb8d16177f0f8e29e4322290965e945f05ee

export default function App() {
    return <Layout />
}
