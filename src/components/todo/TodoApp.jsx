import { useState } from 'react'
import './TodoApp.css'
import {BrowserRouter, Routes, Route, useNavigate, useParams, Link} from 'react-router-dom'

export default function ToDoApp() {
    return (
        <div className="TodoApp">
            <HeaderComponent></HeaderComponent>
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<LoginComponent></LoginComponent>}></Route>
                    <Route path='/login' element={<LoginComponent></LoginComponent>}></Route>
                    <Route path='/welcome/:username' element={<WelcomeComponent></WelcomeComponent>}></Route>
                    <Route path='/todos' element={<ListTodosComponent></ListTodosComponent>}></Route>
                    <Route path='*' element={<ErrorComponent></ErrorComponent>}></Route>
                </Routes>
            </BrowserRouter>
            {/* <WelcomeComponent/> */}
            <FooterComponent></FooterComponent>
        </div>
    )
}


        
function LoginComponent() {
    
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



function WelcomeComponent() {

    const {username} = useParams();
    return (
        <div className="Welcome">
            <h1>Welcome {username}</h1>
            Your <Link to="/todos">todos</Link>
            
        </div>
    )
}

function ErrorComponent() {
    return (
        <div className="Error">
            <h1>Sorry for 404</h1>
            <div>We are working to add new pages</div>
        </div>
    )
}

function ListTodosComponent() {

    const today = new Date();
    const targetDate = new Date(today.getFullYear() + 2, today.getMonth());
    const todos = [{id: 1, description: "Learn AWS", isDone: false, targetDate: targetDate},
    {id: 2, description: "Learn Full-stack", isDone: false, targetDate: targetDate},
    {id: 3, description: "Learn Java", isDone: false, targetDate: targetDate}]

    return (
        <div className="ListTodosComponent">
            <h1>Things you want to do</h1>
            <table>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Desctiption</th>
                        <th>Is done?</th>
                        <th>Date</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        todos.map(todo => (
                            <tr key={todo.id}>
                                <td>{todo.id}</td>
                                <td>{todo.description}</td>
                                <td>{todo.isDone.toString()}</td>
                                <td>{todo.targetDate.toDateString()}</td>
                            </tr>)
                        )
                    }
                    
                </tbody>
            </table>
        </div>
    )
}


function HeaderComponent() {
    return (
        <div className="header">
            Header <hr />
        </div>
    )
}

function FooterComponent() {
    return (
        <div className="footer">
            <hr />Footer
        </div>
    )
}