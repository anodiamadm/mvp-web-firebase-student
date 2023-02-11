import { useContext, useState } from "react";
import { SearchCriteriaContext } from "../../context/SearchCriteriaContext";
import SearchModal from "./modals/SearchModal";

const SearchBar = () => {
  const { srchQuery, setSrchQuery } = useContext(SearchCriteriaContext)
  const [openModal, setOpenModal] = useState(false)
  const onSearchQueryChange = (e) =>{
    setSrchQuery({srchQry: e.target.value})
    setOpenModal(true)
    setIsPending(true)
    setIsPending(false);
  }
  const handleQuerySubmit = (e)=>{
    e.preventDefault();
    setIsPending(true)
    setOpenModal(true)
    setIsPending(false);
  }
  const searchFocussed = (e)=>{
    e.preventDefault()
    setIsPending(true)
    setOpenModal(true)
    setIsPending(false)
  }
  const [isPending, setIsPending] = useState(false)
  return (
    <div>
      <form className="search-form" onSubmit={handleQuerySubmit}>
        <div className="search-field search-text">
          <input type="text" id='search-query' autoComplete="on" placeholder="Search tests..."
            onChange={onSearchQueryChange} onClick={searchFocussed} />
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