import MovieActorController from "../controllers/MovieActorController.js"
import express from "express"

const router = express.Router();

// Define routes
router.get('/', MovieActorController.listMovieActor);
router.post('/', MovieActorController.createMovieActor);

// export routes
let movieActorRoutes = {
    router
}

export default movieActorRoutes;