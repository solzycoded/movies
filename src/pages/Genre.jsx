import { useState, useEffect } from "react"
import FetchRequest from "../assets/js/request/fetch"
import MovieGrid from "../components/MovieGrid"
import { useParams } from "react-router-dom"
import BreadCrumb from "../components/Breadcrumb/Section"

function Genre(){
    const [movies, setMovies] = useState([]);
    const { genre }           = useParams();

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

        (new FetchRequest("GET", `movies/by-genre/${genre}`)).send(success, failure);
    }

    return (
        <>
            <BreadCrumb currentUrl={ window.location.href } />
            <section>
                <div className="container-fluid">
                    <h3 className="text-capitalize">{ genre }</h3>
                </div>
                <MovieGrid movies={ movies } />
            </section>
        </>
    )
}

export default Genre;