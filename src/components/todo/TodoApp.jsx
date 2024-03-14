import './TodoApp.css'
import {BrowserRouter, Routes, Route, useNavigate, useParams, Link} from 'react-router-dom'
import LoginComponent from './LoginComponent'
import LogoutComponent from './LogoutComponent'
import WelcomeComponent from './WelcomeComponent'
import ListTodosComponent from './ListTodosComponent'
import ErrorComponent from './ErrorComponent'
import HeaderComponent from './HeaderComponent'
import FooterComponent from './FooterComponent'

export default function ToDoApp() {
    return (
        <div className="TodoApp">
            
            <BrowserRouter>
                <HeaderComponent></HeaderComponent>
                <Routes>
                    <Route path='/' element={<LoginComponent></LoginComponent>}></Route>
                    <Route path='/login' element={<LoginComponent></LoginComponent>}></Route>
                    <Route path='/welcome/:username' element={<WelcomeComponent></WelcomeComponent>}></Route>
                    <Route path='/todos' element={<ListTodosComponent></ListTodosComponent>}></Route>
                    <Route path='/logout' element={<LogoutComponent></LogoutComponent>}></Route>
                    <Route path='*' element={<ErrorComponent></ErrorComponent>}></Route>
                </Routes>
                <FooterComponent></FooterComponent>
            </BrowserRouter>
            
        </div>
    )
}


        










