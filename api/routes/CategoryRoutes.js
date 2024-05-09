import CategoryController from "../controllers/CategoryController.js";
import express from "express"

const router = express.Router();

// Define routes
router.post('/', CategoryController.createCategory);
router.get('/', CategoryController.listOfCategorys);

// export routes
let categoryRoutes = {
    router
}

export default categoryRoutes;
