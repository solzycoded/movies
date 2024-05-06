import mongoose from "mongoose";
import Model from "./model.js";

const fields = {
    movie: {
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'Movie',
        required: true,
    },
    actor: {
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'Actor',
        required: true,
    },
};

const MovieActor = Model.schemaModel("MovieActor", fields);

export default MovieActor;