require("dotenv").config();

const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cors = require("cors");
const bodyParser = require("body-parser");
// for jwt authonetication
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const User = require("./model/User");
const SECRET_KEY = "hello i am secret_key";

// middelwares..........
app.use(cors());
app.use(bodyParser.json());
app.use(express.urlencoded({ extended: true }));

// form model file
const { HoldingsModel } = require("./model/HoldingsModel");
const { PositionsModel } = require("./model/PositionsModel");
const { OrdersModel } = require("./model/OrdersModel");

// From env file variables
const PORT = process.env.PORT || 3002;
// const URL = process.env.MONGO_URL;
const URL = "mongodb://127.0.0.1:27017/newDb";

main()
  .then(() => {
    console.log("connected with database");
  })
  .catch((err) => {
    console.log(err);
  });

async function main() {
  await mongoose.connect(URL);
}

app.get("/", (req, res) => {
  res.send("working");
});

app.get("/allholdings", async (req, res) => {
  let a = await HoldingsModel.find({});
  res.json(a);
});
app.get("/allposition", async (req, res) => {
  let a = await PositionsModel.find({});
  res.json(a);
});
app.post("/neworder", async (req, res) => {
  let newOrder = new OrdersModel({
    name: req.body.name,
    qty: req.body.qty,
    price: req.body.price,
    mode: req.body.mode,
  });
  // await newOrder.save();
  console.log(newOrder);
  res.send("working");
});
app.post("/signup", async (req, res) => {
  const { username } = req.body.user;
  // Check if the user already exists
  const existingUser = await User.findOne({ username });
  if (existingUser) {
    return res.status(400).send("Username already exists!"); // Return an error if user exists
  }
  // Create a new user instance using the user data from the request
  let user = new User(req.body.user);
  await user.save();
  console.log(user);
  const Token = jwt.sign({id:user._id,username:user.username},SECRET_KEY,{expiresIn:"1h"})
  res.cookie("token",Token)
  res.send("working");
});

app.post("/login", async (req, res) => {
  console.log(req.body.user)
  const user = await User.findOne({ username: req.body.user.username });
  if (!user) {
    return console.log("user not exists create a account");
  }
  const ismatch = await user.comparePassword(req.body.user.password);
  if (!ismatch) {
    return res.status(404).send("something went wrong");
  }
  const token = jwt.sign(
    { id: user._id, username: user.username },
    SECRET_KEY,
    { expiresIn: "1h" }
  );
  console.log(user);
 res.cookie("token",token)
  
  res.json(token);
});

// app.post("/login", async (req, res) => {
//   try {
//     const user = await User.findOne({ username: req.body.user.username });
//     if (!user) {
//       console.log("User does not exist, create an account.");
//       return res.status(404).send("User does not exist, create an account."); // Return a proper response
//     }

//     const isMatch = await user.comparePassword(req.body.user.password);
//     if (!isMatch) {
//       console.log("Invalid password.");
//       return res.status(401).send("Invalid credentials."); // Return a 401 for unauthorized
//     }

//     const token = jwt.sign(
//       { id: user._id, username: user.username },
//       SECRET_KEY,
//       { expiresIn: "1h" }
//     );

//     console.log(user);
//     res.cookie("token", token, {
//       httpOnly: true,
//       secure: process.env.NODE_ENV === "production", // Use a boolean condition
//       sameSite: 'Strict', // or 'Lax'
//     });

//     return res.send("Login successful."); // Return a success message
//   } catch (error) {
//     console.error("Error during login:", error);
//     return res.status(500).send("Internal server error."); // Handle any unexpected errors
//   }
// });


app.get("/logout", (req, res) => {
  res.cookie("token","");
  res.status(200).send("Logged out successfully");
});

app.listen(PORT, () => {
  console.log(`app is listening on port ${PORT}`);
  mongoose.connect(URL);
});
