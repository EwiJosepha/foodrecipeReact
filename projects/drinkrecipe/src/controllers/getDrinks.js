const { PrismaClient } = require("@prisma/client")

const prisma = new PrismaClient()
async function getDrinks(req, res) {

  try {
    const drinkss = await prisma.drinks.findMany({
      include: {
        categorie: {
          select: {
            name: true
          }
        },
        createdBy: {
          select: {
            id: true
          }
        },
        ingredients: {
          select: {
            id: true,
            name: true,
            description:true
          }
        },
        glass: {
          select: {
            name: true
          }
        }
      }

    })

    if (drinkss.length > 0) {
      res.status(200).json({ message: "all Drinks", data: drinkss })
    }


    if (!drinkss) {
      res.status(404).json({ message: "not found" })
    }

  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
    console.log(error);
  } finally {
    await prisma.$disconnect();
  }

}

// getDrinks().then((drinkss) => {
//   console.log(drinkss);
// }).catch((err) => {
//   console.log(err);
// })


module.exports = getDrinks