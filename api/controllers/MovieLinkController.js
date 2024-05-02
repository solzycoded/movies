import MovieLink from '../models/MovieLink.js';

const createMovieLink = async (data, res) => {
    const movieLink = new MovieLink(data);

    try {
        const newMovieLink = await movieLink.save();
        res.status(201).json(newMovieLink);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

const listMovieLink = async (req, res) => {
    try {
        const movieLinks = await MovieLink.find();
        res.status(201).json({ data: movieLinks });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// export CONTROLLER FUNCTIONS
export default {
    createMovieLink,
    listMovieLink
}