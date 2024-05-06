import App from "./app";

// search and filter feature
const toggleSearchResultsDropdown = () => {
    console.log("target");
    // App.getElementById("search-results-dropdown").classList.toggle("active");
}

const showSearchResultsDropdown = () => {
    App.getElementById("search-results-dropdown").classList.add("active");
}

const hideSearchResultsDropdown = () => {
    App.getElementById("search-results-dropdown").classList.remove("active");
}

const SearchMovie = {
    toggleSearchResultsDropdown,
    showSearchResultsDropdown,
    hideSearchResultsDropdown,
}

export default SearchMovie;