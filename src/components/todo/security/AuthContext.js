import { createContext, useContext, useState } from "react";

export const AuthContext = createContext();
export const useAuth = () => useContext(AuthContext);

export default function AuthProvider({children}) {


    const [isAuth, setAuth] = useState(false);

    function login(username, password) {
        if (password === 'password') {
            setAuth(true);
            return true;
        }
        return false;
    }

    function logout() {
        setAuth(false);
    }


    return (
        <AuthContext.Provider value={{isAuth, setAuth, login, logout}}>
            {children}
        </AuthContext.Provider>
    )
}