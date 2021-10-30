import { getAuth, signInWithPopup, GoogleAuthProvider, signOut, onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from "react";
import initAuth from "../Firebase/firebase.init";
initAuth();
const useFirebase = () => {
    const [user, setUser] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();

    //Google Sign In 
    const signInWithGoogle = () => {
        setIsLoading(true);
        return signInWithPopup(auth, googleProvider);
    }
    // Sign Out 
    const logOut = () => {
        setIsLoading(true)
        signOut(auth)
            .then(() => {
                setUser(null);
                setIsLoading(false);
            })
            .catch(error => {
                alert(error.message);
            })
    }
    // Firebase Observer to observe user state
    useEffect(() => {
        const unsubscribed = onAuthStateChanged(auth, user => {
            if (user) {
                setUser(user);
            }
            else {
                setUser(user);
            }
            setIsLoading(false);
        });
        return () => unsubscribed;
    }, [])
    return {
        user,
        isLoading,
        setIsLoading,
        signInWithGoogle,
        logOut
    }
}
export default useFirebase;