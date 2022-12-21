import {
  createUserWithEmailAndPassword,
  getAuth,
  GithubAuthProvider,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";

import React, { createContext, useEffect, useState } from "react";
import app from "../Firebase/Firbase.config";
// ,
/*****************************************/

export const AuthContext = createContext();
const auth = getAuth(app);

/*****************************************/
const githubProvider = new GithubAuthProvider();
const googleProvider = new GoogleAuthProvider();

/*****************************************/

function AuthFireContext({ children }) {
  const [user, setUser] = useState({});
  const [loading, setLoading] = useState(true);
  const [role, setRole] = useState(null);
  const [navToggler, setNavToggler] = useState(false);
  const [toggleModal, setToggleModal] = useState(false);
  const [toggleReportModal, setToggleReportModal] = useState(false);
  /*****************************************/
  const signupUser = (email, password) => {
    setLoading(true);

    return createUserWithEmailAndPassword(auth, email, password);
  };
  const updateUserProfile = (userData) => {
    return updateProfile(auth.currentUser, userData);
  };

  const loginUser = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  const logOut = () => {
    setLoading(true);
    localStorage.removeItem("biki-kini-token");
    return signOut(auth);
  };

  const loginWithGoogle = () => {
    setLoading(true);

    return signInWithPopup(auth, googleProvider);
  };
  const loginWithGithub = () => {
    setLoading(true);

    return signInWithPopup(auth, githubProvider);
  };
  /*****************************************/

  useEffect(() => {
    const unSubs = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });

    return () => unSubs();
  }, []);

  const authData = {
    user,
    signupUser,
    loginUser,
    logOut,
    updateUserProfile,
    loginWithGoogle,
    loginWithGithub,
    loading,
    setLoading,
    navToggler,
    setNavToggler,
    toggleModal,
    setToggleModal,
    toggleReportModal,
    setToggleReportModal,
    role,
    setRole,
  };
  return (
    <AuthContext.Provider value={authData}>{children}</AuthContext.Provider>
  );
}

export default AuthFireContext;
