const mongoose = require("mongoose");

// Import of the model Recipe from './models/Recipe.model.js'
const Recipe = require("./models/Recipe.model");
// Import of the data from './data.json'
const data = require("./data");

const MONGODB_URI = "mongodb://localhost:27017/recipe-app";

// Connection to the database "recipe-app"
mongoose
  .connect(MONGODB_URI)
  .then((x) => {
    console.log(`Connected to the database: "${x.connection.name}"`);
    // Before adding any recipes to the database, let's remove all existing ones
    return Recipe.deleteMany();
  })
  // .then(() => {
  //   const recipeDetails = {
  //     title: "Pizza Margherita",
  //     level: "Easy Peasy",
  //     cuisine: "Italian",
  //   };

  //   Recipe.create(recipeDetails)
  //     .then((result) => {
  //       console.log(result);
  //     })
  //     .catch((err) => {
  //       console.log("screaaaam", err);
  //     });
  // })
  // .catch((error) => {
  //   console.error("Error connecting to the database", error);
  // });
  .then((result) => {
    Recipe.insertMany(data).then().catch();
  });
//
