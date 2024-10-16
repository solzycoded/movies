import cloudinary from "cloudinary"

let cloud = cloudinary.v2;

cloud.config({
  cloud_name: 'ellegacy',
  api_key: '834238324726431',
  api_secret: 'xp6dEiVwgavgBgL9-LINk1RYoi0',
  secure: true,
});

const uploader = cloudinary.uploader;

async function upload(file) {
  const res = await uploader.upload(file, {
    folder: "movies",
    resource_type: "auto",
  });

  return res;
}

async function deleteMedia(publicId) {
  const res = await uploader.destroy(publicId);

  return res;
}

const Media = {
  upload,
  deleteMedia
}

export default Media;