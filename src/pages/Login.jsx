import { LoginContainer, LoginForm } from "../styles/login.css"
import { useLocation } from "react-router-dom"
import { useState } from "react"
import { login } from "../../api"

export default function Login() {
    const [loginFormData, setLoginFormData] = useState({ email: "", password: "" })
    const location = useLocation()
    
    function handleSubmit(e) {
        e.preventDefault()
        handleLogin()
    }

    function handleChange(e) {
        const { name, value } = e.target
        setLoginFormData(prev => ({
            ...prev,
            [name]: value
        }))
    }

    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)
    async function handleLogin() {
        setLoading(true)
        try {
            const data = await login(loginFormData.email, loginFormData.password)
            console.log(data)
        }
        catch (err) {
            setError(err)
        }
        setLoading(false)
    }
    
    if (loading) {return <h1>Loading...</h1>}
    if (error) return <h1 style={{padding: "3em", color: "red"}}>There was an error: {error.message}</h1>
    
    return (
        <LoginContainer>
            {location.state?.message && <h3>{location.state.message}</h3>}
            <h1>Sign in to your account</h1>
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
                <button>Log in</button>
            </LoginForm>
        </LoginContainer>
    )

}