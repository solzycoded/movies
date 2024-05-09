import MovieCategoryController from "../controllers/MovieCategoryController.js";
import express from "express"

const router = express.Router();

// Define routes
router.get('/', MovieCategoryController.listMovieCategory);
router.post('/', MovieCategoryController.createMovieCategory);

// export routes
let movieCategoryRoutes = {
    router
}

export default movieCategoryRoutes;