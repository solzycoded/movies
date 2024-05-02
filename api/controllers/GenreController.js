import Genre from '../models/Genre.js';
import data from '../util/data.js';

const createGenre = async (req, res) => {
    const { name } = req.body;

    const type = new Genre({ name });

    try {
        const newGenre = await type.save();
        res.status(201).json(newGenre);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

/* create default list of types */
const createDefaultGenres = async () => {
    Genre.insertMany(data.genres)
        .then((docs) => {
            console.log('Multiple types inserted');
        })
        .catch((err) => {
            // console.error('Error inserting records: ', err);
        });
}

createDefaultGenres();

// export CONTROLLER FUNCTIONS
export default {
    createGenre
}