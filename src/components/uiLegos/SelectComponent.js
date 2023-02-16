import { useState } from "react";

const SelectComponent = ({options, placeholder="Select...", onChange, selectedKey}) => {
  const [inputValue, setInputValue] = useState('')
  const [open, setOpen] = useState(false)
  // useEffect(()=>{
  //   if(selectedKey) {
  //     setInputValue(options.find(option=>option.key===selectedKey).key)
  //   }
  // },[selectedKey, options])
  const onInputChange = (e) => {
    setInputValue(e.target.value)
  }
  const onItemSelected = (option) => {
    onChange !== undefined && onChange(option.value)
    onChange !== undefined && setInputValue(option.label)
    setOpen(false)
  }
  const clearDropdown = () => {
    setInputValue("")
    onChange("")
  }
  const onInputClick = () => {
    setOpen(prevValue=>!prevValue)
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
          { options.map(opt => {
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