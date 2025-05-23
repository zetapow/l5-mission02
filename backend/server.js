require("dotenv").config();
const express = require("express");
const cors = require("cors");

/* Import external scripts */
const config = require("./config");
const predictionController = require("./controllers/predictionController");
const handleErrors = require("./middlewares/handleErrors");

const app = express();

/*  Middleware - cors, json  */
app.use(cors());
app.use(express.json());
app.use(express.static("public"));

// API1: Car value API

// API2: Risk rating API

// API3: Insurance quote API

// API4: Discount API endpoint
// app.post("/apis/discount");

// Handle errors

app.listen(config.port, () => {
   console.log(`Server running on http://localhost:${config.port}`);
});
