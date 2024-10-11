import { NavLink } from "react-router-dom";
import { useEffect, useState } from "react";

import "../../../assets/css/movies-list.css";

import FetchRequest from "../../../assets/js/request/fetch";

const MoviesList = () => {
    const [movies, setMovies] = useState([])

    useEffect(() => {
        // Function to run when the component loads
        getMoviesList();
    }, []); // Empty dependency array ensures it runs only once on mount

    const getMoviesList = () => {
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
            <table className="table table-sm">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Name</th>
                        <th scope="col">Rating</th>
                        <th scope="col">Categories</th>
                        <th scope="col">Actions</th>
                    </tr>
                </thead>
                <tbody className="table-group-divider">
                    {
                        movies.map((movie, i) => {
                            return (
                                <tr key={ i }>
                                    <th scope="row">{ i + 1 }</th>
                                    <td>{movie.name}</td>
                                    <td>{movie.rating}</td>
                                    <td>
                                        {
                                            movie.categories.map((item, i) => {
                                                return <div key={i} className="card-text col-2 movie-info-genre-item pe-0">
                                                        <NavLink to={'/categories/' + item.category.name} className="btn btn-link p-0 text-decoration-none">
                                                            {item.category.name}
                                                        </NavLink>
                                                    </div>
                                            })
                                        }
                                    </td>
                                    <td>
                                        <div>
                                            <div className="mb-2">
                                                <form>
                                                    <input type="hidden" />
                                                    <button className="btn btn-danger">Delete <i className="bi bi-trash"></i></button>
                                                </form>
                                            </div>
                                            <div className="mb-2">
                                                <NavLink to={`/dashboard/movies/edit/${movie.id}`} className="btn btn-secondary">Edit <i className="bi bi-arrow-right"></i></NavLink>
                                            </div>
                                        </div>
                                    </td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        </>
    )
}

export default MoviesList;