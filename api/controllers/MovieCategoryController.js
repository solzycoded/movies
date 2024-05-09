import MovieCategory from '../models/MovieCategory.js';

const createMovieCategory = async (data, res) => {
    const movieCategory = new MovieCategory(data);

    try {
        const newMovieCategory = await movieCategory.save();
        res.status(201).json(newMovieCategory);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

const listMovieCategory = async (req, res) => {
    try {
        const movieCategorys = await MovieCategory.find();
        res.status(201).json({ data: movieCategorys });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// export CONTROLLER FUNCTIONS
export default {
    createMovieCategory,
    listMovieCategory
}