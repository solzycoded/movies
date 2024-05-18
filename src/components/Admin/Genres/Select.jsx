import { useEffect, useState } from "react";
import Select from "../Input/Select";
import FetchRequest from "../../../assets/js/request/fetch";
import PropTypes from "prop-types";

function SelectGenre({ selectedGenres }){
    const [genres, setGenres] = useState([]);

    let selectedOptions = [];

    useEffect(() => {
        // Function to run when the component loads
        allGenres();
        getSelectedGenres();
    }, []); // Empty dependency selectedOptionsay ensures it runs only once on mount

    const allGenres = () => {
        const success = (data) => {
            setGenres(data);
        }

        const failure = (data) => {
            setGenres(data);
        }

        (new FetchRequest("GET", "genres")).send(success, failure);
    }

    const getSelectedGenres = () => {
        if(selectedGenres){
            selectedGenres.forEach(item => {
                selectedOptions.push(item.genre._id);
            });
        }
    }

    return (
        <>
            <Select id="genre" title="Select Genre(s)" selectedDefault="Select a genre" options={genres} selectedOptions={selectedOptions} />
        </>
    )
}

SelectGenre.propTypes = {
    selectedGenres: PropTypes.array
}

export default SelectGenre;