import { useEffect, useState } from "react";
import Flag from "react-flagkit";
import { countries } from "../../dataAccess/GeographicalData";
import SelectComponent from "./SelectComponent";

const LocationFilter = () => {
  const [countryList, setCountryList] = useState([])
  const [selectedCountry, setSelectedCountry] = useState('IN')  
  const [provinceList, setProvinceList] = useState([])
  const [selectedProvince, setSelectedProvince] = useState('')
  const locateCountry = async () => {
    const resp = await fetch("https://ipinfo.io/json?token=516ec07e26e604")
    const data = await resp.json()
    let localCountry = countries.find(country => country.country.id===data.country)
    setSelectedCountry(localCountry.country.id)
    let prvncOptns = []
    localCountry.country.states.map((state)=>{
      return (prvncOptns.push({value: state.stateId, label: state.stateName}))
    })
    setProvinceList(prvncOptns)
    console.log("Province List: ", prvncOptns);
  }
  const setProvincesForCountryId = (countryId) => {
    let prvncOptns = []
    let localCountry = countries.find(country=>country.country.id===selectedCountry)
    localCountry.country.states.map((state)=>{
      return (prvncOptns.push({value: state.stateId, label: state.stateName}))
    })
    setProvinceList(prvncOptns)
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
  const onCountryChange = (countryId) => {
    setSelectedCountry(countryId)
    setProvincesForCountryId(countryId)
    setSelectedProvince('')
  }
  return (
    <>
      <div className="modalSection">
        <label className="modalBodyText modalComponentMargin">Country: </label>
        { selectedCountry==='INTL' ? 
          <i className="fa-solid fa-globe theme-color modalComponentMargin globe-icon-height"></i> : 
          <Flag country={selectedCountry} className="modalComponentMargin" />}
        { countryList.length > 0 ?
          <SelectComponent placeholder="Country..." options={countryList} 
            onChange={onCountryChange} selectedOption={selectedCountry} />
          : null
        }
        <p>{ selectedProvince!=='' ? selectedProvince : null }</p>
        <SelectComponent placeholder="State / Province..." options={provinceList} 
        onChange={(province)=>setSelectedProvince(province)} selectedOption={selectedProvince} />
      </div>
    </>
  );
}
 
export default LocationFilter;