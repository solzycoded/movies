import { useState, useEffect } from "react";
import PropTypes from "prop-types"
import MovieGridItem from "./MovieGridItem";

function MovieGrid({ movies }){
    const [currentUrl, setCurrentUrl] = useState('');

    useEffect(() => {
        setCurrentUrl(window.location.href);
        // console.log(currentUrl);
    }, []); // Empty dependency array ensures it runs only once on mount

    return (
        <>
            <div className="container-fluid mt-3 mb-3">
                <div className="row">
                    {
                        movies.map((movie, i) => {
                            return <MovieGridItem movie={ movie } key={ i } currentUrl={ currentUrl } />
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