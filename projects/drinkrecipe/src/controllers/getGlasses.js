const {PrismaClient} = require("@prisma/client")
const prisma = new PrismaClient()

async function getGlasses (req, res) {
   try {
    const allGlasses = await prisma.glasses.findMany()
    if(!allGlasses){
      res.status(404).json({message: "not found or failed to load"})
    }

    if(allGlasses){
      res.status(200).json({message: "retrieved succesfully", data: allGlasses})
    }
    
   } catch (error) {
    res.status(500).json({message: "server error"})
    console.log(error);
   }
}

module.exports = getGlasses