const mongoose = require("mongoose");

const municipalities = new mongoose.Schema({
    municipalitie: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "municipalities",
    }
});    

const provincesSchema = new mongoose.Schema({
  province: {
    type: String,
    required: [true, "Category is required"],
    unique: [true, "This category already exists"],
  },
  municipalities: [municipalities],
  contractType: {
    type: String,
    required: [true, "Contract type is required"],
  },  

});

const ProvincesModel = mongoose.model("provinces", provincesSchema);
module.exports = ProvincesModel;