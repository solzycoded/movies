import MovieActor from '../models/MovieActor.js';

const createMovieActor = async (movie, actors) => {
    try {
        if(actors.length > 0){
            const data = createMovieActorData(movie, actors.split(","));

            insertManyMovieActor(data);
        }

    } catch (error) {
        return;
    }
};

const insertManyMovieActor = (data) => {
    MovieActor.insertMany(data)
        .then((docs) => {
            console.log('Insertion successful!', docs);
        })
        .catch((err) => {
            console.error('Error inserting records: ', err);
        });
}

const updateMovieActor = async (movie, actors) => {
    try {
        if(!actors){
            return;
        }

        const data = createMovieActorData(movie, actors.split(","));

        await removeInvalidMovieActors(data, movie);
        await insertNewRecordsIfNotExist(data);
    } catch (error) {
        console.log(error);
    }
};

const insertNewRecordsIfNotExist = async (newRecords) => {
    try {
        if(newRecords.length == 0){
            return;
        }

        // Extract the values you want to check for uniqueness
        const criteria = newRecords.map(record => ({ movie: record.movie, actor: record.actor }));

        // Find existing records that match the criteria
        const existingRecords = await MovieActor.find({ $or: criteria });

        // Filter out the new records that already exist
        const existingValues  = existingRecords.map(record => `${record.movie}-${record.actor}`);
        const recordsToInsert = newRecords.filter(record => !existingValues.includes(`${record.movie}-${record.actor}`));

        // Insert the new records that do not exist
        if (recordsToInsert.length > 0) {
            insertManyMovieActor(recordsToInsert);
        }
        else {
            console.log('No new records to insert.');
        }

        return;
    } catch (error) {
        console.error('Error inserting records:', error);
        throw error;
    }
};

const removeInvalidMovieActors = async (validPairs, movie) => {
    try {
        // Find and delete MovieActor documents not in the valid pairs
        const result = await MovieActor.deleteMany(deletionFilter(validPairs, movie));

        console.log(`Deleted ${result.deletedCount} invalid MovieActor documents`);
    } catch (err) {
        console.error(err);
    }
};

const deletionFilter = (validPairs, movie) => {
    if(validPairs.length > 0) {
        return {
            $nor: validPairs.map(pair => ({
                movie: pair.movie,
                actor: pair.actor,
            }))
        };
    }

    return { movie };
}

const createMovieActorData = (movie, actors) => {
    let movieActors = [];

    actors.forEach((actor) => {
        movieActors.push({movie, actor});
    });

    return movieActors;
}

// export SERVICE FUNCTIONS
export default {
    createMovieActor,
    updateMovieActor,
}