import mongoose from "mongoose";

export default class Model {
    static createSchema(fields){
        const modelSchema = new mongoose.Schema(fields, 
            {
                toJSON: { virtuals: true }, // So `res.json()` and other `JSON.stringify()` functions include virtuals
                // toObject: { virtuals: true } // So `console.log()` and other functions that use `toObject()` include virtuals
            }
        );

        return modelSchema;
    }

    static schemaModel(modelName, fields, schema = null){
        schema = schema==null ? Model.createSchema(fields) : schema;

        return mongoose.model(modelName, schema);
    }
}