import Model from "./model.js";

const fields = {
    email: { 
        type: String, 
        required: true, 
        unique: true,
        validate: {
            validator: function(value) {
                return this.constructor
                    .findOne({ email: value })
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

const Subscriber = Model.schemaModel("Subscriber", fields);

export default Subscriber;