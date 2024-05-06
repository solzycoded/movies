import LanguageController from "../controllers/LanguageController.js";
import express from "express"

const router = express.Router();

// Define routes
router.post('/', LanguageController.createLanguage);
router.get('/', LanguageController.listLanguages);

// export routes
let languageRoutes = {
    router
}

export default languageRoutes;
