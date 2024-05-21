import PropTypes from "prop-types"
import MovieGridItem from "../MovieGridItem"
import { NavLink } from "react-router-dom";

const CategorySection = ({ category, currentUrl }) => {
    const movies = category.movies;

    if(movies.length > 0){
        return (
            <>
                <div className="container-fluid mb-3">
                    <h3 className="text-capitalize">
                        { category.name } <NavLink to={ `/categories/${category.name}`} className="btn btn-transparent p-0 ms-2 fs-4"><i className="bi bi-arrow-right"></i></NavLink>
                    </h3>
                    {/* list of movies */}
                    <div className="row">
                        {
                            category.movies.map((item, i) => {
                                return <MovieGridItem key={ i } movie={ item.movie } currentUrl={ currentUrl } urlPrefix={ `${category.name}/` } />
                            })
                        }
                    </div>
                </div>
            </>
        )
    }

    return;
}

CategorySection.propTypes = {
    category: PropTypes.object.isRequired,
    currentUrl: PropTypes.string
}

export default CategorySection;