import Category from '../models/Category.js';
import data from '../util/data.js';

const createCategory = async (req, res) => {
    const { name } = req.body;

    if(!name){
        return res.status(500).json({ success: false, message: "Name is missing!" });
    }

    const category = new Category({ name });

    try {
        const newCategory = await category.save();
        res.status(201).json({ success: true, newCategory });
    } catch (error) {
        res.status(400).json({ message: error });
    }
};

const listOfCategorys = async (req, res) => {
    try {
        const categorys = await Category.find();
        res.status(201).json({ success: true, data: categorys});
    } catch (error) {
        res.status(400).json({ message: error });
    }
}

/* create default list of categorys */
const createDefaultCategorys = async () => {
    Category.insertMany(data.categorys)
        .then((docs) => {
            console.log('Multiple categorys inserted');
        })
        .catch((err) => {
            // console.error('Error inserting records: ', err);
        });
}

createDefaultCategorys();

// export CONTROLLER FUNCTIONS
export default {
    createCategory,
    listOfCategorys,
}