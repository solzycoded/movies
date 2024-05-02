import Movie from '../models/Movie.js';

const createMovie = async (req, res) => {
    const { name, rating, runtime, languageId, trailer, releaseYear } = req.body;

    const movie = new Movie({ name, rating, runtime, language_id: languageId, trailer, release_year: releaseYear });

    try {
        const newMovie = await movie.save();
        res.status(201).json(newMovie);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

const listMovie = async (req, res) => {
    try {
        const movies = await Movie.find();
        res.status(201).json({ data: movies });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// export CONTROLLER FUNCTIONS
export default {
    createMovie,
    listMovie
}