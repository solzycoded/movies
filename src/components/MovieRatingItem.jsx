import PropTypes from "prop-types"

function MovieRatingItem({ rating }) {
    let icon = 'bi bi-star';

    if (rating - 1 >= 0) {
        icon += '-fill';
    } else if (rating > 0) {
        icon += '-half';
    }

    return (
        <div>
            <i className={icon}></i>
        </div>
    );
}

MovieRatingItem.propTypes = {
    rating: PropTypes.number.isRequired
}

export default MovieRatingItem;