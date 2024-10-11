import express from "express"
import bodyParser from "body-parser"
import cors from "cors"

// routes
import categoryRoutes from "./api/routes/CategoryRoutes.js";
import genreRoutes from "./api/routes/GenreRoutes.js";
import languageRoutes from "./api/routes/LanguageRoutes.js";
import actorRoutes from "./api/routes/ActorRoutes.js";
import movieRoutes from "./api/routes/MovieRoutes.js";
import movieLinkRoutes from "./api/routes/MovieLinkRoutes.js";
import movieCategoryRoutes from "./api/routes/MovieCategoryRoutes.js";
import movieActorRoutes from "./api/routes/MovieActorRoutes.js";
import movieGenreRoutes from "./api/routes/MovieGenreRoutes.js";
import searchMovieRoutes from "./api/routes/SearchMovieRoutes.js";
import subscriberRoutes from "./api/routes/SubscriberRoutes.js";
import tvShowRoutes from "./api/routes/TvShowRoutes.js";
import tvShowLinkRoutes from "./api/routes/TvShowLinkRoutes.js";
import franchiseRoutes from "./api/routes/FranchiseRoutes.js";
import franchiseLinkRoutes from "./api/routes/FranchiseLinkRoutes.js";
import franchiseActorRoutes from "./api/routes/FranchiseActorRoutes.js";

import Database from "./api/database.js";


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
Database.connect(app);

/* ROUTES */
// category routes
app.use('/categories', categoryRoutes.router);

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

// movie category routes
app.use('/movie-categories', movieCategoryRoutes.router);

// movie actor routes 
app.use('/movie-actors', movieActorRoutes.router);

// movie genre routes
app.use('/movie-genres', movieGenreRoutes.router);

// search movie routes
app.use('/search-movies', searchMovieRoutes.router);

// subscriber routes
app.use('/subscribers', subscriberRoutes.router);

// tvshow routes
app.use('/tv-shows', tvShowRoutes.router);

// tvshow link routes
app.use('/tv-show-links', tvShowLinkRoutes.router);

// franchise routes
app.use('/franchises', franchiseRoutes.router);

// franchise link routes
app.use('/franchise-links', franchiseLinkRoutes.router);

// franchise actor routes
app.use('/franchise-actors', franchiseActorRoutes.router);