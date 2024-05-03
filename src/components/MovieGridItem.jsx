import PropTypes from "prop-types"
import { useNavigate } from 'react-router-dom';

// import { MovieRating } from './MovieRating';
import MovieGenreItem from "./MovieGenreItem";
// import { splitString } from '../common/util';

import '../assets/css/MovieGridItem.css';

function MovieGridItem({ movie }) {
    if (movie === undefined || movie == null) {
        return;
    }

    const navigate = useNavigate();
    // let genres = splitString(movie.genre);

    const openMovieDetails = (e) => {
        // e.preventDefault();
        // navigate(`/movie/${movie.id}`);
    };

    return (
        <div className="col cursor-pointer" onClick={openMovieDetails} id={'movie-' + movie.id}>
            <div className="card position-relative">
                <img src={movie.poster} className="card-img-top movie-grid-item-poster" alt="movie poster" />
                <div className="card-body">
                    <h5 className="card-title">{movie.name}</h5>
                    <p className="card-text">
                        {
                            movie.genres.map((genre, i) => {
                                return <MovieGenreItem genre={genre.name} key={i} />;
                            })
                        }
                    </p>
                    5.6
                    {/* <MovieRating rating={movie.rating} /> */}
                </div>
            </div>
        </div>
    );
}

MovieGridItem.propTypes = {
    movie: PropTypes.object.isRequired
}

export default MovieGridItem;