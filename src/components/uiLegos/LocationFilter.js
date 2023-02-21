import { useContext, useEffect, useState } from "react";
import Flag from "react-flagkit";
import { SearchCriteriaContext } from "../../context/SearchCriteriaContext";
import { countries } from "../../dataAccess/GeographicalData";
import SelectComponent from "./SelectComponent";

const LocationFilter = () => {
  const [countryList, setCountryList] = useState([])
  const [selectedCountry, setSelectedCountry] = useState('IN')  
  const [provinceList, setProvinceList] = useState([])
  const [selectedProvince, setSelectedProvince] = useState('')
  const { addLocation } = useContext(SearchCriteriaContext)
  const locateCountry = async () => {
    // const resp = await fetch("https://ipinfo.io/json?token=516ec07e26e604")
    // const data = await resp.json()
    // let localCountry = countries.find(country => country.country.id===data.country)
    let localCountry = countries.find(country => country.country.id==='AU')
    setSelectedCountry(localCountry.country.id)
    let prvncOptns = []
    localCountry.country.states.map((state)=>{
      return (prvncOptns.push({value: state.stateId, label: state.stateName}))
    })
    prvncOptns.sort((a, b) => {
      const nameA = a.label.toUpperCase();
      const nameB = b.label.toUpperCase();
      if (nameA < nameB) {
        return -1;
      }
      if (nameA > nameB) {
        return 1;
      }
      return 0;
    });
    setProvinceList(prvncOptns)
  }
  const setProvincesForCountryId = (countryId) => {
    let prvncOptns = []
    let localCountry = countries.find(country=>country.country.id===countryId)
    localCountry.country.states.map((state)=>{
      return (prvncOptns.push({value: state.stateId, label: state.stateName}))
    })
    prvncOptns.sort((a, b) => {
      const nameA = a.label.toUpperCase();
      const nameB = b.label.toUpperCase();
      if (nameA < nameB) {
        return -1;
      }
      if (nameA > nameB) {
        return 1;
      }
      return 0;
    });
    setProvinceList(prvncOptns)
  }
  useEffect(() => {
    let cntryOptns = []
    countries.map((country) => {
      return (cntryOptns.push({value: country.country.id, label: country.country.countryName}))
    })
    cntryOptns.sort((a, b) => {
      const nameA = a.label.toUpperCase();
      const nameB = b.label.toUpperCase();
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
    addLocation(countryId, selectedProvince)
    setProvincesForCountryId(countryId)
    setSelectedProvince('')
  }
  const onProvinceChange = (provinceId) => {
    setSelectedProvince(provinceId)
    addLocation(selectedCountry, provinceId)
  }
  return (
    <>
      <div className="modalSectionHeader">
        <label className="modalBodyText modalComponentMargin">Country: </label>
        { selectedCountry==='INTL' ? 
          <i className="fa-solid fa-globe theme-color modalComponentMargin globe-icon-height"></i> : 
          <Flag country={selectedCountry} className="modalComponentMargin flag-icon" />}
      </div>    
      <div className="modalSection">
        { countryList.length > 0 ?
          <SelectComponent placeholder="Country..." options={countryList} 
            onChange={onCountryChange} selectedOption={selectedCountry} drawFlags={true} />
          : null
        }
        { provinceList.length > 0 ?
          <SelectComponent placeholder="State / Province..." options={provinceList} 
          onChange={onProvinceChange} selectedOption={selectedProvince} drawFlags={false} />
          : null
        }
        {/* <p>{ selectedProvince!=='' ? selectedProvince : "Nothing Selected" }</p> */}
      </div>
    </>
  );
}
 
export default LocationFilter;