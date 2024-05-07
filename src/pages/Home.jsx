import MovieGrid from "../components/MovieGrid"
import { useState, useEffect } from "react"
import FetchRequest from "../assets/js/request/fetch"

function Home(){
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        // Function to run when the component loads
        allMovies();
    }, []); // Empty dependency array ensures it runs only once on mount

    const allMovies = () => {
        const success = (data) => {
            setMovies(data);
        }

        const failure = (data) => {
            setMovies(data);
        }

        (new FetchRequest("GET", "movies")).send(success, failure);
    }

    return (
        <>
            <MovieGrid movies={ movies } />
        </>
    )
}

export default Home;