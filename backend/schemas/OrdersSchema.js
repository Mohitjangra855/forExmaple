const { Schema, model } = require("mongoose");

const OrdersSchema = new Schema({
  name: {
    type: String,
  },
  qty: {
    type: Number,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  mode: {
    type: String, // true if price is down, false if price is up
    required: true,
  },
});

module.exports = { OrdersSchema };
