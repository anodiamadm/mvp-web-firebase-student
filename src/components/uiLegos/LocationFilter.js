import { useEffect, useState } from "react";
import Flag from "react-flagkit";
import Select from "react-select"
import { countries } from "../../dataAccess/GeographicalData";

const LocationFilter = () => {
  const [countryList, setCountryList] = useState([])
  const [selectedCountry, setSelectedCountry] = useState({value: '', label: ''})
  useEffect(() => {
    let cntryOptns = []
    countries.map((country) => {
      return (cntryOptns.push({value: country.country.id, label: country.country.countryName}))
    })
    setCountryList(cntryOptns)
    // if (navigator.geolocation) {
    //     navigator.geolocation.getCurrentPosition(function(position) {
    //         $.getJSON('http://ws.geonames.org/countryCode', {
    //             lat: position.coords.latitude,
    //             lng: position.coords.longitude,
    //             type: 'JSON'
    //         }, function(result) {
    //             alert(result.countryName);
    //         });
    //     })
    // }​
    function success(pos) {
      const crd = pos.coords;
      console.log(`Latitude : ${crd.latitude}`);
      console.log(`Longitude: ${crd.longitude}`);
    }
    navigator.geolocation.getCurrentPosition(success);
    console.log('Selected Country: ', selectedCountry)
    if (selectedCountry.value==='') {
      setSelectedCountry({value: 'INTL', label: 'International'})
    }
  }, [selectedCountry])
  const handleChange = e => {
    setSelectedCountry(e)
  }
  return (
    <>
      <div className="modalSection">
        <label>Country: </label>
        { selectedCountry.value==='INTL' ? 
          <i className="fa-solid fa-globe"></i> : 
          <Flag country={selectedCountry.value} />}
        <Select options={countryList} onChange={handleChange} />
      </div>
    </>
  );
}
 
export default LocationFilter;