const mongoose = require("mongoose"); // Ensure you import mongoose
const { PositionsSchema } = require("../schemas/PositionsSchema");

const PositionsModel = mongoose.model("Positions", PositionsSchema); // Use mongoose.model
module.exports = { PositionsModel };
