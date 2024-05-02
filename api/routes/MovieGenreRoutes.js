import MovieGenreController from "../controllers/MovieGenreController.js"
import express from "express"

const router = express.Router();

// Define routes
router.get('/', MovieGenreController.listMovieGenre);
router.post('/', MovieGenreController.createMovieGenre);

// export routes
let movieGenreRoutes = {
    router
}

export default movieGenreRoutes;