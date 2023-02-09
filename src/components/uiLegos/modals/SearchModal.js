import React from 'react'
import { mockDataTests } from '../../../dataAccess/MockData'

function SearchModal({srchQry, setOpenModal}) {
  return (
    <div className='modalBackground'>
      <div className='modalContainer'>
        <button className='modalBtn' onClick={()=>setOpenModal(false)}><i className="fa-solid fa-x"></i></button>
        { srchQry.length <4 ? 
          <div className="modalAlert">
            Search string too small! Type in more characters to search your tests.
          </div> :
          <div>
            { mockDataTests.filter(dataTest=>dataTest.courseTitle.toLocaleLowerCase().includes(srchQry)).length > 0 ? 
              <div className="modalHeader">Your search results:</div> :
              <div className="modalAlert">Sorry! No matching tests found. Try searching with some other string.</div>
            }
            <div className='modalBody'>
              <ul className="search-result-list">
                { mockDataTests.filter(dataTest=>dataTest.courseTitle.toLocaleLowerCase().includes(srchQry))
                    .map(dataTest=>(
                      <li key={dataTest.id} className="search-result-list-item">{ dataTest.id } : { dataTest.courseTitle }</li>
                )) }
              </ul>
            </div>
          </div>
        }
      </div>
    </div>
  )
}

export default SearchModal
