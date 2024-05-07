const express = require("express")

const getAcategori = require("../controllers/get-one-category")
const getOneCategory = express.Router()

getOneCategory.get("/categories/:id", getAcategori)

module.exports = getOneCategory