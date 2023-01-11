import React from 'react'
import { useUserAuth } from '../../context/UserAuthContext'

function MyProfile() {
  const {user} = useUserAuth()
  return (
    <div>
      <h1>MY PROFILE</h1>
      <p>This is Student Profile page...{user && user.email}</p>
    </div>
  )
}

export default MyProfile