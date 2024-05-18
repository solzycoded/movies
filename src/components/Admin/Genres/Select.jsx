import { useEffect, useState } from "react";
import Select from "../Input/Select";
import FetchRequest from "../../../assets/js/request/fetch";

function SelectGenre(){
    const [genres, setGenres] = useState([]);

    useEffect(() => {
        // Function to run when the component loads
        allGenres();
    }, []); // Empty dependency array ensures it runs only once on mount

    const allGenres = () => {
        const success = (data) => {
            setGenres(data);
        }
 
        const failure = (data) => {
            setGenres(data);
        }

        (new FetchRequest("GET", "genres")).send(success, failure);
    }

    return (
        <>
            <Select id="genre" title="Select Genre(s)" selectedDefault="Select a genre" options={genres} />
        </>
    )
}

export default SelectGenre;