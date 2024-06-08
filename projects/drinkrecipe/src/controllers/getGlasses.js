const {PrismaClient} = require("@prisma/client")
const prisma = new PrismaClient()
const {createClient} = require('@sanity/client');
const config = require("../secret")
const INTERGRATION_SECRET = config.INTERGRATION_SECRET
const DB_SECRET = config.DB_SECRET




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
  // const client  = createClient({
  //   projectId: 'riv3fj0u',
  //   dataset: 'production',
  //   apiVersion: '2022-03-07',
  //   token: INTERGRATION_SECRET,
  //   useCdn: true,
  // }) 
  
  

  //   try {

  //     // Fetch all documents from the 'production' dataset
  //     const documents = await client.fetch(`*[_type == "post"]`);
  //     console.log(documents);
  //   } catch (error) {
  //     console.error('Error fetching data from Sanity:', error);
  //   }

  

}

module.exports = getGlasses