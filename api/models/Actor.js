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
};

let schema = Model.createSchema(fields);

schema.virtual('movies', {
    ref: 'MovieActor',
    localField: '_id',
    foreignField: 'actor'
});

const Actor = Model.schemaModel("Actor", fields, schema);

export default Actor;