import mongoose from "mongoose";
import Model from "./model.js";

const fields = {
    movie: {
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'Franchise'
    },
    link: {
        type: String,
        required: true,
    }
};

const FranchiseLink = Model.schemaModel("FranchiseLink", fields);

export default FranchiseLink;