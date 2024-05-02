import mongoose from "mongoose";

export default class Model {
    static createSchema(fields){
        const modelSchema = new mongoose.Schema(fields);

        return modelSchema;
    }

    static schemaModel(modelName, fields){
        const schema = Model.createSchema(fields);

        return mongoose.model(modelName, schema);
    }
}