const {PrismaClient} = require("@prisma/client")
const prisma = new PrismaClient()

async function getIngredients (req, res) {
   try {
    const allIngredients = await prisma.Ingredients.findMany()
    if(!allIngredients){
      res.status(404).json({message: "not found or failed to load"})
    }

    if(allIngredients){
      res.status(200).json({message: "retrieved succesfully", data: allIngredients})
    }
    
   } catch (error) {
    res.status(500).json({message: "server error"})
    console.log(error);
   }
}

module.exports = getIngredients