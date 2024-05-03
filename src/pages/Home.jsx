import MovieGridItem from "../components/MovieGridItem";
import util from "../common/util"

function Home(){
    let movie = util.data.movies[0];

    return (
        <>
            <MovieGridItem movie={ movie } />
        </>
    )
}

export default Home;