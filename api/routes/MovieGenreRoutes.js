import MovieGenreController from "../controllers/MovieGenreController.js"
import express from "express"

const router = express.Router();

// Define routes
router.get('/', MovieGenreController.listMovieGenre);

// export routes
let movieGenreRoutes = {
    router
}

export default movieGenreRoutes;