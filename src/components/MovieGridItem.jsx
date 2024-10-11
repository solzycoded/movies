import { useNavigate } from 'react-router-dom';
import PropTypes from "prop-types";

import MovieRating from './MovieRating';
import MovieGenreItem from "./MovieGenreItem";

import App from "../common/util";

import '../assets/css/MovieGridItem.css';

function MovieGridItem({ movie, currentUrl, urlPrefix }) {
    const navigate = useNavigate();

    if (movie === undefined || movie == null) {
        return;
    }

    const openMovieDetails = (e) => {
        e.preventDefault();

        let urlPref = !urlPrefix ? "" : urlPrefix;

        navigate(`${App.getMainUrl(currentUrl) + urlPref + movie.name}`);
    };

    const genres = movie.genres==null ? [] : movie.genres;

    return (
        <div className="col-12 col-sm-6 col-md-4 col-lg-3 cursor-pointer mb-4" onClick={openMovieDetails} id={'movie-' + movie.id}>
            <div className="card position-relative shadow-sm bg-body rounded border-0">
                <img src={(movie.poster ? movie.poster.url : "")} className="card-img-top movie-grid-item-poster" alt="movie poster" />
                <div className="card-body">
                    <h5 className="card-title text-capitalize fs-6">{movie.name}</h5>
                    <p className="card-text">
                        {
                            genres.map((item, i) => {
                                return <MovieGenreItem genre={item.genre.name} key={i} />;
                            })
                        }
                    </p>
                    <MovieRating rating={movie.rating} />
                </div>
            </div>
        </div>
    );
}

MovieGridItem.propTypes = {
    movie: PropTypes.object.isRequired,
    currentUrl: PropTypes.string,
    urlPrefix: PropTypes.string
}

export default MovieGridItem;