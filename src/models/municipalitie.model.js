const mongoose = require("mongoose");

const zones = new mongoose.Schema({
    zone: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "zones",
    }
});    

const municipalitiesSchema = new mongoose.Schema({
  municipalitie: {
    type: String,
    required: [true, "Municipalitie is required"],
    unique: [true, "This municipalitie already exists"],
  },
  zones: [zones],
  contractType: {
    type: String,
    required: [true, "Contract type is required"],
  },  

});

const MunicipalitiesModel = mongoose.model("municipalities", municipalitiesSchema);
module.exports = MunicipalitiesModel;