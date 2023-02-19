import { useEffect, useState } from "react";
import Flag from "react-flagkit";
import SelectComponent from "./components/uiLegos/SelectComponent";

const options = [
  { value: 'AU', label: 'Australia'},
  { value: 'IN', label: 'India'},
  { value: 'INTL', label: 'International'},
  { value: 'JP', label: 'Japan'},
  { value: 'GB', label: 'United Kingdom'},
  { value: 'US', label: 'United States'},
  { value: 'BD', label: 'Bangladesh'},
  { value: 'DE', label: 'Germany'}
]
const Experiments = () => {
  const [selectedOption, setSelectedOption] = useState('IN')
  useEffect(() => {
    options.sort((a, b) => {
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
  }, [])
  return ( 
    <div className="experiments">
      <p>Selected Option: {selectedOption}</p>
      { selectedOption==='INTL' ? 
      <i className="fa-solid fa-globe theme-color modalComponentMargin globe-icon-height"></i> : 
      <Flag country={selectedOption} className="modalComponentMargin" />}
      <div className="experiments-input-field">
        <SelectComponent placeholder="Country..." options={options} selectedOption={selectedOption} onChange={(item)=>setSelectedOption(item)} />
      </div>
    </div>
   );
}
 
export default Experiments;