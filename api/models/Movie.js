import { Decimal128 } from "mongodb";
import { Schema } from "mongoose";
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
    about: {
        type: String, 
        required: false,
    },
    rating: {
        type: Number, 
        default: 1
    },
    runtime: {
        type: Number, 
        required: true
    },
    language:  {
        type: Schema.Types.ObjectId, 
        ref: 'Language'
    },
    trailer: {
        type: String,
        required: true,
    },
    poster: {
        type: String,
        required: false,
    },
    release_year: {
        type: Number,
        required: false,
    },
    created_at: {
        type: Date,
        default: Date.now
    },
};


let schema = Model.createSchema(fields);

// CREATE VIRTUAL FIELDS
const setVirtualField = (fieldName, ref, localField, foreignField) => {
    schema.virtual(fieldName, {
        ref,
        localField,
        foreignField
    });
}

setVirtualField('genres', 'MovieGenre', '_id', 'movie');
setVirtualField('actors', 'MovieActor', '_id', 'movie');
setVirtualField('categorys', 'MovieCategory', '_id', 'movie');
setVirtualField('links', 'MovieLink', '_id', 'movie');

// create schema model
const Movie = Model.schemaModel("Movie", fields, schema);

export default Movie;