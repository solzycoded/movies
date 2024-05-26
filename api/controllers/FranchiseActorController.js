import FranchiseActor from '../models/FranchiseActor.js';

const listFranchiseActor = async (req, res) => {
    try {
        const franchiseActors = await FranchiseActor.find();
        res.status(201).json({ data: franchiseActors });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// export CONTROLLER FUNCTIONS
export default {
    listFranchiseActor,
}