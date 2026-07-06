require('dotenv').config();
const cloudinary = require('cloudinary').v2;

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
  secure: true
});

try {
  const timestamp = Math.round(new Date().getTime() / 1000);
  const signature = cloudinary.utils.api_sign_request(
    { timestamp: timestamp, folder: 'hostelandino' },
    process.env.CLOUDINARY_API_SECRET
  );
  console.log("Signature generated successfully:", signature);
} catch(e) {
  console.error("Error generating signature:", e);
}
