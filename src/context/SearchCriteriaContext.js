import { createContext, useState } from "react";

export const SearchCriteriaContext = createContext()

const SearchCriteriaContextProvider = ({children}) => {
  const [srchQuery] = useState([])
  const addSrchString = (srchString) => {
    srchQuery.push({'srchString': srchString})
  }
  const addLocation = (countryId, provinceId) => {
    srchQuery.push({'srchByLocation': {countryId, provinceId}})
  }
  const addSrchBoardExam = (boardId, classId, subjectId) => {
    srchQuery.push({'srchBoardExam': {boardId, classId, subjectId}})
  }
  const addCompetitiveExam = (examId, paperId) => {
    srchQuery.push({'srchBoardExam': {examId, paperId}})
  }
  const addProfessionalExam = (professionalExamIdId) => {
    srchQuery.push({'srchBoardExam': {professionalExamIdId}})
  }
  return (
    <SearchCriteriaContext.Provider value={{srchQuery, addSrchString, addLocation, addSrchBoardExam, addCompetitiveExam, addProfessionalExam}}>
      {children}
    </SearchCriteriaContext.Provider>
  )
}

export default SearchCriteriaContextProvider