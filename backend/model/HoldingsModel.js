const mongoose = require("mongoose");
const HoldingsSchema = require("../schemas/HoldingsSchema").HoldingsSchema; // Ensure you're accessing the schema properly

const HoldingsModel = mongoose.model("Holding", HoldingsSchema); // Use singular and capitalize
module.exports = { HoldingsModel };
