import { createContext, useState } from "react";

export const SearchCriteriaContext = createContext()

const SearchCriteriaContextProvider = ({children}) => {
  const [srchQuery, setSrchQuery] = useState({srchString: '',
                                              countryId: '', provinceId: '',
                                              boardId: '', yearId: '', subjectId: '',
                                              examId: '', paperId: '',
                                              professionalExamId: ''})
  const addSrchString = (srchStr) => {
    let srchQryObj = srchQuery
    srchQryObj.srchString = srchStr
    setSrchQuery(srchQryObj)
  }
  const addLocation = (countryId, provinceId) => {
    let srchQryObj = srchQuery
    srchQryObj.countryId = countryId
    srchQryObj.provinceId = provinceId
    setSrchQuery(srchQryObj)
    console.log("Qry after Location Change: ", srchQuery);
  }
  const addSrchBoardExam = (boardId, yearId, subjectId) => {
    let srchQryObj = srchQuery
    srchQryObj.srchBoardExam.boardId = boardId
    srchQryObj.srchBoardExam.yearId = yearId
    srchQryObj.srchBoardExam.subjectId = subjectId
    setSrchQuery(srchQryObj)
  }
  const addCompetitiveExam = (examId, paperId) => {
    let srchQryObj = srchQuery
    srchQryObj.srchCompetitiveExam.examId = examId
    srchQryObj.srchCompetitiveExam.paperId = paperId
    setSrchQuery(srchQryObj)
  }
  const addProfessionalExam = (professionalExamIdId) => {
    let srchQryObj = srchQuery
    srchQryObj.srchProfessionalExam.professionalExamIdId = professionalExamIdId
    setSrchQuery(srchQryObj)
  }
  return (
    <SearchCriteriaContext.Provider value={{srchQuery, addSrchString, addLocation, addSrchBoardExam, addCompetitiveExam, addProfessionalExam}}>
      {children}
    </SearchCriteriaContext.Provider>
  )
}

export default SearchCriteriaContextProvider