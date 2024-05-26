import FranchiseLink from '../models/FranchiseLink.js';

const createFranchiseLink = async (data, res) => {
    const franchiseLink = new FranchiseLink(data);

    try {
        const newFranchiseLink = await franchiseLink.save();
        res.status(201).json(newFranchiseLink);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

const listFranchiseLink = async (req, res) => {
    try {
        const franchiseLinks = await FranchiseLink.find();
        res.status(201).json({ data: franchiseLinks });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// export CONTROLLER FUNCTIONS
export default {
    createFranchiseLink,
    listFranchiseLink
}