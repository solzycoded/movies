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

let schema = Model.createSchema(fields);

schema.virtual('movies', {
    ref: 'MovieType',
    localField: '_id',
    foreignField: 'type'
});

const Type = Model.schemaModel("Type", fields, schema);

export default Type;