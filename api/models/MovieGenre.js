import { Schema } from "mongoose";
import Model from "./model.js";

const fields = {
    movie: {
        type: Schema.Types.ObjectId, 
        ref: 'Movie',
        required: true,
    },
    genre: {
        type: Schema.Types.ObjectId, 
        ref: 'Genre',
        required: true,
    },
};

const MovieGenre = Model.schemaModel("MovieGenre", fields);

export default MovieGenre;