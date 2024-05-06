import Model from "./model.js";
import { Schema } from "mongoose";

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
            // message: 'Name already exists'
        }
    }
};

const Language = Model.schemaModel("Language", fields);

export default Language;