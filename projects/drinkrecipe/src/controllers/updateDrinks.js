const { PrismaClient } = require("@prisma/client")
const prisma = new PrismaClient()

async function updateDrinks(req, res) {
  try {
    const id = req.params.id
    console.log(id);

    const data = {...req.body}
    const updateDrinks = await prisma.drinks.update({
      where: { id: Number(id) },
      data: data
    })

    if (updateDrinks) {
      res.status(201).json({ message: "updated succesfully", data: data })
    }

    if (!updateDrinks) {
      res.status(400).json({ message: "failed succesfully" })
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Internal server error" });

  }finally {
    await prisma.$disconnect();
  }

}

module.exports = updateDrinks