import PropTypes from "prop-types";

function MovieGenreItem({ genre }) {
    return (
        <span className="text-decoration-underline link-offset-2 me-2">{genre}</span>
    )
}

MovieGenreItem.propTypes = {
    genre: PropTypes.string.isRequired
}

export default MovieGenreItem;