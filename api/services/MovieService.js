import Media from './MediaService.js';
import Movie from '../models/Movie.js';

import { Buffer } from "node:buffer";


const uploadMediaToTheCloud = async (mediaObj) => {
    if(mediaObj==null){
        return null;
    }

    mediaObj     = mediaObj[0];
    const b64    = Buffer.from(mediaObj.buffer).toString("base64");
    let dataURI  = "data:" + mediaObj.mimetype + ";base64," + b64;
    const cldRes = await Media.upload(dataURI);

    return {public_id: cldRes.public_id, url: cldRes.url};
}

const deleteMediaFromTheCloud = async (movieId) => {
    const publicId = await getMediaPublicId(movieId);

    return await Media.deleteMedia(publicId);
}

const getMediaPublicId = async (movieId) => {
    try {
        const movie = await Movie.findById(movieId).exec();

        return movie ? movie.poster.public_id : null;
    } catch (error) {
        console.log(error);
        return null;
    }
}

const MovieService = {
    uploadMediaToTheCloud,
    deleteMediaFromTheCloud
}

export default MovieService;