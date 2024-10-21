import { createContext, useState } from 'react';
import PropTypes from 'prop-types';

export const AuthContext = createContext();

export function AuthProvider({ children }) {
    const [autenticado, setAutenticado] = useState(false);

    const login = () => {
        setAutenticado(true);
    };

    const logout = () => {
        setAutenticado(false);
    };

    return (
        <AuthContext.Provider value={{ autenticado, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
}

// prop types
AuthProvider.propTypes = {
    children: PropTypes.node.isRequired
};