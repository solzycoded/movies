import PropTypes from "prop-types"
import MovieGridItem from "../MovieGridItem"

const CategorySection = ({ category }) => {
    const movies = category.movies;

    if(movies.length > 0){
        return (
            <>
                <div className="container-fluid mb-3">
                    <h3 className="text-capitalize">
                        { category.name } <a href={ `/categories/${category.name}`} className="btn btn-transparent p-0 ms-2 fs-4"><i className="bi bi-arrow-right"></i></a>
                    </h3>
                    {/* list of movies */}
                    <div className="row">
                        {
                            category.movies.map((item, i) => {
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

CategorySection.propTypes = {
    category: PropTypes.object.isRequired
}

export default CategorySection;