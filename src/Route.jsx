import { Routes, Route } from "react-router-dom";

// user pages
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import NoPage from "./pages/NoPage";

import Categories from "./pages/Categories";
import Category from "./pages/Category";

import Genres from "./pages/Genres";
import Genre from "./pages/Genre";

import MovieInfo from "./pages/MovieInfo";

import "./assets/css/app.css"

// admin pages
import DashboardLayout from "./pages/Admin/Layout";
import Dashboard from "./pages/Admin/Dashboard";
import Movies from "./pages/Admin/Movies/List";
import CreateAMovie from "./pages/Admin/Movies/Create";
import EditAMovie from "./pages/Admin/Movies/Edit";

const PageRoutes = () => {
    return (
        <Routes>
            {/* user */}
            <Route path="/" element={<Layout />}>
                <Route index element={<Home />} />

                {/* categories */}
                <Route path="categories" element={<Categories />} />
                <Route path="categories/:category" element={<Category />} />

                {/* genres */}
                <Route path="genres" element={<Genres />} />
                <Route path="genres/:genre" element={<Genre />} />

                {/* movie details */}
                <Route path=":movie_name" element={<MovieInfo />} />
                <Route path="genres/:genre-name/:movie_name" element={<MovieInfo />} />
                <Route path="categories/:category-name/:movie_name" element={<MovieInfo />} />

                {/* no page */}
                <Route path="*" element={<NoPage />} />
            </Route>

            {/* admin */}
            <Route path="/dashboard" element={<DashboardLayout />}>
                <Route index element={<Dashboard />} />

                <Route path="movies" element={<Movies />} />
                <Route path="movies/create" element={<CreateAMovie />} />
                <Route path="movies/edit/:id" element={<EditAMovie />} />

                {/* no page */}
                <Route path="*" element={<NoPage />} />
            </Route>
      </Routes>
    );
}

export default PageRoutes;