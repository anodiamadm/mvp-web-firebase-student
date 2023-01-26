import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import { useUserAuth } from '../../context/UserAuthContext'
// import { getFirestore, collection, getDocs } from "firebase/firestore"

function Experiments() {
  const {user} = useUserAuth()
  const [colctn, setColctn] = useState([])
  // const db = getFirestore()
  // const collectionName = 'courses'
  // const colRef = collection(db, collectionName)
  // getDocs(colRef)
  // .then((snapshot) => {
  //   snapshot.docs.forEach((doc) => {
  //     coll.push({ ...doc.data(), id: doc.id })
  //   })
  // })
  // .catch(err => {
  //   console.log(err.message);
  // })
  useEffect(() => {
    setColctn([{id: 0, title: 'Good Course', author: 'Ab Cd'},
                {id: 1, title: 'Bad Course', author: 'Cndm Pal'},
                {id: 2, title: 'Ugly one', author: 'Cd Cd'}])
  }, [])
  // console.log('Courses Local Collection', colctn);
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