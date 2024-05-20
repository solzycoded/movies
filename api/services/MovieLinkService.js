import MovieLink from '../models/MovieLink.js';

const createMovieLink = async (movie, links) => {
    try {
        if(links.length > 0){
            const data = createMovieLinkData(movie, links.split(","));

            insertManyMovieLink(data);
        }

    } catch (error) {
        return;
    }
};

const insertManyMovieLink = (data) => {
    MovieLink.insertMany(data)
        .then((docs) => {
            console.log('Insertion successful!', docs);
        })
        .catch((err) => {
            console.error('Error inserting records: ', err);
        });
}

const updateMovieLink = async (movie, links) => {
    try {
        if(!links){
            return;
        }

        const data = createMovieLinkData(movie, links.split(","));

        await removeInvalidMovieLinks(data, movie);
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
        const criteria = newRecords.map(record => ({ movie: record.movie, link: record.link }));

        // Find existing records that match the criteria
        const existingRecords = await MovieLink.find({ $or: criteria });

        // Filter out the new records that already exist
        const existingValues  = existingRecords.map(record => `${record.movie}-${record.link}`);
        const recordsToInsert = newRecords.filter(record => !existingValues.includes(`${record.movie}-${record.link}`));

        // Insert the new records that do not exist
        if (recordsToInsert.length > 0) {
            insertManyMovieLink(recordsToInsert);
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

const removeInvalidMovieLinks = async (validPairs, movie) => {
    try {
        // Find and delete MovieLink documents not in the valid pairs
        const result = await MovieLink.deleteMany(deletionFilter(validPairs, movie));

        console.log(`Deleted ${result.deletedCount} invalid MovieLink documents`);
    } catch (err) {
        console.error(err);
    }
};

const deletionFilter = (validPairs, movie) => {
    if(validPairs.length > 0) {
        return {
            $nor: validPairs.map(pair => ({
                movie: pair.movie,
                link: pair.link,
            }))
        };
    }

    return { movie };
}

const createMovieLinkData = (movie, links) => {
    let movieLinks = [];

    links.forEach((link) => {
        movieLinks.push({movie, link});
    });

    return movieLinks;
}

// export SERVICE FUNCTIONS
export default {
    createMovieLink,
    updateMovieLink,
}