import Image from '../services/ImageService.js';
import Movie from '../models/Movie.js';

import { Buffer } from "node:buffer";


const uploadPosterToTheCloud = async (req) => {
    if(req.file==null){
        return null;
    }

    const b64    = Buffer.from(req.file.buffer).toString("base64");
    let dataURI  = "data:" + req.file.mimetype + ";base64," + b64;
    const cldRes = await Image.upload(dataURI);

    return {public_id: cldRes.public_id, url: cldRes.url};
}

const deletePosterFromTheCloud = async (movieId) => {
    const publicId = await getPosterPublicId(movieId);

    return await Image.deleteImage(publicId);
}

const getPosterPublicId = async (movieId) => {
    try {
        const movie = await Movie.findById(movieId).exec()

        return movie ? movie.poster.public_id : null;
    } catch (error) {
        console.log(error);
        return null;
    }
}

const MovieService = {
    uploadPosterToTheCloud,
    deletePosterFromTheCloud,
    getPosterPublicId,
}

export default MovieService;