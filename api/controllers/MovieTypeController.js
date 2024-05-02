import MovieType from '../models/MovieType.js';

const createMovieType = async (data, res) => {
    const movieType = new MovieType(data);

    try {
        const newMovieType = await movieType.save();
        res.status(201).json(newMovieType);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

const listMovieType = async (req, res) => {
    try {
        const movieTypes = await MovieType.find();
        res.status(201).json({ data: movieTypes });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// export CONTROLLER FUNCTIONS
export default {
    createMovieType,
    listMovieType
}