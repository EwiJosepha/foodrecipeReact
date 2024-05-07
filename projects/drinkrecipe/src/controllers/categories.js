const { PrismaClient } = require("@prisma/client")
const prisma = new PrismaClient()

async function categories(req, res) {
  try {
    console.log(req);
    const { name, description } = req.body
    const createCategory = await prisma.categorie.create({
      data: {
        name,
        description
      }
    })

    if (createCategory) {
      console.log("category created successfully");
    } else {
      console.log("failled to create");
    }

    if(req.body === 'undefined'){
      return res.status(400).json({ message: "Email already exists" });
    }

    if (!createCategory) {
      return res.status(400).json({ message: "Email already exists" });
    }

    if (res.status === 500) {
      res.send("server error")
    }

    if (createCategory) {
      return res.status(201).json({ message: "created category successfully" });
    }
  } catch (err) {
    console.log("err", err);
  }


}

module.exports = categories