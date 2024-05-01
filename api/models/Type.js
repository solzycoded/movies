import mongoose from "mongoose";

const schema = new mongoose.Schema({
    name: { type: String, required: true },
});

const Type = mongoose.model('Type', schema);

export default Type;