import MovieGenre from '../models/MovieGenre.js';

const createMovieGenre = async (movie, genres) => {
    try {
        if(genres.length > 0){
            const data = createMovieGenreData(movie, genres.split(","));

            insertManyMovieGenre(data);
        }

    } catch (error) {
        return;
    }
};

const insertManyMovieGenre = (data) => {
    MovieGenre.insertMany(data)
        .then((docs) => {
            console.log('Insertion successful!', docs);
        })
        .catch((err) => {
            console.error('Error inserting records: ', err);
        });
}

const updateMovieGenre = async (movie, genres) => {
    try {
        if(!genres){
            return;
        }

        await removeInvalidMovieGenres(movie);

        const data = createMovieGenreData(movie, genres.split(","));
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
        const criteria = newRecords.map(record => ({ movie: record.movie, genre: record.genre }));

        // Find existing records that match the criteria
        const existingRecords = await MovieGenre.find({ $or: criteria });

        // Filter out the new records that already exist
        const existingValues  = existingRecords.map(record => `${record.movie}-${record.genre}`);
        const recordsToInsert = newRecords.filter(record => !existingValues.includes(`${record.movie}-${record.genre}`));

        // Insert the new records that do not exist
        if (recordsToInsert.length > 0) {
            insertManyMovieGenre(recordsToInsert);
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

const removeInvalidMovieGenres = async (movie) => {
    try {
        // Find and delete MovieGenre documents not in the valid pairs
        const result = await MovieGenre.deleteMany({ movie });

        console.log(`Deleted ${result.deletedCount} invalid MovieGenre documents`);
    } catch (err) {
        console.error(err);
    }
};

const createMovieGenreData = (movie, genres) => {
    let movieGenres = [];

    genres.forEach((genre) => {
        movieGenres.push({movie, genre});
    });

    return movieGenres;
}

// export SERVICE FUNCTIONS
export default {
    createMovieGenre,
    updateMovieGenre,
}