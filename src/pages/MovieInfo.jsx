import { useState, useEffect } from "react"
import { useParams, NavLink } from 'react-router-dom';

import FetchRequest from "../assets/js/request/fetch"

import MovieRating from '../components/MovieRating';
import MovieGenreItem from '../components/MovieGenreItem';
import App from "../common/util";

import "../assets/css/MovieInfo.css"

function MovieInfo() {
    const { movie_name } = useParams();

    if (movie_name === undefined) {
        return;
    }

    const [movie, setMovie] = useState({});

    useEffect(() => {
        // Function to run when the component loads
        getMovieDetails();
    }, []); // Empty dependency array ensures it runs only once on mount

    const getMovieDetails = () => {
        const success = (data) => {
            setMovie(data);
        }

        const failure = (data) => {
            setMovie(data);
        }

        (new FetchRequest("GET", `movies/${movie_name}`)).send(success, failure);
    }

    return movie ? (
        <div className="shadow-lg p-3 mb-5 bg-body rounded">
            <div className="card border-0">
                <div className="row">
                    <div className="col-12 col-lg-5 col-md-4 col-sm-12">
                        <img src={movie.poster} className="img-fluid rounded w-100 movie-info-poster" alt="movie poster" />
                    </div>
                    <div className="col-12 col-lg-7 col-md-8 col-sm-12">
                        <div className="card-body ps-0">
                            <h5 className="card-title text-capitalize">{movie.name}</h5>
                            {/* movie genres */}
                            <div className="container-fluid p-0 mb-2">
                                <div className="row">
                                    {
                                        (
                                            (movie.genres) &&
                                            movie.genres.map((item, i) => {
                                                return (
                                                    <div key={i} className="card-text col-2 movie-info-genre-item pe-0">
                                                        <NavLink to={'/genres/' + item.genre.name} className="btn btn-link p-0 text-decoration-none">
                                                            <MovieGenreItem genre={item.genre.name.trim()} />
                                                        </NavLink>
                                                    </div>
                                                );
                                            })
                                        )
                                    }
                                </div>
                            </div>
                            {/* movie rating */}
                            {
                                movie.rating && 
                                (
                                    <MovieRating rating={movie.rating} />
                                )
                            }
                            {/* movie release year */}
                            {
                                movie.release_year && (<div className="mt-3">
                                    <h6 className="card-title">Release Year</h6>
                                    {/* {formatDate(movie.release_date)} */}
                                    <p className="card-text">{movie.release_year}</p>
                                </div>
                                )
                            }

                            <div className="mt-3">
                                <h6 className="card-title">Runtime</h6>
                                <p className="card-text">{App.convertMinsToHours(movie.runtime)}</p>
                            </div>
                            {/* movie language */}
                            {
                                movie.language && (
                                <div className="mt-3">
                                    <h6 className="card-title">Language</h6>
                                    <p className="card-text text-capitalize">{movie.language.name}</p>
                                </div>
                                )
                            }
                            {/* movie actors */}
                            {
                                (movie.actors && movie.actors.length > 0) && 
                                (
                                    <div className="mt-3">
                                        <h6 className="card-title">Cast</h6>
                                        <p className="card-text text-capitalize">{App.displayList(movie.actors)}</p>
                                    </div>
                                )
                            }
                            <div className="mt-3">
                                <h6 className="card-title">Watch Trailer</h6>
                                <p className="card-text"><a href="https://www.youtube.com/watch?v=GyAKLundvvc&t=878s" target="_blank" className="text-decoration-none app-color">watch <b>{movie.name}</b> trailer</a></p>
                            </div>
                            
                            {
                                <div className="mt-3">
                                    <a
                                        className="btn btn-dark text-white fw-bolder fs-5"
                                        href={'/#'}>
                                        Download Movie 
                                        <i className="bi bi-download ms-2"></i>
                                    </a>
                                </div>
                            }
                        </div>
                    </div>
                    <div className="col-12 mt-3 movie-details-synopsis lg-screen">
                        <h6 className="card-title fs-4 mb-2">About Movie</h6>
                        <p className="card-text">{movie.about}</p>
                    </div>
                </div>
            </div>
        </div>
    ) : (
        <div className="fs-3 text-center">Movie name provided does not exist</div>
    );
}

export default MovieInfo;