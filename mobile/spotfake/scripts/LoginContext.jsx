import React, { createContext, useState } from 'react';

export const LoginContext = createContext();

export const LoginProvider = ({ children }) => {
    const [token, setToken] = useState('');
    const [foto, setFoto] = useState('https://placeholder.pics/svg/100');
    const [userData, setUserData] = useState({})

    return (
        <LoginContext.Provider value={{ token, setToken, foto, setFoto, userData, setUserData }}>
            {children}
        </LoginContext.Provider>
    );
};