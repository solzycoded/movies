import MovieCategory from '../models/MovieCategory.js';

const createMovieCategory = async (movie, categories) => {
    try {
        if(categories.length > 0){
            const data = createMovieCategoryData(movie, categories.split(","));

            MovieCategory.insertMany(data)
                .then((docs) => {
                    console.log('Insertion successful!', docs);
                })
                .catch((err) => {
                    // console.error('Error inserting records: ', err);
                });
        }
    } catch (error) {
        return;
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
    createMovieCategory
}