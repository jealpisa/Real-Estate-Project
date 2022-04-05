const mongoose = require("mongoose");

const properties = new mongoose.Schema({
    propertie: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "properties",
    }
});    

const zonesSchema = new mongoose.Schema({
  zone: {
    type: String,
    required: [true, "Zone is required"],
    unique: [true, "This zone already exists"],
  },
  properties: [properties],
  contractType: {
    type: String,
    required: [true, "Contract type is required"],
  },  

});

const ZonesModel = mongoose.model("zones", zonesSchema);
module.exports = ZonesModel;