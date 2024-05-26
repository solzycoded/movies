import mongoose from "mongoose";
import Model from "./model.js";

const fields = {
    franchise: {
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'Franchise',
        required: true,
    },
    actor: {
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'Actor',
        required: true,
    },
};

const FranchiseActor = Model.schemaModel("FranchiseActor", fields);

export default FranchiseActor;