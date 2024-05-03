import MovieGrid from "../components/MovieGrid";
import util from "../common/util"

function Home(){
    let movies = util.data.movies;

    return (
        <>
            <MovieGrid movies={ movies } />
        </>
    )
}

export default Home;