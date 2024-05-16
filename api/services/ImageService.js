const cloudinary = require('cloudinary');

cloudinary.v2.config({
  cloud_name: 'ellegacy',
  api_key: '834238324726431',
  api_secret: 'xp6dEiVwgavgBgL9-LINk1RYoi0',
  secure: true,
});

// By default, the API endpoints use the following format:

// https://api.cloudinary.com/v1_1/:cloud_name/:action

// e.g. POST https://api.cloudinary.com/v1_1/demo/image/upload