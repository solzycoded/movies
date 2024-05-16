import Image from '../services/ImageService.js';
import { Buffer } from "node:buffer";


const uploadPosterToTheCloud = async (req) => {
    const b64 = Buffer.from(req.file.buffer).toString("base64");
    let dataURI = "data:" + req.file.mimetype + ";base64," + b64;
    const cldRes = await Image.upload(dataURI);

    return cldRes.url;
}

const MovieService = {
    uploadPosterToTheCloud
}

export default MovieService;