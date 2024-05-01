import Type from '../models/Type.js';

const createType = async (req, res) => {
    const { name } = req.body;

    const type = new Type({name});

    try {
        const newType = await type.save();
        res.status(201).json(newType);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

export default {
    createType
}