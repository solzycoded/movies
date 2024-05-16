import MovieLink from '../models/MovieLink.js';

const createMovieLink = async (movie, links) => {
    try {
        if(links.length > 0){
            const data = createMovieLinkData(movie, links.split(","));

            MovieLink.insertMany(data)
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

const createMovieLinkData = (movie, links) => {
    let movieLinks = [];

    links.forEach((link) => {
        movieLinks.push({movie, link});
    });

    return movieLinks;
}

// export SERVICE FUNCTIONS
export default {
    createMovieLink
}