import mongoose from "mongoose";
import Model from "./model.js";

const fields = {
    movie_id: {
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'Movie',
        required: true,
    },
    type_id: {
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'Type',
        required: true,
    },
};

const MovieType = Model.schemaModel("MovieType", fields);

export default MovieType;