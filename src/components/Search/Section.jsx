import { NavLink } from "react-router-dom";
import { useState } from "react";

import "../../assets/css/search.css"

const Search = () => {
    const [showSearch, setShowSearch]               = useState("");
    const [showSearchResults, setShowSearchResults] = useState("");
    const [searchQuery, setSearchQuery]             = useState("");

    const toggleSearch = () => {
        let searchValue = (showSearch=="active" ? "" : "active");

        setShowSearch(searchValue);
        setShowSearchResults(searchValue);
    }

    const toggleSearchResultsDropdown = () => {
        setShowSearchResults((showSearchResults=="active" ? "" : "active"));
    }

    const filterSearchResults = () => {
        // setShowSearchResults((showSearchResults=="active" ? "" : "active"));
    }

    return (
        <>
            <div className="input-group w-100">
                <div className="position-relative search-container">
                    <div className="input-group mb-1 search-bar">
                        <div className={ `search-bar-section ${showSearch}` }>
                            <input className="form-control rounded-0"
                                type="search" 
                                placeholder="What would you like to watch today?" 
                                aria-label="Search" 
                                id="search-for-item" 
                                onClick={ toggleSearchResultsDropdown } 
                                autoComplete="off" 
                                onKeyUp={ filterSearchResults }
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)} />
                        </div>
                        <div className="p-0">
                            {/* icon */}
                            <button className="p-0 btn btn-transparent text-white fs-3" onClick={ toggleSearch }><i className={ `p-0 bi bi-${(showSearch=="active" ? "x" : "search")}`}></i></button>
                        </div>
                    </div>

                    <div className={ `position-absolute top-75 w-100 search-results-dropdown ${showSearchResults}` } id="search-results-dropdown">
                        <div className="list-group search-results-dropdown-section">
                            <NavLink to="`/live-auction/items/live/${item.title}`" className="list-group-item list-group-item-action">Legend of the seeker</NavLink>
                            <a  className="list-group-item disabled d-none">No results found</a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Search;