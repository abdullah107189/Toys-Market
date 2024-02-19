import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, } from "firebase/auth";
import app from '../firebase.config';

export const authContext = createContext(null)
const AuthProvider = ({ children }) => {
    const [loading, setLoading] = useState(true)
    const [user, setUser] = useState(null)

    const auth = getAuth(app);
    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const loginUser = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser)
            setLoading(false)
        });
        return () => {
            return unsubscribe();
        }
    }, [])
    const authInfo = {
        user,
        createUser,
        loginUser,
        loading,
    }
    return <authContext.Provider value={authInfo}>
        {children}
    </authContext.Provider>
};

export default AuthProvider;