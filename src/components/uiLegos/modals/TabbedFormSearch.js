// import React, { useContext, useState } from 'react'
// import { SearchCriteriaContext } from '../../../context/SearchCriteriaContext'

function TabbedFormSearch() {
  // const { selectExam } = useContext(SearchCriteriaContext)
  // const [selectedExam, setSelectedExam] = useState({boardId: '', classId: '', examId: '', subjectId: ''})
  const onSearchCriteriaChange=(e)=>{
    // setSelectedExam(values=> ({...values, [e.target.id]: e.target.value }))
  }
  const handleSearchSubmit= (e)=>{
    e.preventDefault();
  }
  
  return (
    <div>
      <form onSubmit={handleSearchSubmit} className="anodiam-form">
        <div className="input-field">
          <label htmlFor='boardId'>BoardId...</label> 
          <input type="text" id='boardId' onChange={onSearchCriteriaChange} />
        </div>
        <div className="input-field">
          <label htmlFor='classId'>ClassId...</label> 
          <input type="text" id='classId' onChange={onSearchCriteriaChange} />
        </div>
        <div className="input-field">
          <label htmlFor='examId'>ExamId...</label> 
          <input type="text" id='examId' onChange={onSearchCriteriaChange} />
        </div>
        <div className="input-field">
          <label htmlFor='subjectId'>SubjectId...</label> 
          <input type="text" id='subjectId' onChange={onSearchCriteriaChange} />
        </div>
        <div className="input-field">
        <button className="btn theme-btn lighten-1 z-depth-0">Search</button>
        </div>
      </form>
    </div>
  )
}

export default TabbedFormSearch
