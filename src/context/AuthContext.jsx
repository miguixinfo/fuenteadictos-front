import { createContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types';

export const AuthContext = createContext();

export function AuthProvider({ children }) {
    const [authToken, setAuthToken] = useState(null);

    useEffect(() => {
        const token = localStorage.getItem("token");
        if (token) {
            setAuthToken(token);
        }
    }, [])

    const login = (token) => {
        setAuthToken(token);
        localStorage.setItem("token", token);
    }

    const logout = () => {
        setAuthToken(null);
        localStorage.removeItem("token");
    };

    const isAuthenticated = !!authToken;

    return (
        <AuthContext.Provider value={{ authToken, login, logout, isAuthenticated }}>
            {children}
        </AuthContext.Provider>
    );
}

// prop types
AuthProvider.propTypes = {
    children: PropTypes.node.isRequired
};