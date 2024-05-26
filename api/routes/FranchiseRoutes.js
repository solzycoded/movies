import FranchiseController from "../controllers/FranchiseController.js"
import express from "express"

const router = express.Router();

// Define routes
router.post('/', FranchiseController.createFranchise);
router.get('/', FranchiseController.listOfFranchises);

// export routes
let franchiseRoutes = {
    router
}

export default franchiseRoutes;