import { useState } from "react";
import SelectComponent from "./components/uiLegos/SelectComponent";

const options = [
  { key: 0, value: 'AU', label: 'Australia'},
  { key: 1, value: 'IN', label: 'India'},
  { key: 2, value: 'INTL', label: 'International'},
  { key: 3, value: 'JP', label: 'Japan'},
  { key: 4, value: 'GB', label: 'United Kingdom'},
  { key: 5, value: 'US', label: 'United States'},
  { key: 6, value: 'BD', label: 'Bangladesh'},
  { key: 7, value: 'GE', label: 'Germany'}
]
const Experiments = () => {
  const [selectedOption, setSelectedOption] = useState(4)
  return ( 
    <div className="experiments">
      <p>Selected Option: {selectedOption}</p>
      <div className="experiments-input-field">
        <SelectComponent options={options} onChange={(item)=>setSelectedOption(item)} selectedKey={selectedOption} placeholder="Country..." />
      </div>
    </div>
   );
}
 
export default Experiments;