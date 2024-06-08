const dotenv = require("dotenv")

dotenv.config({path:".env"})

const config = {
  PORT: process.env.PORT,
  INTERGRATION_SECRET: process.env.INTERGRATION_SECRET,
  // DB_SECRET: process.env.DB_SECRET
}

module.exports = config