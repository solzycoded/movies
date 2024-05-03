import PropTypes from "prop-types"
import MovieGridItem from "./MovieGridItem";

function MovieGrid({ movies }){
    return (
        <>
            <div className="container-fluid mt-3 mb-3">
                <div className="row">
                    {
                        movies.map((movie, i) => {
                            return <MovieGridItem movie={ movie } key={ i } />
                        })
                    }
                </div>
            </div>
        </>
    )
}

MovieGrid.propTypes = {
    movies: PropTypes.array.isRequired
}

export default MovieGrid;