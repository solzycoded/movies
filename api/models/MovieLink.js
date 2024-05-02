import mongoose from "mongoose";
import Model from "./model.js";

const fields = {
    movie_id: {
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'Movie',
        required: true,
    },
    link: {
        type: URL,
        required: true,
    }
};

const MovieLink = Model.schemaModel("MovieLink", fields);

export default MovieLink;