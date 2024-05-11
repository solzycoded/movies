import PropTypes from "prop-types"
import MovieGridItem from "../MovieGridItem"

const GenreSection = ({ genre }) => {
    const movies = genre.movies;

    if(movies.length > 0){
        return (
            <>
                <div className="container-fluid mb-3">
                    <h3 className="text-capitalize">
                        { genre.name } <a href={ `/genres/${genre.name}`} className="btn btn-transparent p-0 ms-2 fs-4"><i className="bi bi-arrow-right"></i></a>
                    </h3>
                    {/* list of movies */}
                    <div className="row">
                        {
                            genre.movies.map((item, i) => {
                                return <MovieGridItem key={ i } movie={ item.movie } />
                            })
                        }
                    </div>
                </div>
            </>
        )
    }

    return;
}

GenreSection.propTypes = {
    genre: PropTypes.object.isRequired
}

export default GenreSection;