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
            // message: 'Name already exists'
        }
    },
};

const Genre = Model.schemaModel("Genre", fields);

export default Genre;