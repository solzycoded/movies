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
    ref: 'MovieCategory',
    localField: '_id',
    foreignField: 'category'
});

const Category = Model.schemaModel("Category", fields, schema);

export default Category;