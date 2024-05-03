import PropTypes from "prop-types"
import MovieRatingItem from "./MovieRatingItem"

function MovieRating({ rating }) {
    function rateMovie(rating) {
        let ratingIcons = [];

        for (let i = 0; i < 5; i++) {
            ratingIcons.push(<MovieRatingItem key={i} rating={rating--} />);
        }

        return ratingIcons;
    }

    return (
        <>
            <div className="d-flex justify-content-start" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-title={rating}>
                <div className="d-flex">
                    {
                        rateMovie(rating).map(showRating => {
                            return showRating;
                        })
                    }
                </div>

                <div>
                    <p className="card-text ps-2 text-secondary">Rating</p>
                </div>
            </div>
        </>
    );
}

MovieRating.propTypes = {
    rating: PropTypes.number.isRequired
}

export default MovieRating;