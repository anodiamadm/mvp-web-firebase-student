import React from 'react'

function SearchModal({srchQry}) {
  return (
    <div className='ModalBackground'>
      <div className='ModalContainer'>
        <div className='ModalTitle'>
          <h6>Search Results for { srchQry }!</h6>
        </div>
        <div className='ModalBody'>
          <p>Lorem ipsum adipisicing elit. In dolorem unde, ullam corporis!</p>
        </div>
        <div className='ModalFooter'>
          <button><i className="fa-solid fa-x"></i></button>
          <button><i className="fas fa-search"></i></button>
        </div>
      </div>
    </div>
  )
}

export default SearchModal
