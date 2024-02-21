import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import LandingPage from '../LandingPage/LandingPage'
import AdminHome from '../AdminHome/AdminHome'
import LoginPage from '../LoginPage/LoginPage'
import CreateAccount from '../CreateAccount/CreateAccount'
import UserHome from '../UserHome/UserHome'
import Footer from '../Footer/Footer'
import UserActivityLog from '../UserActivityLog/UserActivityLog'
import CreateUserAccount from '../CreateAccount/CreateUserAccount'
import CreateAdminAccount from '../CreateAccount/CreateAdminAccount'
import UserRegisterForm from '../CreateAccount/UserRegisterForm'
import UserPastReports from '../UserPastReports/UserPastReports'
import TipsPage from '../Tips/TipsPage'
import About from '../Boilerplate/About'
import Careers from '../Boilerplate/Careers'
import Contact from '../Boilerplate/Contact'
import Terms from '../Boilerplate/Terms'
import PrivacyPolicy from '../Boilerplate/Privacy'
// import ImagePage from "../Tips/ImagePage"

export default function RoutesComponent() {
    return (
        <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/admin/home" element={<AdminHome />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<CreateAccount />} />
            <Route path="/user/:userId/home" element={<UserHome />} />
            <Route path="/user/account" element={<CreateUserAccount />} />
            <Route path="/admin/account" element={<CreateAdminAccount />} />
            <Route path="/user/:userId/log" element={<UserActivityLog />} />
            <Route path="/user/registerForm" element={<UserRegisterForm />} />
            <Route path="/tips/options" element={<TipsPage />} />
            {/* <Route path="/tips/images" element={<ImagePage />} /> */}
            <Route path="/user/:userId/history" element={<UserPastReports />} />
            <Route path="/bp/about" element={<About />} />
            <Route path="/bp/careers" element={<Careers />} />
            <Route path="/bp/contact" element={<Contact />} />
            <Route path="/bp/terms" element={<Terms />} />
            <Route path="/bp/privacy" element={<PrivacyPolicy />} />
        </Routes>
    )
}
