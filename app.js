import express from "express"
import mongoose from "mongoose"
import bodyParser from "body-parser"
import cors from "cors"

import env from "./api/util/env.js";

// routes
import typeRoutes from "./api/routes/TypeRoutes.js";
import genreRoutes from "./api/routes/GenreRoutes.js";
import languageRoutes from "./api/routes/LanguageRoutes.js";
import actorRoutes from "./api/routes/ActorRoutes.js";
import movieRoutes from "./api/routes/MovieRoutes.js";
import movieLinkRoutes from "./api/routes/MovieLinkRoutes.js";
import movieTypeRoutes from "./api/routes/MovieTypeRoutes.js";
import movieActorRoutes from "./api/routes/MovieActorRoutes.js";
import movieGenreRoutes from "./api/routes/MovieGenreRoutes.js";
import searchMovieRoutes from "./api/routes/SearchMovieRoutes.js";

// INITIALIZE AND START APP INSTANCE
const app  = express();

// Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

// default insertion END (to be removed later)
const corsOptions = {
    origin: '*', 
    credentials: true,            //access-control-allow-credentials:true
    optionSuccessStatus: 200,
};
app.use(cors(corsOptions));

// Connect to MongoDB
mongoose.connect((env.database.connection_string + env.database.name))
    .then(() => {
        console.log('Connected to MongoDB');
        const PORT = process.env.PORT || 3000;
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

// movie link routes
app.use('/movie-links', movieLinkRoutes.router);

// movie type routes
app.use('/movie-types', movieTypeRoutes.router);

// movie actor routes
app.use('/movie-actors', movieActorRoutes.router);

// movie genre routes
app.use('/movie-genres', movieGenreRoutes.router);

// search movie routes
app.use('/search-movies', searchMovieRoutes.router);
