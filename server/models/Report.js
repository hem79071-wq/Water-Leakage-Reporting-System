const mongoose = require("mongoose");

const reportSchema = new mongoose.Schema({
  name: String,
  location: String,
  description: String,
  phone: String,
  image: String,
  status: {
  type: String,
  default: "Pending",
},
}, {
  timestamps: true
});

module.exports = mongoose.model("Report", reportSchema);