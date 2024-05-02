import MovieGenre from '../models/MovieGenre.js';

const createMovieGenre = async (data, res) => {
    const movieGenre = new MovieGenre(data);

    try {
        const newMovieGenre = await movieGenre.save();
        res.status(201).json(newMovieGenre);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

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
    createMovieGenre,
    listMovieGenre
}