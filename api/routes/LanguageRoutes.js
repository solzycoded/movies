import LanguageController from "../controllers/LanguageController.js";
import express from "express"

const router = express.Router();

// Define routes
router.post('/', LanguageController.createLanguage);

// export routes
let languageRoutes = {
    router
}

export default languageRoutes;
