import MovieActor from '../models/MovieActor.js';

const createMovieActor = async (data, res) => {
    const movieActor = new MovieActor(data);

    try {
        const newMovieActor = await movieActor.save();
        res.status(201).json(newMovieActor);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

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
    createMovieActor,
    listMovieActor
}