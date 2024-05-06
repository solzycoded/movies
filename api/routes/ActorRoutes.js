import ActorController from "../controllers/ActorController.js";
import express from "express"

const router = express.Router();

// Define routes
router.post('/', ActorController.createActor);
router.get('/', ActorController.listOfActors);

// export routes
let actorRoutes = {
    router
}

export default actorRoutes;