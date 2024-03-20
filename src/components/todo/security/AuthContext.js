import { createContext, useContext, useState } from "react";

export const AuthContext = createContext();
export const useAuth = () => useContext(AuthContext);

export default function AuthProvider({children}) {


    const [isAuth, setAuth] = useState(false);
    const [username, setUsername] = useState(null);

    function login(username, password) {
        if (password === 'password') {
            setAuth(true);
            setUsername(username);
            return true;
        }
        return false;
    }

    function logout() {
        setUsername(null)
        setAuth(false);
    }


    return (
        <AuthContext.Provider value={{isAuth, setAuth, login, logout, username}}>
            {children}
        </AuthContext.Provider>
    )
}