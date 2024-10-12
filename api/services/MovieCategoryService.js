import MovieCategory from '../models/MovieCategory.js';

const createMovieCategory = async (movie, categories) => {
    try {
        if(categories.length > 0){
            const data = createMovieCategoryData(movie, categories.split(","));

            insertManyMovieCategory(data);
        }

    } catch (error) {
        return;
    }
};

const insertManyMovieCategory = (data) => {
    MovieCategory.insertMany(data)
        .then((docs) => {
            console.log('Insertion successful!', docs);
        })
        .catch((err) => {
            console.error('Error inserting records: ', err);
        });
}

const updateMovieCategory = async (movie, categories) => {
    try {
        if(!categories){
            return;
        }

        await removeInvalidMovieCategories(movie);

        const data = createMovieCategoryData(movie, categories.split(","));
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
        const criteria = newRecords.map(record => ({ movie: record.movie, category: record.category }));

        // Find existing records that match the criteria
        const existingRecords = await MovieCategory.find({ $or: criteria });

        // Filter out the new records that already exist
        const existingValues  = existingRecords.map(record => `${record.movie}-${record.category}`);
        const recordsToInsert = newRecords.filter(record => !existingValues.includes(`${record.movie}-${record.category}`));

        // Insert the new records that do not exist
        if (recordsToInsert.length > 0) {
            insertManyMovieCategory(recordsToInsert);
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

const removeInvalidMovieCategories = async (movie) => {
    try {
        // Find and delete MovieCategory documents not in the valid pairs
        const result = await MovieCategory.deleteMany({ movie });

        console.log(`Deleted ${result.deletedCount} invalid MovieCategory documents`);
    } catch (err) {
        console.error(err);
    }
};

const createMovieCategoryData = (movie, categories) => {
    let movieCategories = [];

    categories.forEach((category) => {
        movieCategories.push({movie, category});
    });

    return movieCategories;
}

// export SERVICE FUNCTIONS
export default {
    createMovieCategory,
    updateMovieCategory,
}