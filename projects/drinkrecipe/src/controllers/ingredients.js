const {PrismaClient}= require("@prisma/client")
const prisma = new PrismaClient()
async function ingredientsFn (req,res) {
  try {

    const{name,description}=req.body
    const createdIngredient = await prisma.ingredients.create({
      data:{
        name,
        description
      }
    })
    
    if(!createdIngredient){
      return res.status(401).json("failed to create ingredients")
    }

    if(createdIngredient){
      return res.status(201).json("created ingredients succesfully")
    }

    console.log("created successfully");
  } catch (error) {
    console.log(error);
  }

}

module.exports = ingredientsFn