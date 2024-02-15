import { BrowserRouter, Route, Routes } from "react-router-dom"
import LandingPage from "./LandingPage/LandingPage.js"
import AdminHome from "./AdminHome/AdminHome.js";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />}/>
        <Route path="/admin/home" element={<AdminHome />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
