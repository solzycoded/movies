import MovieGenre from '../models/MovieGenre.js';

const listMovieGenre = async (req, res) => {
    try {
        const movieGenres = await MovieGenre.find();
        res.status(201).json({ data: movieGenres });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// export CONTROLLER FUNCTIONS
export default {
    listMovieGenre,
}