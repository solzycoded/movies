import MovieTypeController from "../controllers/MovieTypeController.js";
import express from "express"

const router = express.Router();

// Define routes
router.get('/', MovieTypeController.listMovieType);
router.post('/', MovieTypeController.createMovieType);

// export routes
let movieTypeRoutes = {
    router
}

export default movieTypeRoutes;