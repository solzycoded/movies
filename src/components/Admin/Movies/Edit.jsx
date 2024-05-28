import { useEffect, useState } from "react";
import { NavLink, useParams } from "react-router-dom";

import SelectCategory from "../Categories/Select";
import SelectGenre from "../Genres/Select";
import SelectLanguage from "../Languages/Select";

import App from "../../../common/util";
import SelectActor from "../Actors/Select";
import FetchRequest from "../../../assets/js/request/fetch";

const EditMovie = () => {
    const { id } = useParams();
  
    const [movie, setMovie]                  = useState(null);

    const [name, setMovieName]               = useState("");
    const [rating, setMovieRating]           = useState(0);
    const [runtime, setMovieRuntime]         = useState("");
    const [trailer, setMovieTrailer]         = useState("");
    const [releaseYear, setMovieReleaseYear] = useState("");
    const [poster, setMoviePoster]           = useState("");
    const [posterFile, setMoviePosterFile]   = useState({});
    const [about, setAboutMovie]             = useState("");
    // const [movieLink, setMovieLink]          = useState("");
    const [posterSrc, setPosterSrc]          = useState("");

    const [error, setError]                  = useState("");

    useEffect(() => {
        // Function to run when the component loads
        const getMovieDetails = () => {
            const success = (data) => {
                setMovie(data);

                // set the values of the fields
                setMovieName(data.name);
                setMovieRating(data.rating);
                setMovieRuntime(data.runtime);
                setMovieTrailer(data.trailer);
                setMovieReleaseYear((data.release_year==null ? "" : data.release_year));
                setAboutMovie(data.about);
                setPosterSrc(data.poster.url);

                // const link = data.links.length > 0 ? data.links[0].link : "";
                // setMovieLink(link);
            }

            const failure = (data) => {
                setMovie(data);
            }

            (new FetchRequest("GET", `movies/by-id/${id}`)).send(success, failure);
        }

        getMovieDetails();
    }, []); // Empty dependency array ensures it runs only once on mount

    const configureMoviePoster = (e) => {
        setMoviePoster(e.target.value);
        setMoviePosterFile(e.target.files[0]);
    }

    const submitMovie = (e) => {
        e.preventDefault();

        const language = document.querySelector("#language").value;
        const categories = App.getSelectOptionValues("#category");
        const actors = App.getSelectOptionValues("#actor");
        const genres = App.getSelectOptionValues("#genre");

        let data = App.createFormData({language, categories, actors, genres, posterFile, name, rating, runtime, trailer, releaseYear, about, movieLink});

        const success = (data) => {
            setError("");
            alert("success");
        }

        const failure = (data) => {
            setError(data);
        }

        (new FetchRequest("PUT", `movies/${id}`, data, true)).send(success, failure);
    }

    return movie && (
        <> 
            <div className="form-group container-fluid p-0">
                <form onSubmit={submitMovie} className="row">
                    <div className="col-12 mb-2 text-danger fw-bold text-small">{error}</div>
                    {/* name */}
                    <div className="col-12 col-md-6">
                        <div className="form-floating mb-3">
                            <input type="text" className="form-control" id="movie-name" placeholder="what's the movie's name?" value={name} onChange={(e) => setMovieName(e.target.value)} />
                            <label htmlFor="movie-name">Movie Name</label>
                        </div>
                        {/* select actors */}
                        <SelectActor selectedActors={movie.actors} />
                        {/* select categories */}
                        <SelectCategory selectedCategories={movie.categories} />
                        {/* select genres */}
                        <SelectGenre selectedGenres={movie.genres} />
                        {/* select language */}
                        <SelectLanguage selectedLanguage={movie.language} />
                    </div>
                    <div className="col-12 col-md-6">
                        {/* select release year */}
                        <div className="form-floating mb-3">
                            <select className="form-select" id="release-year"  value={releaseYear} onChange={(e) => setMovieReleaseYear(e.target.value)}>
                                <option disabled value="">Select year of release</option>
                                {
                                    App.generateArrayOfNumbers(1920, 2024).map((value, i) => {
                                        return <option key={ i } value={ value }>{ value }</option>
                                    })
                                }
                            </select>
                            <label htmlFor="release-year">Year of Release</label>
                        </div>
                        {/* trailer (you should be able to provide more than one trailers and link the trailer to a season or movie) */}
                        <div>
                            <div><NavLink to={trailer} className="btn btn-link app-color" target="_blank">Watch trailer</NavLink></div>
                            <div className="form-floating mb-3">
                                <input type="text" className="form-control" id="movie-trailer" placeholder="what's the movie's trailer?" value={trailer} onChange={(e) => setMovieTrailer(e.target.value)}  />
                                <label htmlFor="movie-trailer">Movie Trailer</label>
                            </div>
                        </div>
                        {/* to be removed later (provide download links) */}
                        {/* <div className="form-floating mb-3">
                            <input type="url" className="form-control" id="movie-link" placeholder="what's the movie's link?" value={movieLink} onChange={(e) => setMovieLink(e.target.value)}  />
                            <label htmlFor="movie-link">Movie Link</label>
                        </div> */}
                        {/* runtime */}
                        <div className="form-floating mb-3">
                            <input type="number" className="form-control" id="movie-runtime" placeholder="what's the movie's runtime?" value={runtime} onChange={(e) => setMovieRuntime(e.target.value)}  />
                            <label htmlFor="movie-runtime">Movie Runtime (minutes)</label>
                        </div>
                        {/* about */}
                        <div className="form-floating mb-3">
                            <textarea className="form-control" placeholder="What's the movie about?" id="about" style={{height: "100px"}} value={about} onChange={(e) => setAboutMovie(e.target.value)}></textarea>
                            <label htmlFor="about">About Movie</label>
                        </div>
                        {/* upload movie poster */}
                        <div className="d-flex justify-content-start">
                            <div className="me-2">
                                <img src={posterSrc} className="img-fluid" width="80" height="30" />
                            </div>
                            <div className="input-group mb-3">
                                <input type="file" className="form-control" id="movie-poster" accept="image/*" value={poster} onChange={configureMoviePoster} />
                                <label className="input-group-text" htmlFor="movie-poster">Upload</label>
                            </div>
                        </div>
                        {/* rating */}
                        <div className="mb-2">
                            <label htmlFor="rating" className="form-label">Movie Rating (<b>{rating}</b>)</label>
                            <input type="range" className="form-range" min="0" max="5" id="rating" step="0.1" value={rating} onChange={(e) => setMovieRating(e.target.value)} />
                        </div>
                    </div>

                    {/* submit button */}
                    <div className="col-12">
                        <div className="float-end mt-4">
                            <button type="submit" className="btn btn-dark">Update</button>
                        </div>
                    </div>
                </form>
            </div>
        </>
    )
}

export default EditMovie;