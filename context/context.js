import React, { createContext, useState } from 'react';

// Crear el contexto
export const AppContext = createContext();

// Crear el proveedor del contexto
export const AppProvider = ({ children }) => {
    const [list, setList] = useState([]);

    const handleList = (newValue) => {
        setList([...list, newValue])
    }

    return (
        <AppContext.Provider value={{ list, handleList }}>
            {children}
        </AppContext.Provider>
    );
};
