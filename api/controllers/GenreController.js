import Genre from '../models/Genre.js';
import data from '../util/data.js';

const createGenre = async (req, res) => {
    const { name } = req.body;

    if(!name){
        return res.status(404).json({ success: false, message: "Name is missing!" });
    }

    const genre = new Genre({ name });

    try {
        const newGenre = await genre.save();
        res.status(201).json({ success: true, newGenre });
    } catch (error) {
        res.status(400).json({ message: error });
    }
};

const listOfGenres = async (req, res) => {
    try {
        const genres = await Genre.find();
        res.status(201).json({ success: true, data: genres});
    } catch (error) {
        res.status(400).json({ message: error });
    }
}

// export CONTROLLER FUNCTIONS
export default {
    createGenre,
    listOfGenres,
}

/* create default list of genres */
const createDefaultGenres = async () => {
    Genre.insertMany(data.genres)
        .then((docs) => {
            console.log('Multiple genres inserted');
        })
        .catch((err) => {
            // console.error('Error inserting records: ', err);
        });
}

createDefaultGenres();