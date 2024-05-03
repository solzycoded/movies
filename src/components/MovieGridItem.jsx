import PropTypes from "prop-types";
import { useNavigate } from 'react-router-dom';

import MovieRating from './MovieRating';
import MovieGenreItem from "./MovieGenreItem";

import '../assets/css/MovieGridItem.css';

function MovieGridItem({ movie }) {
    if (movie === undefined || movie == null) {
        return;
    }

    const navigate = useNavigate();

    const openMovieDetails = (e) => {
        // e.preventDefault();
        // navigate(`/movie/${movie.id}`);
    };

    return (
        <div className="col-12 col-sm-6 col-md-4 col-lg-3 cursor-pointer mb-4" onClick={openMovieDetails} id={'movie-' + movie.id}>
            <div className="card position-relative shadow-sm bg-body rounded border-0">
                <img src={movie.poster} className="card-img-top movie-grid-item-poster" alt="movie poster" />
                <div className="card-body">
                    <h5 className="card-title text-capitalize">{movie.name}</h5>
                    <p className="card-text">
                        {
                            movie.genres.map((genre, i) => {
                                return <MovieGenreItem genre={genre.name} key={i} />;
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
    movie: PropTypes.object.isRequired
}

export default MovieGridItem;