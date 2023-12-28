import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import React, { createContext, useEffect, useState } from "react";
import useSWR from "swr";
import app from "./app.js";

export const AuthContext = createContext(null);
let webUrl = import.meta.env.VITE_LOCAL_BACKEND;
const auth = getAuth(app);

const AuthProvider = ({ children }) => {
  const fetcher = (...args) => fetch(...args).then((res) => res.json());
  const { data, error, isLoading } = useSWR(`${webUrl}/products`, fetcher);

  const [allProducts, setAllProducts] = useState([]);
  const [singleProduct, setSingleProduct] = useState([]);
  const [loading, setLoading] = useState(false);
  const [user, setUser] = useState(null);


  useEffect(() => {
    if (error) {
      console.error("Failed to load:", error);
    }
    if (isLoading) {
        setLoading(true)
    }

    if (data) {
      setAllProducts(data);
      setLoading(false)
    }
  }, [data, error, isLoading]); 

  const provider = new GoogleAuthProvider();

  const normalRegister = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };
  const normalLogin = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };
  const LoginWithGoogle = () => {
    setLoading(true);
    return signInWithPopup(auth, provider);
  };
  const LogOut = () => {
    return signOut(auth);
  };

  const updateUser = (name, photoURL) => {
    return updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: photoURL,
    });
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
      setLoading(false);
    });

    return () => {
      return unsubscribe();
    };
  }, []);

  const authInfo = {
    allProducts,
    singleProduct,
    setSingleProduct,
    loading, 
    setLoading,
    webUrl,
    normalRegister,
    normalLogin,
    LoginWithGoogle,
    updateUser,
    LogOut,
    user
  };

  return (
    <AuthContext.Provider value={authInfo}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
