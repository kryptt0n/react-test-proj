import { useState } from 'react'
import {useNavigate} from 'react-router-dom'
export default function LoginComponent() {
    
    const [username, setUsername] = useState("vitaly")
    const [password, setPassword] = useState("password")
    const [showSuccessMesage, setShowSuccessMesage] = useState(false)
    const [showErrorMesage, setShowErrorMesage] = useState(false)
    const navigate = useNavigate()
    
    function handleUsernameChange(event) {
        setUsername(event.target.value)
    }
    
    function handlePasswordChange(event) {
        setPassword(event.target.value)
    }
    
    function handleSubmit() {
        if (password === 'password') {
            console.log("Success")
            setShowSuccessMesage(true)
            setShowErrorMesage(false)
            navigate('/welcome/' + username)
        } else {
            console.log('Failed')
            setShowSuccessMesage(false)
            setShowErrorMesage(true)
        }
    }
    
    return (
        <div className="Login">
        {showSuccessMesage && <div className='successMessage'>Login successful!</div>}
        {showErrorMesage && <div className='errorMessage'>Login failed. Check credentials</div>}
        <div className="LoginForm">
            <div>
                <label>User name</label>
                <input type="text" name="username" value={username} onChange={handleUsernameChange}></input>
            </div>
            <div>
                <label>Password</label>
                <input type="password" name="password" value={password} onChange={handlePasswordChange}></input>
            </div>
            <div>
                <button type="button" name="login" onClick={handleSubmit}>Login</button>
            </div>
        </div>
    </div>
    )
}