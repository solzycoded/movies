import { Schema } from "mongoose";
import Model from "./model.js";

const fields = {
    movie: {
        type: Schema.Types.ObjectId,
        ref: 'Movie',
        required: true,
    },
    category: {
        type: Schema.Types.ObjectId,
        ref: 'Category',
        required: true,
    },
};

const MovieCategory = Model.schemaModel("MovieCategory", fields);

export default MovieCategory;