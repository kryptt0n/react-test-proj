import './TodoApp.css'
import {BrowserRouter, Routes, Route, useNavigate, useParams, Link, Navigate} from 'react-router-dom'
import LoginComponent from './LoginComponent'
import LogoutComponent from './LogoutComponent'
import WelcomeComponent from './WelcomeComponent'
import ListTodosComponent from './ListTodosComponent'
import ErrorComponent from './ErrorComponent'
import HeaderComponent from './HeaderComponent'
import FooterComponent from './FooterComponent'
import AuthProvider, { useAuth } from './security/AuthContext'
import TodoComponent from './TodoComponent'

function AuthenticatedRoute({children}) {
    const context = useAuth();

    if (context.isAuth) {
        return children;
    } else {
        return <Navigate to="/" />;
    }
}

export default function ToDoApp() {
    return (
        <div className="TodoApp">
            
            <AuthProvider>
                <BrowserRouter>
                    <HeaderComponent></HeaderComponent>
                    <Routes>
                        <Route path='/' element={<LoginComponent></LoginComponent>}></Route>
                        <Route path='/login' element={<LoginComponent></LoginComponent>}></Route>
                        <Route path='/welcome/:username' element={
                            <AuthenticatedRoute>
                                <WelcomeComponent />
                            </AuthenticatedRoute>
                        }></Route>
                        <Route path='/todos' element={
                            <AuthenticatedRoute>
                                <ListTodosComponent />
                            </AuthenticatedRoute>
                        }></Route>
                         <Route path='/todo/:id' element={
                            <AuthenticatedRoute>
                                <TodoComponent />
                            </AuthenticatedRoute>
                        }></Route>
                        <Route path='/logout' element={
                             <AuthenticatedRoute>
                                <LogoutComponent />
                            </AuthenticatedRoute>
                        }></Route>
                        <Route path='*' element={<ErrorComponent></ErrorComponent>}></Route>
                    </Routes>
                    <FooterComponent></FooterComponent>
                </BrowserRouter>
            </AuthProvider>
            
        </div>
    )
}


        










