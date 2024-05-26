import FranchiseLinkController from "../controllers/FranchiseLinkController.js";
import express from "express"

const router = express.Router();

// Define routes
router.get('/', FranchiseLinkController.listFranchiseLink);
router.post('/', FranchiseLinkController.createFranchiseLink);

// export routes
let franchiseLinkRoutes = {
    router
}

export default franchiseLinkRoutes;