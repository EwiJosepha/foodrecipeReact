const { PrismaClient } = require("@prisma/client")
const prisma = new PrismaClient()

async function getAcategori(req, res) {
  try {
    const id = req.params.id
  
    const onecategories = await prisma.categorie.findUnique({
      where: { id: Number(id) }
    })

    if (!onecategories) {
     return  res.status(404).json({ message: "not found or failed to load" })
    }

    if (onecategories) {
     return  res.status(200).json({ message: "retrieved succesfully", data: onecategories })
    }

  } catch (error) {
    res.status(500).json({ message: "server error" })
    console.log(error);
  }
}

module.exports = getAcategori

