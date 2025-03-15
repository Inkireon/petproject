const express = require("express");
const cors = require("cors");

const app = express();

var corsOptions = {
  origin: "http://localhost:8081"
};

app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const db = require("./models");

// Sync database (creates tables if they don't exist)
db.sequelize.sync();

// Simple test route
app.get("/", (req, res) => {
  res.json({ message: "Welcome to bezkoder application." });
});

// Import tutorial routes
require("./routes/tutorial.routes")(app);

// Start server
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
