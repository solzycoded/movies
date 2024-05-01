import TypeController from "../controllers/TypeController.js";
import express from "express"

const router = express.Router();

// Define routes
router.post('/', TypeController.createType);

// export routes
let typeRoutes = {
    router
}

export default typeRoutes;
