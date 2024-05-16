import MovieActor from '../models/MovieActor.js';

const createMovieActor = async (movie, actors) => {
    try {
        if(actors.length > 0){
            const data = createMovieActorData(movie, actors.split(","));

            MovieActor.insertMany(data)
                .then((docs) => {
                    console.log('Insertion successful!', docs);
                })
                .catch((err) => {
                    console.error('Error inserting records: ', err);
                });
        }
    } catch (error) {
        return;
    }
};

const createMovieActorData = (movie, actors) => {
    let movieActors = [];

    actors.forEach((actor) => {
        movieActors.push({movie, actor});
    });

    return movieActors;
}

// export SERVICE FUNCTIONS
export default {
    createMovieActor
}