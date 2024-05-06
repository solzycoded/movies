import MovieType from '../models/MovieType.js';

const createMovieType = async (movie, types) => {
    try {
        if(types.length > 0){
            const data = createMovieTypeData(movie, types);

            MovieType.insertMany(data)
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

const createMovieTypeData = (movie, types) => {
    let movieTypes = [];

    types.forEach((type) => {
        movieTypes.push({movie, type});
    });

    return movieTypes;
}

// export SERVICE FUNCTIONS
export default {
    createMovieType
}