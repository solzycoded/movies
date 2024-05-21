import PropTypes from "prop-types"
import MovieGridItem from "../MovieGridItem"
import { NavLink } from "react-router-dom";

const GenreSection = ({ genre, currentUrl }) => {
    const movies = genre.movies;

    if(movies.length > 0){
        return (
            <>
                <div className="container-fluid mb-3">
                    <h3 className="text-capitalize">
                        { genre.name } <NavLink to={ `/genres/${genre.name}`} className="btn btn-transparent p-0 ms-2 fs-4"><i className="bi bi-arrow-right"></i></NavLink>
                    </h3>
                    {/* list of movies */}
                    <div className="row">
                        {
                            genre.movies.map((item, i) => {
                                return <MovieGridItem key={ i } movie={ item.movie } currentUrl={ currentUrl } urlPrefix={ `${genre.name}/` } />
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
    genre: PropTypes.object.isRequired,
    currentUrl: PropTypes.string
}

export default GenreSection;