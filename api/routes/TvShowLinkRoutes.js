import TvShowLinkController from "../controllers/TvShowLinkController.js";
import express from "express"

const router = express.Router();

// Define routes
router.get('/', TvShowLinkController.listTvShowLink);
router.post('/', TvShowLinkController.createTvShowLink);

// export routes
let tvShowLinkRoutes = {
    router
}

export default tvShowLinkRoutes;