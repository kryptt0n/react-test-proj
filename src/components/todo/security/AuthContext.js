import { createContext, useContext, useState } from "react";
import { retrieveBasicAuth } from "../../api/HelloWorldAPIService";
import { apiClient } from "../../api/ApiClient";

export const AuthContext = createContext();
export const useAuth = () => useContext(AuthContext);

export default function AuthProvider({children}) {


    const [isAuth, setAuth] = useState(false);
    const [username, setUsername] = useState(null);
    const [token, setToken] = useState(null);

    async function login(username, password) {

        const baToken = "Basic " + window.btoa(username + ":" + password)
        console.log(baToken)
        try {
            const response = await retrieveBasicAuth(baToken);
    
            if (response.status == 200) {
                setAuth(true);
                setUsername(username);
                setToken(baToken);
                apiClient.interceptors.request.use((config) => {
                    config.headers.Authorization=baToken;
                    return config;
                })
                return true;
            } else {
                logout();
                return false;
            }
        } catch (error) {
            logout();
            return false;
        }
    }

    function logout() {
        setUsername(null)
        setAuth(false);
        setToken(null)
    }


    return (
        <AuthContext.Provider value={{isAuth, setAuth, login, logout, username, token}}>
            {children}
        </AuthContext.Provider>
    )
}