const mongoose = require("mongoose");

const municipalities = new mongoose.Schema({
    municipalitie: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "municipalities",
    },
});   

const properties = new mongoose.Schema({
    propertie: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "properties",
    }
});    

const provincesSchema = new mongoose.Schema({
  province: {
    type: String,
    required: [true, "Categorie is required"],
    unique: [true, "This categorie already exists"],
  },
  municipalities: [municipalities],
  contractType: {
    type: String,
    required: [true, "Contract type is required"],
  },  
  properties: [properties],
  contractType: {
    type: String,
    required: [true, "Contract type is required"],
  },

});

const ProvincesModel = mongoose.model("provinces", provincesSchema);
module.exports = ProvincesModel;