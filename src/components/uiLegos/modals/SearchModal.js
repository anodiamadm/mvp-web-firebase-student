import React from 'react'
import LocationFilter from '../LocationFilter'
import TabControl from '../TabControl'

function SearchModal({setOpenModal}) {
  return (
    <div className='modalBackground'>
      <div className='modalContainer'>
        <button className='modalBtn' onClick={()=>setOpenModal(false)}><i className="fa-solid fa-x"></i></button>
        <div className="modalHeader">
          <div className='modal-header-text'>Filters: &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; <i className="fa-solid fa-sliders"></i></div>
        </div>
        <TabControl/>
        <LocationFilter/>
        <form className="modal-form">
        <button className="btn theme-btn lighten-1 z-depth-0">Search <i className="fas fa-search"></i></button>
        </form>
      </div>
    </div>
  )
}

export default SearchModal
