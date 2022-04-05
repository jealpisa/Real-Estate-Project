const mongoose = require("mongoose");

const categoriesSchema = new mongoose.Schema({
  categorie: {
    type: String,
    required: [true, "Categorie is required"],
    unique: [true, "This categorie already exists"],
  },
});

const CategoriesModel = mongoose.model("categories", categoriesSchema);
module.exports = CategoriesModel;