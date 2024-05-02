import GenreController from "../controllers/GenreController.js";
import express from "express"

const router = express.Router();

// Define routes
router.post('/', GenreController.createGenre);

// export routes
let typeRoutes = {
    router
}

export default typeRoutes;
