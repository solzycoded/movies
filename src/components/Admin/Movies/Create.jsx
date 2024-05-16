import { useState } from "react";

import SelectCategory from "../Categories/Select";
import SelectGenre from "../Genres/Select";
import SelectLanguage from "../Languages/Select";

import App from "../../../common/util";
import SelectActor from "../Actors/Select";
import FetchRequest from "../../../assets/js/request/fetch";

const CreateMovie = () => {
    const [name, setMovieName]               = useState("");
    const [rating, setMovieRating]           = useState(0);
    const [runtime, setMovieRuntime]         = useState("");
    const [trailer, setMovieTrailer]         = useState("");
    const [releaseYear, setMovieReleaseYear] = useState("");
    const [poster, setMoviePoster]           = useState("");
    const [about, setAboutMovie]             = useState("");
    const [movieLink, setMovieLink]           = useState("");
    const [error, setError]           = useState("");


    const submitMovie = (e) => {
        e.preventDefault();
        
        const language = document.querySelector("#language").value;
        let data = { name, rating, runtime, trailer, releaseYear, poster, about, links: [movieLink], language };

        console.log(data);
        // const success = (data) => {
        //     setError("");
        // }

        // const failure = (data) => {
        //     setError("Movie name already exists!");
        // }

        // (new FetchRequest("POST", "movies", data)).send(success, failure);
    }

    const getSelectValues = () => {

    }

    return (
        <>
            <div className="mb-4">
                <h4 className="create-or-edit-movie-header">Create new Movie</h4>
            </div>

            <div className="form-group">
                <form onSubmit={submitMovie}>
                    <div className="mb-2 text-danger fw-bold text-small">{error}</div>
                    {/* name */}
                    <div className="form-floating mb-3">
                        <input type="text" className="form-control" id="movie-name" placeholder="what's the movie's name?" value={name} onChange={(e) => setMovieName(e.target.value)} required />
                        <label htmlFor="movie-name">Movie Name</label>
                    </div>
                    {/* rating */}
                    <div className="mb-2">
                        <label htmlFor="rating" className="form-label">Movie Rating (<b>{rating}</b>)</label>
                        <input type="range" className="form-range" min="0" max="5" id="rating" step="0.1" value={rating} onChange={(e) => setMovieRating(e.target.value)} />
                    </div>
                    {/* runtime */}
                    <div className="form-floating mb-3">
                        <input type="number" className="form-control" id="movie-runtime" placeholder="what's the movie's runtime?" value={runtime} onChange={(e) => setMovieRuntime(e.target.value)} required />
                        <label htmlFor="movie-runtime">Movie Runtime</label>
                    </div>
                    {/* select categories */}
                    <SelectCategory />
                    {/* select genres */}
                    <SelectGenre />
                    {/* select language */}
                    <SelectLanguage />
                    {/* trailer (you should be able to provide more than one trailers and link the trailer to a season or movie) */}
                    <div className="form-floating mb-3">
                        <input type="text" className="form-control" id="movie-trailer" placeholder="what's the movie's trailer?" value={trailer} onChange={(e) => setMovieTrailer(e.target.value)} required />
                        <label htmlFor="movie-trailer">Movie Trailer</label>
                    </div>
                    {/* select release year */}
                    <div className="form-floating mb-3">
                        <select className="form-select" id="release-year" required value={releaseYear} onChange={(e) => setMovieReleaseYear(e.target.value)}>
                            <option disabled value="">Select year of release</option>
                            {
                                App.generateArrayOfNumbers(1920, 2024).map((value, i) => {
                                    return <option key={ i } value={ value }>{ value }</option>
                                })
                            }
                        </select>
                        <label htmlFor="release-year">Year of Release</label>
                    </div>
                    {/* select actors */}
                    <SelectActor />
                    {/* about */}
                    <div className="form-floating mb-3">
                        <textarea className="form-control" placeholder="What's the movie about?" id="about" style={{height: "100px"}} value={about} onChange={(e) => setAboutMovie(e.target.value)}></textarea>
                        <label htmlFor="about">About Movie</label>
                    </div>
                    {/* upload movie poster */}
                    <div className="input-group mb-3">
                        <input type="file" className="form-control" id="movie-poster" accept="image/*" value={poster} onChange={(e) => setMoviePoster(e.target.value)} />
                        <label className="input-group-text" htmlFor="movie-poster">Upload</label>
                    </div>
                    {/* to be removed later (provide download links) */}
                    <div className="form-floating mb-3">
                        <input type="url" className="form-control" id="movie-link" placeholder="what's the movie's link?" value={movieLink} onChange={(e) => setMovieLink(e.target.value)} required />
                        <label htmlFor="movie-link">Movie Link</label>
                    </div>
                    {/* submit button */}
                    <div className="float-end mt-4">
                        <button type="submit" className="btn btn-dark">Create</button>
                    </div>
                </form>
            </div>
        </>
    )
}

export default CreateMovie;