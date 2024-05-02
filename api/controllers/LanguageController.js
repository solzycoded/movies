import Language from '../models/Language.js';
import data from '../util/data.js';

const createLanguage = async (req, res) => {
    const { name } = req.body;

    const language = new Language({ name });

    try {
        const newLanguage = await language.save();
        res.status(201).json(newLanguage);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

/* create default list of languages */
const createDefaultLanguages = async () => {
    Language.insertMany(data.languages)
        .then((docs) => {
            console.log('Multiple languages inserted');
        })
        .catch((err) => {
            // console.error('Error inserting records: ', err);
        });
}

createDefaultLanguages();

// export CONTROLLER FUNCTIONS
export default {
    createLanguage
}