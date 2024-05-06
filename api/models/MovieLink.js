import mongoose from "mongoose";
import Model from "./model.js";

const fields = {
    movie: {
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'Movie'
    },
    link: {
        type: String,
        required: true,
    }
};

const MovieLink = Model.schemaModel("MovieLink", fields);

export default MovieLink;