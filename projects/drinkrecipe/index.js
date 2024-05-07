const express = require("express")
// const  PORT = require("./src/secret")
const cors = require('cors');
const rootrouter = require("./src/routers")
const PORT = require("./src/secret")
const app = express()
app.use(express.json());
//auth routes
app.use(cors());
app.use("/api", rootrouter)
//post routes
app.use("/post", rootrouter)
// app.use("/post", rootrouter)
//get routes
app.use("/get",rootrouter )
//update routes
app.use("/put", rootrouter)


app.listen(PORT, () => {
  console.log("app listening on port 3000");
})

