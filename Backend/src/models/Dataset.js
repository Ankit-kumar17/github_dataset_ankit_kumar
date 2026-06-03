const mongoose = require("mongoose");

const datasetSchema = new mongoose.Schema(
  {
    id:String,
    instruction: String,
    input: String,
    output: String,
metadata: mongoose.Schema.Types.Mixed},
  {
    timestamps: true
  }
);

module.exports = mongoose.model("Dataset", datasetSchema);