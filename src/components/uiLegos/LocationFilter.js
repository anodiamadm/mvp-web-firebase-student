import { useEffect, useState } from "react";
import Flag from "react-flagkit";
import { countries } from "../../dataAccess/GeographicalData";
import SelectComponent from "./SelectComponent";

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
  const handleChange = e => {
    setSelectedCountry(e)
  }
  return (
    <>
      <div className="modalSection">
        <label className="modalBodyText modalComponentMargin">Country: </label>
        { selectedCountry.value==='INTL' ? 
          <i className="fa-solid fa-globe theme-color modalComponentMargin globe-icon-height"></i> : 
          <Flag country={selectedCountry.value} className="modalComponentMargin" />}
        {/* <select value={selectedCountry} onChange={handleChange}>
          {countryList.map((country) => {
            return (<options value={country.value}>{country.label}</options>)
          })}
        </select> */}
        <SelectComponent/>
      </div>
    </>
  );
}
 
export default LocationFilter;