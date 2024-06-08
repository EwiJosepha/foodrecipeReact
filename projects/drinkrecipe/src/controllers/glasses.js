const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();
const { Client } = require("@notionhq/client")
const {createClient} = require('@sanity/client');
const config = require("../secret")
const INTERGRATION_SECRET = config.INTERGRATION_SECRET

async function getAGlass(req, res) {
  const clientsanity  = createClient({
    projectId: 'riv3fj0u',
    dataset: 'production',
    apiVersion: '2022-03-07',
    token: INTERGRATION_SECRET,
    useCdn: true,
  }) 

//   try {
//     const { name, type } = req.body
//     const notionglass = await client.pages.create({
//       parent: { database_id: DB_SECRET },
//       properties: {
//         Name: {
//           title: [
//             {
//               text: {
//                 content: name
//               }
//             }
//           ]
//         },

//         "type": {
//           rich_text: [
//             {
//               text: {
//                 content: type
//               }
//             }
//           ]
//         }
//       }
//     })
// console.log(notionglass)
// console.log("sucess");;
//   } catch (error) {
// console.log(error);
//   }

  // try {
  //   console.log(req);
  //   const { name, type } = req.body
  //   const createglass = await prisma.glasses.create({
  //     data: {
  //       name,
  //       type
  //     }
  //   })

  //   if (createglass) {
  //     console.log("glass created successfully");
  //   } else {
  //     console.log("failled to create");
  //   }

  //   if (!createglass) {
  //     return res.status(400).json({ message: "glass already exists" });
  //   }
  //   if (createglass) {
  //     return res.status(201).json({ message: "created glass successfully" });
  //   }
  // } catch (err) {
  //   console.log("err", err);
  // }

  try {
    // Create a new document in Sanity
    const {title, description } = req.body;
    const newDocument = await clientsanity.create({
      _type:"category",
      title,
      description
    });
    res.status(200).json({ message: 'New document created', data: newDocument });
  } catch (error) {
    console.error('Error creating document in Sanity:', error);
    res.status(500).json({ message: 'Server error' });
    return []
  }
}

module.exports = getAGlass;
