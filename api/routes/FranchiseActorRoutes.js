import FranchiseActorController from "../controllers/FranchiseActorController.js"
import express from "express"

const router = express.Router();

// Define routes
router.get('/', FranchiseActorController.listFranchiseActor);

// export routes
let franchiseActorRoutes = {
    router
}

export default franchiseActorRoutes;