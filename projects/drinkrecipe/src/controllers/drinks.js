const { PrismaClient } = require("@prisma/client")
const prisma = new PrismaClient()
const cloudinary = require("../utils/cloudinary")


async function drinks(req, res) {

  try {

    const { name, description, imageUrl, recipe, ingredientsId, categorieId, glassId, createdById } = req.body

    const result = await cloudinary.uploader.upload(imageUrl, {
      folder:" newDrink",

    })

    const createDrinks = await prisma.drinks.create({
      data: {
        name,
        description,
        imageUrl: {
          public_Id:result.public_id,
          url:result.secure_url
        },
        recipe,
        ingredientsId,
        categorieId,
        glassId,
        createdById
      }
    })

    if (!createDrinks) {
      return res.status(401).json("failed to create drinks")
    }

    if (createDrinks) {
      return res.status(201).json("created successfully")
    }

    if (res.status === 500) {
      res.send("server error")
    }
    console.log("drinks", createDrinks);

  } catch (error) {
    console.log(error);
  }
}

module.exports = drinks