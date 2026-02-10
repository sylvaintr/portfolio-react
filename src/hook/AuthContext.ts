
import React, { createContext, useContext, useState, useEffect } from 'react';

interface AuthContextType {
    isLoggedIn: boolean;
    setIsLoggedIn: React.Dispatch<React.SetStateAction<boolean>>;
}

const AuthContext = createContext<AuthContextType>({
    isLoggedIn: false,
    setIsLoggedIn: () => { },
});

interface AuthProviderProps {
    children: React.ReactNode;
}

export function AuthProvider({ children }: AuthProviderProps) {
    const [isLoggedIn, setIsLoggedIn] = useState(() => {
        // Lire depuis sessionStorage au démarrage
        return sessionStorage.getItem('isLoggedIn') === 'true';
    });

    // Sauvegarder l'état dans sessionStorage à chaque changement
    useEffect(() => {
        sessionStorage.setItem('isLoggedIn', isLoggedIn.toString());
    }, [isLoggedIn]);

    return React.createElement(
        AuthContext.Provider,
        { value: { isLoggedIn, setIsLoggedIn } },
        children
    );
}

export function useAuth() {
    return useContext(AuthContext);
}
