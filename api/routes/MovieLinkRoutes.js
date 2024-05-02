import MovieLinkController from "../controllers/MovieLinkController.js";
import express from "express"

const router = express.Router();

// Define routes
router.get('/', MovieLinkController.listMovieLink);
router.post('/', MovieLinkController.createMovieLink);

// export routes
let movieLinkRoutes = {
    router
}

export default movieLinkRoutes;