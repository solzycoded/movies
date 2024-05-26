import Model from "./model.js";
import { Schema } from "mongoose";

const fields = {
    season: {
        type: Number, 
        required: true
    },
    about: {
        type: String,
    },
    trailer: {
        type: String,
    },
    episode: {
        type: Number,
        required: true
    },
    created_at: {
        type: Date,
        default: Date.now
    },
    movie: {
        type: Schema.Types.ObjectId, 
        ref: 'Movie',
        required: true,
    },
};

let schema = Model.createSchema(fields);

// schema.virtual('movies', {
//     ref: 'MovieActor',
//     localField: '_id',
//     foreignField: 'actor'
// });

const Actor = Model.schemaModel("Actor", fields, schema);

export default Actor;