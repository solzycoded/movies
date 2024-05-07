import Movie from '../models/Movie.js';

const listMovie = async (req, res) => {
    const { search } = req.params;
    const regexMatch = new RegExp(search, 'i');

    try {
        const movies = await Movie.find({ name: regexMatch }, 'name poster rating -_id')
            .exec();

        const success = movies.length > 0;

        res.status(201).json({ success, data: movies });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// export CONTROLLER FUNCTIONS
export default {
    listMovie
}