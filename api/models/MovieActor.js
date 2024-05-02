import mongoose from "mongoose";
import Model from "./model.js";

const fields = {
    movie_id: {
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'Movie',
        required: true,
    },
    actor_id: {
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'Actor',
        required: true,
    },
};

const MovieActor = Model.schemaModel("MovieActor", fields);

export default MovieActor;