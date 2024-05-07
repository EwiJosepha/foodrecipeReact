const { PrismaClient } = require("@prisma/client")
const prisma = new PrismaClient()

async function updateGlasses(req, res) {
  try {
    const id = req.params.id
    console.log(id);

    const data = {...req.body}
    const updateGlasses = await prisma.glasses.update({
      where: { id: Number(id) },
      data: data
    })

    if (updateGlasses) {
      res.status(201).json({ message: "updated succesfully", data: data })
    }

    if (!updateGlasses) {
      res.status(400).json({ message: "failed succesfully" })
    }
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });

  }finally {
    await prisma.$disconnect();
  }

}

module.exports = updateGlasses