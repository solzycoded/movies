import { useState } from "react";

import SelectCategory from "../Categories/Select";
import SelectGenre from "../Genres/Select";
import SelectLanguage from "../Languages/Select";
import SelectActor from "../Actors/Select";

import App from "../../../common/util";
import FetchRequest from "../../../assets/js/request/fetch";

const CreateMovie = () => {
    const [name, setMovieName]               = useState("");
    const [rating, setMovieRating]           = useState(0);
    const [runtime, setMovieRuntime]         = useState("");
    const [trailer, setMovieTrailer]         = useState("");
    const [releaseYear, setMovieReleaseYear] = useState("");
    const [poster, setMoviePoster]           = useState("");
    const [posterFile, setMoviePosterFile]   = useState({});
    const [about, setAboutMovie]             = useState("");
    // const [movieVideo, setMovieVideo]         = useState("");
    // const [movieVideoFile, setMovieVideoFile] = useState({});

    const [error, setError]                  = useState("");

    const configureMoviePoster = (e) => {
        setMoviePoster(e.target.value);
        setMoviePosterFile(e.target.files[0]);
    }

    // const configureMovieVideo = (e) => {
    //     setMovieVideo(e.target.value);
    //     setMovieVideoFile(e.target.files[0]);
    // }

    const submitMovie = (e) => {
        e.preventDefault();

        const language = document.querySelector("#language").value;
        const categories = App.getSelectOptionValues("#category");
        const actors = App.getSelectOptionValues("#actor");
        const genres = App.getSelectOptionValues("#genre");
        // , movieVideoFile
        let data = App.createFormData({language, categories, actors, genres, posterFile, name, rating, runtime, trailer, releaseYear, about});

        const success = (data) => {
            setError("");
            alert("success");
        }

        const failure = (data) => {
            setError("Movie name already exists!");
        }

        (new FetchRequest("POST", "movies", data, true)).send(success, failure);
    }

    return (
        <>

            <div className="form-group">
                <form onSubmit={submitMovie}>
                    <div className="mb-2 text-danger fw-bold text-small">{error}</div>
                    {/* name */}
                    <div className="form-floating mb-3">
                        <input type="text" className="form-control" id="movie-name" placeholder="what's the movie's name?" value={name} onChange={(e) => setMovieName(e.target.value)} />
                        <label htmlFor="movie-name">Movie Name</label>
                    </div>
                    {/* select actors */}
                    <SelectActor />
                    {/* select categories */}
                    <SelectCategory />
                    {/* select genres */}
                    <SelectGenre />
                    {/* select language */}
                    <SelectLanguage />
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
                    <div className="form-floating mb-3">
                        <input type="text" className="form-control" id="movie-trailer" placeholder="what's the movie's trailer?" value={trailer} onChange={(e) => setMovieTrailer(e.target.value)}  />
                        <label htmlFor="movie-trailer">Movie Trailer</label>
                    </div>
                    {/* runtime */}
                    <div className="form-floating mb-3">
                        <input type="number" className="form-control" id="movie-runtime" placeholder="what's the movie's runtime?" value={runtime} onChange={(e) => setMovieRuntime(e.target.value)}  />
                        <label htmlFor="movie-runtime">Movie Runtime</label>
                    </div>
                    {/* about */}
                    <div className="form-floating mb-3">
                        <textarea className="form-control" placeholder="What's the movie about?" id="about" style={{height: "100px"}} value={about} onChange={(e) => setAboutMovie(e.target.value)}></textarea>
                        <label htmlFor="about">About Movie</label>
                    </div>
                    {/* upload movie poster */}
                    <div className="input-group mb-3">
                        <input type="file" className="form-control" id="movie-poster" accept="image/*" value={poster} onChange={configureMoviePoster} />
                        <label className="input-group-text" htmlFor="movie-poster">Upload Poster</label>
                    </div>
                    {/* to be removed later (provide download links) */}
                    {/* <div className="form-floating mb-3">
                        <input type="url" className="form-control" id="movie-video" placeholder="what's the movie's link?" value={movieVideo} onChange={(e) => setMovieVideo(e.target.value)}  />
                        <label htmlFor="movie-video">Movie Link</label>
                    </div> */}
                    {/* <div className="input-group mb-3">
                        <input type="file" className="form-control" id="movie-video" accept=".mp4, .mkv, .avi" value={movieVideo} onChange={configureMovieVideo} />
                        <label className="input-group-text" htmlFor="movie-video">Upload Video</label>
                    </div> */}
                    {/* rating */}
                    <div className="mb-2">
                        <label htmlFor="rating" className="form-label">Movie Rating (<b>{rating}</b>)</label>
                        <input type="range" className="form-range" min="0" max="5" id="rating" step="0.1" value={rating} onChange={(e) => setMovieRating(e.target.value)} />
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