import React from 'react'
import TabbedFormSearch from './TabbedFormSearch'

function SearchModal({setOpenModal}) {
  return (
    <div className='modalBackground'>
      <div className='modalContainer'>
        <button className='modalBtn' onClick={()=>setOpenModal(false)}><i className="fa-solid fa-x"></i></button>
        <div className="modalHeader">
          <div>Filters:</div>
          <i className="fa-solid fa-sliders"></i>
        </div>
        <TabbedFormSearch/>
      </div>
    </div>
  )
}

export default SearchModal
