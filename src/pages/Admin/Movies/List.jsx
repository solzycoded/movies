import { NavLink } from "react-router-dom";
import MoviesList from "../../../components/Admin/Movies/List";

function Movies(){
    return (
        <>
            <section className="container-fluid">
                <div className="mb-3">
                    <h3>
                        <span>List of Movies</span> 
                        <NavLink to={`/dashboard/movies/create`} className={"fw-bold text-small ms-2 app-color"}>
                            <i className="bi bi-plus"></i>
                        </NavLink>
                    </h3>
                </div>
                <MoviesList />
            </section>
        </>
    )
}

export default Movies;