import { useContext, useState } from "react";
import { SearchCriteriaContext } from "../../context/SearchCriteriaContext";
import SearchModal from "./modals/SearchModal";

const SearchBar = () => {
  const [srchStr, setSrchStr] = useState('')
  const { srchQuery, addSrchString } = useContext(SearchCriteriaContext)
  const [openModal, setOpenModal] = useState(false)
  const onSearchStringChange = (e) =>{
    setSrchStr(e.target.value)
  }
  const handleQuerySubmit = (e)=>{
    e.preventDefault();
    setIsPending(true)
    if(openModal) {
      addSrchString(srchStr)
      console.log('SEARCH QUERRY: ', srchQuery)
    } else {
      setOpenModal(true)
    }
    setOpenModal(true)
    setIsPending(false);
  }
  const searchFocussed = (e)=>{
    e.preventDefault()
    setOpenModal(true)
  }
  const [isPending, setIsPending] = useState(false)
  return (
    <div>
      <form className="search-form" onSubmit={handleQuerySubmit}>
        <div className="search-field search-text">
          <input type="text" id='search-query' autoComplete="on" placeholder="Search tests..."
            onChange={onSearchStringChange} onClick={searchFocussed} />
        </div>
        <div className="search-field">
          {!isPending && <button className="btn theme-btn lighten-1 z-depth-0 search-button"><i className="fas fa-search fasearch-position"></i></button>}
          {isPending && <button className="btn theme-btn lighten-2 z-depth-0 search-button disabled"><i className="fas fa-search"></i></button>}
        </div>
      </form>
      { openModal && <SearchModal setOpenModal={setOpenModal}/> }
    </div>
  );
}
 
export default SearchBar;