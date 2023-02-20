import React from 'react'
import LocationFilter from '../LocationFilter'

function SearchModal({setOpenModal}) {
  return (
    <div className='modalBackground'>
      <div className='modalContainer'>
        <button className='modalBtn' onClick={()=>setOpenModal(false)}><i className="fa-solid fa-x"></i></button>
        <div className="modalHeader">
          <div className='modal-header-text'>Filters: &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; <i className="fa-solid fa-sliders"></i></div>
        </div>
        <LocationFilter/>
      </div>
    </div>
  )
}

export default SearchModal
