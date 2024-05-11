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

const listOfCategories = async (req, res) => {
    try {
        const categories = await Category.find()
            .populate({
                path: "movies",
                populate: {
                    path: "movie",
                    select: "name poster rating"
                },
                limit: 4
            })
            .exec();
        res.status(201).json({ success: true, data: categories});
    } catch (error) {
        res.status(400).json({ message: error });
    }
}

const getCategory = async (req, res) => {
    const { name } = req.params;

    if(!name){
        return res.status(500).json({ success: false, message: "Name is missing!" });
    }

    try {
        const category = await Category.findOne({ name: name })
            .populate({
                path: "movies",
                populate: {
                    path: "movie",
                    select: "name poster rating",
                    sort: "name"
                }
            })
            .exec();
        res.status(201).json({ success: true, data: category});
    } catch (error) {
        res.status(400).json({ message: error });
    }
}

/* create default list of categories */
const createDefaultCategories = async () => {
    Category.insertMany(data.categories)
        .then((docs) => {
            console.log('Multiple categories inserted');
        })
        .catch((err) => {
            // console.error('Error inserting records: ', err);
        });
}

createDefaultCategories();

// export CONTROLLER FUNCTIONS
export default {
    createCategory,
    listOfCategories,
    getCategory
}