import { useEffect, useState } from "react";

const SelectComponent = ({options, placeholder="Select...", onChange, selectedKey}) => {
  const [inputValue, setInputValue] = useState('')
  const [searchedOptions, setSearchedOptions] = useState([])
  const [open, setOpen] = useState(false)
  useEffect(()=>{
    if(selectedKey) {
      setInputValue(options.find(option=>option.value===selectedKey).label)
    }
  },[selectedKey, options])
  const onInputChange = (e) => {
    setInputValue(e.target.value)
    if(e.target.value!=='') {
      setSearchedOptions(options.filter(opt=>opt.label.toLowerCase().includes(e.target.value.toLowerCase())))
    } else {
      setSearchedOptions(options)
    }
    setOpen(true)
  }
  const onItemSelected = (option) => {
    onChange !== undefined && onChange(option.value)
    onChange !== undefined && setInputValue(option.label)
    setOpen(false)
  }
  const clearDropdown = () => {
    setInputValue("")
    onChange("")
    setSearchedOptions(options)
  }
  const onInputClick = () => {
    setOpen(!open)
    setSearchedOptions(options)
  }
  return (
    <>
      <div className="input-container" onClick={onInputClick}>
        <input type='text' value={inputValue} placeholder={placeholder} onChange={onInputChange} />
        <div className="input-arrow-container caret-down-position">
          <label className='s13-5 fontn cursor-pointer caret-down'>
            <span><i className="fa fa-caret-down" aria-hidden="true"></i></span>
          </label>
        </div>
        { selectedKey || inputValue ? 
          <div className="input-clear-container" onClick={clearDropdown}><i className="fa-solid fa-circle-xmark"></i></div> :
          null }
        <div className={`dropdown ${open ? "visible" : ""}`}>
          { searchedOptions.map(opt => {
            return (
              <div key={opt.value} onClick={()=>onItemSelected(opt)} className="option" >
                {opt.label}
              </div>
            )
          })}
        </div>
      </div>
    </>
  );
}
 
export default SelectComponent;