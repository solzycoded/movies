import SearchMovieController from "../controllers/SearchMovieController.js";
import express from "express"

const router = express.Router();

// Define routes
router.get('/:search', SearchMovieController.listMovie);

// export routes
let searchMovieRoutes = {
    router
}

export default searchMovieRoutes;