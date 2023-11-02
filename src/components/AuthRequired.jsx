import { Outlet, Navigate, useLocation } from "react-router-dom"

export default function AuthRequired() {
    const isLoggedIn = localStorage.getItem("loggedin")
    const from = useLocation().pathname;

    return (
        isLoggedIn ? <Outlet /> 
        : <Navigate to="login" state={{message: "You must log in first!", from}} replace />)
}