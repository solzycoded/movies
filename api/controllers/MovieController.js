import Movie from '../models/Movie.js';

import MovieActorService from '../services/MovieActorService.js';
import MovieGenreService from '../services/MovieGenreService.js';
import MovieCategoryService from '../services/MovieCategoryService.js';
import MovieLinkService from '../services/MovieLinkService.js';
import MovieService from '../services/MovieService.js';

import App from '../util/app.js'; 


const createMovie = async (req, res) => {
    const { name, about, rating, runtime, language, trailer, releaseYear, actors, genres, categories, links } = req.body;

    if(!name || !runtime || !language || (!links && links.length==0)) {
        return res.status(500).json({ success: false, message: "Some fields are missing" });
    }

    try {
        const poster = await MovieService.uploadPosterToTheCloud(req);

        const movie    = new Movie({ name, about, rating, runtime, language, trailer, release_year: releaseYear, poster });
        const newMovie = await movie.save(); // create movie

        let movieId = newMovie._id;
        MovieActorService.createMovieActor(movieId, actors); // store actors of movie
        MovieGenreService.createMovieGenre(movieId, genres); // store genres of movie
        MovieCategoryService.createMovieCategory(movieId, categories); // store categories of movie
        MovieLinkService.createMovieLink(movieId, links); // store download links of movie

        res.status(201).json({ success: true, data: newMovie });
    } catch (error) {
        res.status(202).json({ success: false, message: error.message });
    }
};

const listMovie = async (req, res) => {
    try {
        const movies = await Movie.find()
            .populate(App.createPopulateVal("genres", 'genre -_id', "genre", "name -_id")) // genres
            .populate(App.createPopulateVal("actors", 'actor -_id', "actor", "name -_id")) // actors
            .populate(App.createPopulateVal("categories", 'category -_id', "category", "name -_id")) // categories
            .populate("links", "name") // links
            .populate('language', 'name -_id') // Populate the 'language' field in the Movie document
            .exec();

        const success = movies.length > 0;

        res.status(201).json({ success, data: movies });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

const listMovieByCategory = async (req, res) => {
    const { name } = req.params;

    if(!name){
        return res.status(500).json({ success: false, message: "Name is missing!" });
    }

    try {
        const movies = await Movie.find()
            .populate(App.createPopulateVal("genres", 'genre -_id', "genre", "name -_id")) // genres
            .populate(App.createPopulateVal("categories", 'category -_id', "category", "name -_id")) // categories

        // Filter the populated documents based on a condition
        const filteredMovies = filterMovies(movies, name);

        const success = movies.length > 0;

        res.status(201).json({ success: success, data: filteredMovies });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

const listMovieByGenre = async (req, res) => {
    const { name } = req.params;

    if(!name){
        return res.status(500).json({ success: false, message: "Name is missing!" });
    }

    try {
        const movies = await Movie.find()
            .populate(App.createPopulateVal("genres", 'genre -_id', "genre", "name -_id")) // genres

        // Filter the populated documents based on a condition
        const filteredMovies = filterMovies(movies, name, "genre");

        const success        = movies.length > 0;
        res.status(201).json({ success: success, data: filteredMovies });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

const filterMovies = (movies, name, type = "category") => {
    const filteredMovies = movies.filter((doc) => {
        let isAMatch = false;

        if(type=="category"){
            doc.categories.forEach((el) => {
                if(el.category.name===name){
                    isAMatch = true;
                    return;
                }
            });
        }
        else {
            doc.genres.forEach((el) => {
                if(el.genre.name===name){
                    isAMatch = true;
                    return;
                }
            });
        }

        return isAMatch;
    });

    return filteredMovies;
}

const getMovie = async (req, res) => {
    const { name } = req.params;

    if(!name){
        return res.status(500).json({ success: false, message: "Name is missing!" });
    }

    try {
        const movie = await Movie.findOne({ name })
            .populate(App.createPopulateVal("genres", 'genre -_id', "genre", "name -_id")) // genres
            .populate(App.createPopulateVal("actors", 'actor -_id', "actor", "name -_id")) // actors
            .populate(App.createPopulateVal("categories", 'category -_id', "category", "name -_id")) // categories
            .populate("links", "link -_id") // links
            .populate('language', 'name -_id') // Populate the 'language' field in the Movie document
            .exec()

        const success = movie!=null;
        res.status(201).json({ success: success, data: movie });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// export CONTROLLER FUNCTIONS
export default {
    createMovie,
    listMovie,
    listMovieByCategory,
    listMovieByGenre,
    getMovie
}