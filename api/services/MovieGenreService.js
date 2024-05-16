import MovieGenre from '../models/MovieGenre.js';

const createMovieGenre = async (movie, genres) => {
    try {
        if(genres.length > 0){
            const data = createMovieGenreData(movie, genres.split(","));

            MovieGenre.insertMany(data)
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

const createMovieGenreData = (movie, genres) => {
    let movieGenres = [];

    genres.forEach((genre) => {
        movieGenres.push({movie, genre});
    });

    return movieGenres;
}

// export SERVICE FUNCTIONS
export default {
    createMovieGenre
}