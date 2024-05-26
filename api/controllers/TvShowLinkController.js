import TvShowLink from '../models/TvShowLink.js';

const createTvShowLink = async (data, res) => {
    const tvShowLink = new TvShowLink(data);

    try {
        const newTvShowLink = await tvShowLink.save();
        res.status(201).json(newTvShowLink);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

const listTvShowLink = async (req, res) => {
    try {
        const tvShowLinks = await TvShowLink.find();
        res.status(201).json({ data: tvShowLinks });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// export CONTROLLER FUNCTIONS
export default {
    createTvShowLink,
    listTvShowLink
}