const { PrismaClient } = require("@prisma/client")

const prisma = new PrismaClient()

async function getCategories(req, res) {
  // const filteredValue = req.params.filteredValue
  try {
   const allCategories = await  prisma.categorie.findMany()
    

    if (!allCategories) {
      res.status(404).json({ message: "categories not found" })
    }

    if (allCategories) {
      res.status(200).json({ message: "All categories retieved successfully", data: allCategories })
    }else if (filteredValue){
      res.status(200).json({message: "filtered caategories", data:filteredValue})

      console.log(filteredValue);
    }

  } catch (error) {
    res.status(500).json({ message: "internal server error" })
    throw new Error("failled to load")
  }
}

module.exports = getCategories 