import { useEffect, useState } from "react";
import Flag from "react-flagkit";
import { countries } from "../../dataAccess/GeographicalData";

const LocationFilter = () => {
  const [countryList, setCountryList] = useState([])
  const [selectedCountry, setSelectedCountry] = useState({value: 'INTL', label: 'International'})
  const locateCountry = async () => {
    const resp = await fetch("https://ipinfo.io/json?token=516ec07e26e604")
    const data = await resp.json()
    let localCountry = countries.find(country => country.country.id===data.country)
    setSelectedCountry({value: localCountry.country.id, label: localCountry.country.countryName})
  }
  useEffect(() => {
    let cntryOptns = []
    countries.map((country) => {
      return (cntryOptns.push({value: country.country.id, label: country.country.countryName}))
    })
    setCountryList(cntryOptns)
    locateCountry()
  }, [])
  console.log("Countries: ", countryList, "Selected: ", selectedCountry);
  return (
    <>
      <div className="modalSection">
        <label className="modalBodyText modalComponentMargin">Country: </label>
        { selectedCountry.value==='INTL' ? 
          <i className="fa-solid fa-globe theme-color modalComponentMargin globe-icon-height"></i> : 
          <Flag country={selectedCountry.value} className="modalComponentMargin" />}
      </div>
    </>
  );
}
 
export default LocationFilter;