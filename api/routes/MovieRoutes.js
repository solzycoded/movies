import MovieController from "../controllers/MovieController.js";
import express from "express";
import multer from "multer";

const router = express.Router();

// Define routes
router.get('/', MovieController.listMovie);
router.get('/by-category/:name', MovieController.listMovieByCategory);
router.get('/by-genre/:name', MovieController.listMovieByGenre);
router.get('/:name', MovieController.getMovie);
router.get('/by-id/:id', MovieController.findMovieById);

// define routes to create a new movie with an image
const storage = multer.memoryStorage();
const upload = multer({ storage });
const myUploadMiddleware = upload.single("poster");

router.post('/', myUploadMiddleware, MovieController.createMovie);

// export routes
let movieRoutes = {
    router
}

export default movieRoutes;