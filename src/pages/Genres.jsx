import { useState, useEffect } from "react";
import FetchRequest from "../assets/js/request/fetch";
import CategorySection from "../components/Genres/Section";

function Genres(){
    const [genres, setGenres] = useState([]);
    const currentUrl          = window.location.href;

    useEffect(() => {
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
            <section>
                {
                    genres.map((genre, i) => {
                        return <CategorySection genre={ genre } currentUrl={ currentUrl } key={ i } />
                    })
                }
            </section>
        </>
    )
}

export default Genres;