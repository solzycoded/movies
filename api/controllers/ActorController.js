import Actor from '../models/Actor.js';
import data from '../util/data.js';

const createActor = async (req, res) => {
    const { name } = req.body;

    const actor = new Actor({ name });

    try {
        const newActor = await actor.save();
        res.status(201).json(newActor);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

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
    createActor
}