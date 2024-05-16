import { useEffect, useState } from "react";
import FetchRequest from "../../../assets/js/request/fetch";

function SelectLanguage(){
    const [languages, setLanguages]          = useState([]);
    const [movieLanguage, setMovieLanguage] = useState("");

    useEffect(() => {
        // Function to run when the component loads
        allLanguages();
    }, []); // Empty dependency array ensures it runs only once on mount

    const allLanguages = () => {
        const success = (data) => {
            setLanguages(data);
        }

        const failure = (data) => {
            setLanguages(data);
        }

        (new FetchRequest("GET", "languages")).send(success, failure);
    }

    return (
        <>
        <div className="form-floating mb-3">
            <select className="form-select" id="language"  value={movieLanguage} onChange={(e) => setMovieLanguage(e.target.value)}>
                <option disabled value="">Select a language</option>
                {
                    languages.map((value, i) => {
                        return <option key={ i } value={ value.id }>{ value.name }</option>
                    })
                }
            </select>
            <label htmlFor="language">Select Language</label>
        </div>
        </>
    )
}

export default SelectLanguage;