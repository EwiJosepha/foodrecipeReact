const { PrismaClient } = require("@prisma/client")
const prisma = new PrismaClient()

async function updateCategories(req, res) {
  try {
    const id = req.params.id
    console.log(id);

    const data = {...req.body}
    const updateCategories = await prisma.categorie.update({
      where: { id: Number(id) },
      data: data
    })

    if (updateCategories) {
      res.status(201).json({ message: "updated succesfully", data: data })
    }

    if (!updateCategories) {
      res.status(400).json({ message: "failed succesfully" })
    }
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });

  }finally {
    await prisma.$disconnect();
  }

}

module.exports = updateCategories