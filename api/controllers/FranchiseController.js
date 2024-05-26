import Franchise from "../models/Franchise.js";

const createFranchise = async (req, res) => {
    const { name } = req.body;

    if(!name){
        return res.status(500).json({ success: false, message: "Name is missing!" });
    }

    const franchise = new Franchise({ name });

    try {
        const newFranchise = await franchise.save();
        res.status(201).json({ success: true, newFranchise });
    } catch (error) {
        res.status(400).json({ message: error });
    }
};

const listOfFranchises = async (req, res) => {
    try {
        const franchises = await Franchise.find();

        const success = franchises > 0;
        res.status(201).json({ success, data: franchises});
    } catch (error) {
        res.status(400).json({ message: error });
    }
}

// export CONTROLLER FUNCTIONS
export default {
    createFranchise,
    listOfFranchises,
}