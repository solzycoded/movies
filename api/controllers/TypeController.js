import Type from '../models/Type.js';
import data from '../util/data.js';

const createType = async (req, res) => {
    const { name } = req.body;

    if(!name){
        return res.status(500).json({ success: false, message: "Name is missing!" });
    }

    const type = new Type({ name });

    try {
        const newType = await type.save();
        res.status(201).json({ success: true, newType });
    } catch (error) {
        res.status(400).json({ message: error });
    }
};

const listOfTypes = async (req, res) => {
    try {
        const types = await Type.find();
        res.status(201).json({ success: true, data: types});
    } catch (error) {
        res.status(400).json({ message: error });
    }
}

/* create default list of types */
const createDefaultTypes = async () => {
    Type.insertMany(data.types)
        .then((docs) => {
            console.log('Multiple types inserted');
        })
        .catch((err) => {
            // console.error('Error inserting records: ', err);
        });
}

createDefaultTypes();

// export CONTROLLER FUNCTIONS
export default {
    createType,
    listOfTypes,
}