const expres = require("express")
const authRouter = require("./login")
const signUpRoute = require("./signup")
const catRoute = require("./categories")
const glassesRouter = require("./glasses")
const drinkRoute = require("./drinks")
const getDrinksRoute = require("./getDrinks")
const getcategoriesRoute = require("./getCategories")
const getGlassesRoute = require("./allGlasses")
const updateGlassesRoute = require("./updateGlasses")
const updateCategoriesRoute = require("./updateCategories")
const updateDrinksRoute = require("./updateDrinks")
const ingredientsR = require("./ingredients")
const getIngredientsRoute = require("./getIngredients")
const updateIngredientsRoute = require("./updateIngredients")
const getOneGlass = require("./get-one-glass")
const getOneCategory = require("./get-one-category")
const getOneIngredient = require("./get-one-ingredient")
const getoneDrink = require("./get-one-drink")
const rootrouter = expres.Router()

rootrouter.use("/auth",authRouter)
rootrouter.use("/auth", signUpRoute)
rootrouter.use("/create",catRoute)
rootrouter.use("/create",glassesRouter)
rootrouter.use("/create", drinkRoute)
rootrouter.use("/create", ingredientsR)
rootrouter.use("/read",getDrinksRoute )
rootrouter.use("/read", getcategoriesRoute)
rootrouter.use("/read", getGlassesRoute)
rootrouter.use("/read", getIngredientsRoute)
rootrouter.use("/read", getOneGlass)
rootrouter.use("/read", getOneCategory)
rootrouter.use("/read", getoneDrink)
rootrouter.use("/read", getOneIngredient)
rootrouter.use("/update", updateGlassesRoute)
rootrouter.use("/update", updateCategoriesRoute)
rootrouter.use("/update", updateDrinksRoute)
rootrouter.use("/update", updateIngredientsRoute)


module.exports = rootrouter