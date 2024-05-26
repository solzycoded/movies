import Model from "./model.js";
import { Schema } from "mongoose";

const fields = {
    title: {
        type: String, 
        required: true
    },
    about: {
        type: String,
        required: true
    },
    trailer: {
        type: String,
    },
    release_year: {
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

const setVirtualField = (fieldName, ref, localField, foreignField) => {
    schema.virtual(fieldName, {
        ref,
        localField,
        foreignField
    });
}

setVirtualField('links', 'FranchiseLink', '_id', 'franchise');
setVirtualField('actors', 'FranchiseActor', '_id', 'actor');

const Franchise = Model.schemaModel("Franchise", fields, schema);

export default Franchise;