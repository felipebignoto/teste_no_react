import { Route, Routes } from "react-router-dom";
import Login from "./login";
import Dashboard from "./dashboard";
import SignUp from "./SignUp";

export default function MainRoutes(){
    return (
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/sign-up" element={<SignUp />} />
      </Routes>
    );
}