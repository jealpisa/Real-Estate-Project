const mongoose = require("mongoose");

const properties = new mongoose.Schema({
  propertie: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "properties"
  },

});

const categoriesSchema = new mongoose.Schema({
  category: {
    type: String,
    required: [true, "Category is required"],
    unique: [true, "This category already exists"],
  },
  
  properties: [properties],
  contractType: {
    type: String,
    required: [true, "Contract type is required"],
  },  
})

const CategoriesModel = mongoose.model("categories", categoriesSchema);
module.exports = CategoriesModel;