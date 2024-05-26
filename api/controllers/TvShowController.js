import TvShow from "../models/TvShow.js";

const createTvShow = async (req, res) => {
    const { name } = req.body;

    if(!name){
        return res.status(500).json({ success: false, message: "Name is missing!" });
    }

    const tvShow = new TvShow({ name });

    try {
        const newTvShow = await tvShow.save();
        res.status(201).json({ success: true, newTvShow });
    } catch (error) {
        res.status(400).json({ message: error });
    }
};

const listOfTvShows = async (req, res) => {
    try {
        const tvShows = await TvShow.find();

        const success = tvShows > 0;
        res.status(201).json({ success, data: tvShows});
    } catch (error) {
        res.status(400).json({ message: error });
    }
}

// export CONTROLLER FUNCTIONS
export default {
    createTvShow,
    listOfTvShows,
}