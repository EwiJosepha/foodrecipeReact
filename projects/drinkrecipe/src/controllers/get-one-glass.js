const { PrismaClient } = require("@prisma/client")
const prisma = new PrismaClient()

async function getAGlass(req, res) {
  try {
    const id = req.params.id
  
    const oneGlasses = await prisma.glasses.findUnique({
      where: { id: Number(id) }
    })

    if (!oneGlasses) {
     return  res.status(404).json({ message: "not found or failed to load" })
    }

    if (oneGlasses) {
     return  res.status(200).json({ message: "retrieved succesfully", data: oneGlasses })
    }

  } catch (error) {
    res.status(500).json({ message: "server error" })
    console.log(error);
  }
}

module.exports = getAGlass

