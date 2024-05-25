import { NavLink } from "react-router-dom"
import { useState } from "react";

import "../../assets/css/search.css"
import FetchRequest from "../../assets/js/request/fetch";

const Search = () => {
    const [showSearch, setShowSearch]               = useState("");
    const [showSearchResults, setShowSearchResults] = useState("");
    const [searchQuery, setSearchQuery]             = useState("");
    const [movies, updateMovies]                    = useState([]);

    const toggleSearch = () => {
        let searchValue = (showSearch=="active" ? "" : "active");

        setShowSearch(searchValue);
        if(searchValue==""){
            setShowSearchResults(searchValue);
        }
    }

    const toggleSearchResultsDropdown = () => {
        setShowSearchResults((showSearchResults=="active" ? "" : "active"));
    }

    const filterSearchResults = () => {
        const success = (data) => {
            updateMovies(data);
        }

        const failure = (data) => {
            updateMovies(data);
        }

        (new FetchRequest("GET", `search-movies/${searchQuery}`)).send(success, failure);
    }

    return (
        <>
            <div className="d-flex" role="search">
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
                            <button className="p-0 btn btn-transparent text-white fs-3" 
                                onClick={ toggleSearch }>
                                <i className={ `p-0 bi bi-${(showSearch=="active" ? "x" : "search")}`}></i>
                            </button>
                        </div>
                    </div>

                    <div className={ `position-absolute top-75 w-100 search-results-dropdown ${showSearchResults}` } id="search-results-dropdown">
                        <div className="list-group search-results-dropdown-section">
                            {
                                movies.map((movie, i) => {
                                    return <NavLink to={`/${movie.name}`} key={ i } className="list-group-item list-group-item-action d-flex justify-content-start">
                                        <div>
                                            <img src={movie.poster.url} className="img-fluid" width="40" />
                                        </div>
                                        <div className="ms-2">
                                            <p className="p-0 m-0 text-capitalize"><small>{ movie.name }</small></p>
                                            <small className="p-0 text-secondary">{ movie.rating }</small>
                                        </div>
                                    </NavLink>
                                })
                            }
                            
                            <a className={ `list-group-item disabled ${(movies.length > 0 ? "d-none" : "")}` }>No results found</a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Search;