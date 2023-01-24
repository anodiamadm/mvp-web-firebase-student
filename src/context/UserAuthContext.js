import { createContext, useContext, useEffect, useState } from "react"
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
  sendPasswordResetEmail,
  sendSignInLinkToEmail
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
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (curentUser) => {
      setUser(curentUser)
    })
    return () => {
      unsubscribe()
    }
  }, [])
  return <userAuthContext.Provider value={{user, signUp, login, logOut, sendResetEmail, passwordlessLogin}}>{children}</userAuthContext.Provider>
}

export const useUserAuth = () => {
  return useContext(userAuthContext)
}