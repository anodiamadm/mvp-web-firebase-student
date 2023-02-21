import { forwardRef, useEffect, useState } from "react";
import Flag from "react-flagkit";
import CloseClickingOutside from "./CloseClickingOutside";

const SelectComponent = forwardRef(({options, placeholder="Select...", selectedOption, onChange, open, setOpen, drawFlags}, ref) => {
  const [inputValue, setInputValue] = useState('')
  const [searchedOptions, setSearchedOptions] = useState([])
  useEffect(()=>{
    if(selectedOption) {
      setInputValue(options.find(option=>option.value===selectedOption).label)
    } else {
      setInputValue('')
    }
  },[selectedOption, options])
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
  const dropdownBlurred = () => {
    if(selectedOption!==undefined) {
      if(searchedOptions.findIndex(element=>inputValue.toLowerCase()===element.label.toLowerCase())!==-1) {
        onItemSelected(searchedOptions.find(element=>inputValue.toLowerCase()===element.label.toLowerCase()))
      }
    }
  }
  const dropdownClick = () => {
    setSearchedOptions(options)
    setOpen(!open)
  }
  const clearDropdown = () => {
    setInputValue("")
    setSearchedOptions(options)
  }
  return (
    <div ref={ref}>
      <div className="input-container">
        <input type='text' value={inputValue} placeholder={placeholder} onChange={onInputChange} onBlur={dropdownBlurred} />
        { selectedOption || inputValue ? 
        <div className="input-clear-container" onClick={clearDropdown}><i className="fa-solid fa-circle-xmark"></i></div> :
        null }
        <div className="input-arrow-container caret-down-position" onClick={dropdownClick}>
          <label className='s13-5 fontn cursor-pointer caret-down'>
            <span><i className="fa fa-caret-down" aria-hidden="true"></i></span>
          </label>
        </div>
        { drawFlags ? 
          <div className={`dropdown ${open ? "visible" : ""}`}>
            { searchedOptions.map(opt => {
              return (
                <div key={opt.value} onClick={()=>onItemSelected(opt)} className="option" >
                  { opt.value==='INTL' ?
                    <i className="fa-solid fa-globe theme-color modalComponentMargin globe-icon-height international-icon-right-margin"></i> :
                    <Flag country={opt.value} className="modalComponentMargin" />
                  }
                  {opt.label}
                </div>
              )
            })}
          </div> :
          <div className={`dropdown ${open ? "visible" : ""}`}>
            { searchedOptions.map(opt => {
              return (
                <div key={opt.value} onClick={()=>onItemSelected(opt)} className="option no-flags-left-margin" >
                  {opt.label}
                </div>
              )
            })}
          </div>
        }
      </div>
    </div>
  );
})
 
export default CloseClickingOutside(SelectComponent);