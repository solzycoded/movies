import Actor from '../models/Actor.js';
import data from '../util/data.js';

const createActor = async (req, res) => {
    const { name } = req.body;

    if(!name){
        return res.status(500).json({ success: false, message: "Name is missing!" });
    }

    const actor = new Actor({ name });

    try {
        const newActor = await actor.save();
        res.status(201).json({ success: true, newActor });
    } catch (error) {
        res.status(400).json({ message: error });
    }
};

const listOfActors = async (req, res) => {
    try {
        const actors = await Actor.find();

        const success = actors > 0;
        res.status(201).json({ success, data: actors});
    } catch (error) {
        res.status(400).json({ message: error });
    }
}

/* create default list of actors */
const createDefaultActors = async () => {
    Actor.insertMany(data.actors)
        .then((docs) => {
            console.log('Multiple actors inserted');
        })
        .catch((err) => {
            // console.error('Error inserting records: ', err);
        });
}

createDefaultActors();

// export CONTROLLER FUNCTIONS
export default {
    createActor,
    listOfActors,
}