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

schema.virtual('links', {
    ref: 'TvShowLink',
    localField: '_id',
    foreignField: 'tv_show'
});

const TvShow = Model.schemaModel("TvShow", fields, schema);

export default TvShow;