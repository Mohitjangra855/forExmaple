const mongoose = require("mongoose");
const { Schema } = mongoose;

const HoldingsSchema = new Schema({
  name: {
    type: String,
    required: true,  // Consider making this required
  },
  qty: {
    type: Number,
    required: true,  // Consider making this required
  },
  avg: {
    type: Number,
    required: true,  // Consider making this required
  },
  price: {
    type: Number,
    required: true,  // Consider making this required
  },
  net: {
    type: String,
    required: true,  // Consider making this required
  },
  day: {
    type: String,
    required: true,  // Consider making this required
  },
});



module.exports = { HoldingsSchema };  // Export  just the schema
