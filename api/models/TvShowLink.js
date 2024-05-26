import { Schema } from "mongoose";
import Model from "./model.js";

const fields = {
    tv_show: {
        type: Schema.Types.ObjectId, 
        ref: 'TvShow'
    },
    link: {
        type: String,
        required: true,
    }
};

const TvShowLink = Model.schemaModel("TvShowLink", fields);

export default TvShowLink;