import { useState } from "react";

const SelectComponent = ({options, placeholder="Select...", onChange, selectedKyy, open, setOpen}) => {
  const [inputValue, setInputValue] = useState('')
  const onInputChange = (e) => {
    setInputValue(e.target.value)
  }
  const onItemSelected = (option) => {
    onChange !== undefined && onChange(option.key)
    onChange !== undefined && setInputValue(option.value)
    setOpen(false)
  }
  return (
    <>
      <div className="input-container">
        <input type='text' value={inputValue} placeholder={placeholder} onChange={onInputChange} />
        <div className="input-arrow-container caret-down-position">
          <label className='s13-5 fontn cursor-pointer caret-down'>
            <span><i class="fa fa-caret-down" aria-hidden="true"></i></span>
          </label>
        </div>
      </div>
      <div className="dropdown">
        { options.map(opt => {
          return (<div key={opt.key} onClick={()=>onItemSelected(opt)} className="option" >{opt.value}</div>)
        })}
      </div>
    </>
  );
}
 
export default SelectComponent;