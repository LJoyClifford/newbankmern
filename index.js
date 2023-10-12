const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const User = require("./models/User");
const jwt = require("jsonwebtoken"); // Import JWT library
const path = require("path");

const app = express();
const port = process.env.PORT || 5001;

app.use(bodyParser.json());
app.use(cors());

mongoose.connect(
  "mongodb+srv://ljoyclifford:123@cluster.6rrlddu.mongodb.net/test",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);

// Signup route
app.post("/signup", async (req, res) => {
  try {
    const { username, email, password } = req.body;

    // Check if the user already exists
    const existingUser = await User.findOne({ email });

    if (existingUser) {
      return res.status(400).json({ message: "User already exists" });
    }

    // Create a new user document
    const newUser = new User({ username, email, password });

    // Save the user to the database
    await newUser.save();

    res.status(201).json({ message: "User registered successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
});

// Login route
app.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;

    // Find the user by email
    const user = await User.findOne({ email });

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    // Compare the provided password with the hashed password stored in the database
    if (user.password !== password) {
      return res.status(401).json({ message: "Invalid password" });
    }

    // Generate a JWT token upon successful login
    const token = jwt.sign({ userId: user._id }, "your-secret-key", {
      expiresIn: "1h", //
    });

    res.status(200).json({ token });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
});

app.use(express.static(path.join(__dirname + "/public")));

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
