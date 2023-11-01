import { Outlet, Navigate } from "react-router-dom"
import { useState } from "react"

export default function AuthRequired() {
    const [authRequired, setAuthRequired] = useState(false)

    return (
        authRequired ? <Outlet />
         : <Navigate to="login" state={{message: "You must log in first!"}} />
    )
}