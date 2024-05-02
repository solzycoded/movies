import MovieController from "../controllers/MovieController.js";
import express from "express"

const router = express.Router();

// Define routes
router.get('/', MovieController.listMovie);
router.post('/', MovieController.createMovie);

// export routes
let movieRoutes = {
    router
}

export default movieRoutes;