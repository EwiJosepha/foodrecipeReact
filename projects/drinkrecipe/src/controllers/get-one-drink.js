const { PrismaClient } = require("@prisma/client")
const prisma = new PrismaClient()

async function getOneDrink(req, res) {
  try {
    const id = req.params.id
  
    const onedrink = await prisma.drinks.findUnique({
      where: { id: Number(id) }
    })

    if (!onedrink) {
     return  res.status(404).json({ message: "not found or failed to load" })
    }

    if (onedrink) {
     return  res.status(200).json({ message: "retrieved succesfully", data: onedrink })
    }

  } catch (error) {
    res.status(500).json({ message: "server error" })
    console.log(error);
  }
}

module.exports = getOneDrink

