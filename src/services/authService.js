import { useState, useEffect } from 'react'
import { signInWithPopup, GoogleAuthProvider, signOut } from 'firebase/auth'
import { auth } from '../firebaseConfig'

export function SignIn() {
  return (
    <button
      className="auth__button"
      onClick={() => signInWithPopup(auth, new GoogleAuthProvider())}
    >
      Sign In
    </button>
  )
}

export function SignOut() {
  return (
    <div className="signOut__container">
      <img className="profile__image" src={auth.currentUser.photoURL} placeholder="profile image" />{' '}
      &nbsp;
      <button className="auth__button" onClick={() => signOut(auth)}>
        Sign Out
      </button>
    </div>
  )
}

export function useAuthentication() {
  const [user, setUser] = useState(null)
  useEffect(() => {
    return auth.onAuthStateChanged(user => {
      user ? setUser(user) : setUser(null)
    })
  }, [])
  return user
}
