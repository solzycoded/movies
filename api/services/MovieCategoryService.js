import MovieCategory from '../models/MovieCategory.js';

const createMovieCategory = async (movie, categorys) => {
    try {
        if(categorys.length > 0){
            const data = createMovieCategoryData(movie, categorys);

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

const createMovieCategoryData = (movie, categorys) => {
    let movieCategorys = [];

    categorys.forEach((category) => {
        movieCategorys.push({movie, category});
    });

    return movieCategorys;
}

// export SERVICE FUNCTIONS
export default {
    createMovieCategory
}