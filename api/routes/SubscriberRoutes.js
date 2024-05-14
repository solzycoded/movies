import SubscriberController from "../controllers/SubscriberController.js";
import express from "express"

const router = express.Router();

// Define routes
router.post('/', SubscriberController.createSubscriber);
router.get('/', SubscriberController.listOfSubscribers);
router.get('/:email', SubscriberController.findSubscriber);

// export routes
let subscriberRoutes = {
    router
}

export default subscriberRoutes;