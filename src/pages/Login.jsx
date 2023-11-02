import { LoginContainer, LoginForm } from "../styles/login.css"
import { useLocation, useNavigate } from "react-router-dom"
import { useState } from "react"
import { login } from "../../api"

export default function Login() {
    const [loginFormData, setLoginFormData] = useState({ email: "", password: "" })
    const location = useLocation()
    const navigate = useNavigate()
    const [status, setStatus] = useState("idle")
    const [error, setError] = useState(null)
    const from = location.state?.from || "/host"
    
    function handleSubmit(e) {
        e.preventDefault()
        setStatus("submitting")
        login(loginFormData)
            .then(data => {
                setError(null)
                localStorage.setItem("loggedin", true)
                navigate(from, { replace: true })
            })
            .catch (err => {
                localStorage.removeItem("loggedin")
                setError(err)
            })
            .finally (() => {
                setStatus("idle")
            })
    }

    function handleChange(e) {
        const { name, value } = e.target
        setLoginFormData(prev => ({
            ...prev,
            [name]: value
        }))
    }

    return (
        <LoginContainer>
            {location.state?.message && <h3>{location.state.message}</h3>}
            <h1>Sign in to your account</h1>
            {error?.message && <h3 style={{color: "red"}}>{error.message}</h3>}
            <LoginForm onSubmit={handleSubmit}>
                <input
                    name="email"
                    onChange={handleChange}
                    type="email"
                    placeholder="Email address"
                    value={loginFormData.email}
                />
                <input
                    name="password"
                    onChange={handleChange}
                    type="password"
                    placeholder="Password"
                    value={loginFormData.password}
                />
                <button disabled={status==="submitting"}>
                    {status === "submitting" ? "Logging in..." : "Log in" }
                </button>
            </LoginForm>
        </LoginContainer>
    )

}