import { useState } from "react";

const SearchBar = () => {
  const onSearchQueryChange = () =>{
    
  }
  const handleQuerySubmit = (e)=>{
    setIsPending(true)
    e.preventDefault();
    setIsPending(false);
  }
  const [isPending, setIsPending] = useState(false)
  return (
    <div>
      <form className="search-form" onSubmit={handleQuerySubmit}>
        <div className="search-field search-text">
          <input type="text" id='search-query' autoComplete="on" required placeholder="Search tests..." onChange={onSearchQueryChange} />
        </div>
        <div className="search-field">
          {!isPending && <button className="btn theme-btn lighten-1 z-depth-0 search-button"><i className="fas fa-search"></i></button>}
          {isPending && <button className="btn theme-btn lighten-2 z-depth-0 search-button disabled"><i className="fas fa-search"></i></button>}
        </div>
      </form>
    </div>
  );
}
 
export default SearchBar;