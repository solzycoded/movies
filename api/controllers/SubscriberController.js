import Subscriber from '../models/Subscriber.js';

const createSubscriber = async (req, res) => {
    const { email } = req.body;

    if(!email){
        return res.status(500).json({ success: false, message: "Email is missing!" });
    }

    const subscriber = new Subscriber({ email });

    try {
        const newSubscriber = await subscriber.save();
        res.status(201).json({ success: true, newSubscriber });
    } catch (error) {
        res.status(400).json({ message: "Email already exists" });
    }
};

const listOfSubscribers = async (req, res) => {
    try {
        const subscribers = await Subscriber.find();
        res.status(201).json({ success: true, data: subscribers});
    } catch (error) {
        res.status(400).json({ message: error });
    }
}

const findSubscriber = async (req, res) => {
    const { email } = req.body;

    if(!email){
        return res.status(500).json({ success: false, message: "Email is missing!" });
    }

    try {
        const subscriber = await Subscriber.findOne({ email });

        const success    = subscriber==null;
        res.status(201).json({ success, data: subscriber});
    } catch (error) {
        res.status(400).json({ message: error });
    }
}

// export CONTROLLER FUNCTIONS
export default {
    createSubscriber,
    listOfSubscribers,
    findSubscriber,
}