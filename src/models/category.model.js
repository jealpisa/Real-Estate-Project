const mongoose = require("mongoose");

const categoriesSchema = new mongoose.Schema({
  categorie: {
    type: String,
    required: [true, "Category is required"],
    unique: [true, "This category already exists"],
  },
});

const CategoriesModel = mongoose.model("categories", categoriesSchema);
module.exports = CategoriesModel;