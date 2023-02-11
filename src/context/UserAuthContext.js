import { createContext, useContext, useEffect, useState } from "react"
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
  sendPasswordResetEmail,
  sendSignInLinkToEmail,
  isSignInWithEmailLink,
  signInWithEmailLink
} from "firebase/auth"
import { auth, actionCodeSettings } from "../firebase"

const userAuthContext = createContext()

export const UserAuthContextProvider = ({children}) => {
  const [user, setUser] = useState("")
  
  const signUp = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password)
  }
  const login = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password)
  }
  const logOut = () => {
    return signOut(auth)
  }
  const sendResetEmail = (email) => {
    return sendPasswordResetEmail(auth, email)
  }
  const passwordlessLogin = (email) => {
    return sendSignInLinkToEmail(auth, email, actionCodeSettings)
  }
  const isPasswordlessSignIn = (windowHref) => {
    return isSignInWithEmailLink(auth, windowHref)
  }
  const passwordlessSignIn = (email, windowHref) => {
    return signInWithEmailLink(auth, email, windowHref)
  }
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (curentUser) => {
      setUser(curentUser)
    })
    return () => {
      unsubscribe()
    }
  }, [])
  return (
    <userAuthContext.Provider value={{user, signUp, login, logOut, sendResetEmail, passwordlessLogin, isPasswordlessSignIn, passwordlessSignIn}}>
      {children}
    </userAuthContext.Provider>
  )
}

export const useUserAuth = () => {
  return useContext(userAuthContext)
}