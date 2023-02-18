import { useEffect, useState } from "react";
import Flag from "react-flagkit";
import { countries } from "../../dataAccess/GeographicalData";
import SelectComponent from "./SelectComponent";

const LocationFilter = () => {
  const [countryList, setCountryList] = useState([])
  const [selectedCountry, setSelectedCountry] = useState('IN')
  const locateCountry = async () => {
    const resp = await fetch("https://ipinfo.io/json?token=516ec07e26e604")
    const data = await resp.json()
    let localCountry = countries.find(country => country.country.id===data.country)
    setSelectedCountry(localCountry.country.id)
  }
  useEffect(() => {
    let cntryOptns = []
    countries.map((country) => {
      return (cntryOptns.push({value: country.country.id, label: country.country.countryName}))
    })
    cntryOptns.sort((a, b) => {
      const nameA = a.label.toUpperCase(); // ignore upper and lowercase
      const nameB = b.label.toUpperCase(); // ignore upper and lowercase
      if (nameA < nameB) {
        return -1;
      }
      if (nameA > nameB) {
        return 1;
      }
      return 0;
    });
    setCountryList(cntryOptns)
    locateCountry()
  }, [])
  return (
    <>
      <div className="modalSection">
        <label className="modalBodyText modalComponentMargin">Country: </label>
        { selectedCountry==='INTL' ? 
          <i className="fa-solid fa-globe theme-color modalComponentMargin globe-icon-height"></i> : 
          <Flag country={selectedCountry} className="modalComponentMargin" />}
        { countryList.length > 0 ?
          <SelectComponent placeholder="Country..." options={countryList} 
            onChange={(item)=>setSelectedCountry(item)} selectedOption={selectedCountry} />
          : null
        }
      </div>
    </>
  );
}
 
export default LocationFilter;