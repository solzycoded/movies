import mongoose from "mongoose";
import Model from "./model.js";

const fields = {
    movie_id:  {
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'Movie',
        required: true,
    },
    genre_id:  {
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'Genre',
        required: true,
    },
};

const MovieGenre = Model.schemaModel("MovieGenre", fields);

export default MovieGenre;