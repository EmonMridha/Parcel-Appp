import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth';
import { AuthContext } from './AuthContext';
import { auth } from '../../firebase/firebase.init';
import { useEffect, useState } from 'react';
const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true);

    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password)
            .finally(() => setLoading(false)) // runs whether the operation succeeds or fails (UI safety)
    }

    const googleSignUp = () => {
        setLoading(true);
        // Implement Google Sign-Up functionality here
        return signInWithPopup(auth, googleProvider)
            .finally(() => setLoading(false)) // runs whether the operation succeeds or fails (UI safety)
    }


    const signIn = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password)
            .finally(() => setLoading(false)) // runs whether the operation succeeds or fails (UI safety)
    }

    const logOut = () => {
        setLoading(true);
        return signOut(auth)
            .finally(() => setLoading(false)) // runs whether the operation succeeds or fails (UI safety)
    }

    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);
            setLoading(false);
        })

        return () => {
            unSubscribe()
        }
    }, [])

    const authInfo = {
        user,
        loading,
        createUser,
        signIn,
        googleSignUp,
        logOut
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children} // All children in authProvider will have access to authInfo
        </AuthContext.Provider>
    );
};

export default AuthProvider;