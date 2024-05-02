import { Decimal128 } from "mongodb";
import mongoose from "mongoose";
import Model from "./model.js";

const fields = {
    name: {
        type: String, 
        required: true, 
        unique: true,
        validate: {
            validator: function(value) {
                return this.constructor.findOne({ name: value })
                    .then(existingUser => !existingUser);
            },
            message: 'Name already exists'
        }
    },
    rating: {
        type: Decimal128, 
        required: true, 
        default: 1
    },
    runtime: {
        type: Number, 
        required: true
    },
    language_id:  {
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'Language',
        required: true,
    },
    trailer:  {
        type: String,
        required: true,
    },
    poster:  {
        type: String,
        required: false,
    },
    release_year:  {
        type: Number,
        required: false,
    },
    created_at:  {
        type: Date,
        default: Date.now
    },
};

const Movie = Model.schemaModel("Movie", fields);

export default Movie;