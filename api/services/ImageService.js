import cloudinary from "cloudinary"

let cloud = cloudinary.v2;

cloud.config({
  cloud_name: 'ellegacy',
  api_key: '834238324726431',
  api_secret: 'xp6dEiVwgavgBgL9-LINk1RYoi0',
  secure: true,
});

async function upload(file) {
  const res = await cloudinary.uploader.upload(file, {
    resource_type: "auto",
  });

  return res;
}

const Image = {
  upload
}

export default Image;