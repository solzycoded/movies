import mongoose from "mongoose";
import env from "./util/env.js";

const connect = (app) => {
    mongoose.connect((env.database.connection_string + env.database.name))
        .then(() => {
            console.log('Connected to MongoDB');
            const PORT = env.PORT || 3000;

            // Start the server
            app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
        })
        .catch(err => console.error('Error connecting to MongoDB:', err));
}

const Database = {
    connect,
}

export default Database;