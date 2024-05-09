import mongoose from "mongoose";
import Model from "./model.js";

const fields = {
    movie: {
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'Movie',
        required: true,
    },
    type: {
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'Category',
        required: true,
    },
};

const MovieCategory = Model.schemaModel("MovieCategory", fields);

export default MovieCategory;