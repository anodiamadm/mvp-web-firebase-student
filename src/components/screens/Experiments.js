import React from 'react'
import { useState } from 'react';
import { useUserAuth } from '../../context/UserAuthContext'
import { getFirestore, collection, getDocs } from "firebase/firestore"

function Experiments() {
  const {user} = useUserAuth()
  const [colctn] = useState([])
  const db = getFirestore()
  const colRef = collection(db, 'courses')
  getDocs(colRef)
  .then((snapshot) => {
    console.log(snapshot.docs);
    // let coll=[]
    // snapshot.docs.forEach((doc) => {
    //   coll.push({ ...doc.data(), id: doc.id })
    // })
    // setColctn(coll)
  })
  .catch(err => {
    console.log("ERROR FOUND", err);
    console.log(err.message);
  })
  return (
    <div>
      <h1>Experiments</h1>      
      <p>This is Experiments page...{user && user.email}</p>
      { colctn.map((element) => {
          return <p key={element.id}>Course Name: { element.title }</p>  
      })}
    </div>
  )
}

export default Experiments