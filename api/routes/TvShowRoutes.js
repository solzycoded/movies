import TvShowController from "../controllers/TvShowController.js";
import express from "express"

const router = express.Router();

// Define routes
router.post('/', TvShowController.createTvShow);
router.get('/', TvShowController.listOfTvShows);

// export routes
let tvShowRoutes = {
    router
}

export default tvShowRoutes;