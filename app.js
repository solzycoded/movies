import express from "express"
import mongoose from "mongoose"
import bodyParser from "body-parser"

import env from "./api/util/env.js";

// routes
import typeRoutes from "./api/routes/TypeRoutes.js";
import genreRoutes from "./api/routes/GenreRoutes.js";
import languageRoutes from "./api/routes/LanguageRoutes.js";
import actorRoutes from "./api/routes/ActorRoutes.js";
import movieRoutes from "./api/routes/MovieRoutes.js";

// INITIALIZE AND START APP INSTANCE
const app  = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(bodyParser.json());

// Connect to MongoDB
mongoose.connect((env.database.connection_string + env.database.name))
    .then(() => {
        console.log('Connected to MongoDB');
        // Start the server
        app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
    })
    .catch(err => console.error('Error connecting to MongoDB:', err));


/* ROUTES */
// type routes
app.use('/types', typeRoutes.router);

// genre routes
app.use('/genres', genreRoutes.router);

// language routes
app.use('/languages', languageRoutes.router);

// actor routes
app.use('/actors', actorRoutes.router);

// movie routes
app.use('/movies', movieRoutes.router);
