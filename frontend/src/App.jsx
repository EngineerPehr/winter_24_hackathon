import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom"
import LandingPage from "./LandingPage/LandingPage"
import AdminHome from "./AdminHome/AdminHome";
import LoginPage from "./LoginPage/LoginPage";
import CreateAccount from "./CreateAccount/CreateAccount";
import UserHome from "./UserHome/UserHome";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/admin/home" element={<AdminHome />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<CreateAccount />} />
        <Route path="/user/home" element={<UserHome />} />
      </Routes>
    </BrowserRouter>
  )
}
