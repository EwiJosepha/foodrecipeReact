const { PrismaClient } = require("@prisma/client")
const prisma = new PrismaClient()

async function getIngredients(req, res) {
  try {
    const id = req.params.id
  
    const oneIngredient = await prisma.ingredients.findUnique({
      where: { id: Number(id) }
    })

    if (!oneIngredient) {
     return  res.status(404).json({ message: "not found or failed to load" })
    }

    if (oneIngredient) {
     return  res.status(200).json({ message: "retrieved succesfully", data: oneIngredient })
    }

  } catch (error) {
    res.status(500).json({ message: "server error" })
    console.log(error);
  }
}

module.exports = getIngredients

