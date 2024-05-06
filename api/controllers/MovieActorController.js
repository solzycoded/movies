import MovieActor from '../models/MovieActor.js';

const listMovieActor = async (req, res) => {
    try {
        const movieActors = await MovieActor.find();
        res.status(201).json({ data: movieActors });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// export CONTROLLER FUNCTIONS
export default {
    listMovieActor,
}