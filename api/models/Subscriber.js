import Model from "./model.js";

const fields = {
    email: { 
        type: String, 
        required: true, 
        unique: true,
        validate: {
            validator: function(value) {
                return this.constructor
                    .findOne({ name: value })
                    .then(existingUser => !existingUser);
            },
            message: 'Email already exists'
        }
    },
    subscribed: {
        type: Boolean,
        default: true,
    },
    created_at: {
        type: Date,
        default: Date.now
    }
};

const Subscriber = Model.schemaModel("Genre", fields);

export default Subscriber;