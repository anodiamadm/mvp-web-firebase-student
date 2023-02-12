import { useEffect } from 'react';
import Flag from 'react-flagkit';

const LocationFilter = () => {
  useEffect(()=>{
    navigator.geolocation.getCurrentPosition((position) => {
      console.log('Lat Long: ', position)
    })
  },[])
  return ( 
    <>
      Location Filter
      <Flag country="US" />
      <Flag country="IN" />
      <Flag country="BD" />
      <Flag country="GB" />
      <Flag country="JP" />
      
    </>
   );
}
 
export default LocationFilter