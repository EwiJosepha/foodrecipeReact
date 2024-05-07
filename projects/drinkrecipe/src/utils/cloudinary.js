const cloudinary = require("cloudinary").v2

cloudinary.config({
 cloud_name:process.env.cloud_name,
 api_key:process.env.api_key,
 secret:process.env.secret,
 cloudinary_url:process.env.cloudinary_url
});
module.exports = cloudinary
