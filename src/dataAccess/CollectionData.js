import { getFirestore, collection, getDocs } from "firebase/firestore"

const db = getFirestore()

export const getCollection = async (collectionName) => {
  const colRef = collection(db, collectionName)
  let coll = []
  // try {
  //   const snapshot = await getDocs(colRef)
  //   if (!snapshot.empty){
  //     console.log("SNAPSHOT 1: ", snapshot.docs);
  //     snapshot.docs.forEach((doc) => {
  //       coll.push({ ...doc.data(), id: doc.id })
  //     })
  //   }
  //   console.log("SNAPSHOT 2: ", snapshot.docs);
  // } catch(err) {
  //   console.log(err.message);
  // }
  getDocs(colRef)
  .then((snapshot) => {
    snapshot.docs.forEach((doc) => {
      coll.push({ ...doc.data(), id: doc.id })
    })
  })
  .catch(err => {
    console.log(err.message);
  })
  return coll;
}