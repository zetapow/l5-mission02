require("dotenv").config();
const express = require("express");
const cors = require("cors");

/* API Routes */
const driverDiscountRoute = require("./routes/driverDiscountRoute");
const riskRatingRoute = require("./routes/riskRatingRoute");

/* API routes */

const app = express();

/*  Middleware - cors, json  */
app.use(cors({ origin: process.env.CORS_ORIGIN || "*" }));
app.use(express.json());
app.use(express.static("public"));

app.get("/", (req, res) => {
   res.send("Insurance API");
});

// API1: Car value API

// API2: Risk rating API
app.use("/api", riskRatingRoute);

// API3: Insurance quote API

// API4: Discount API endpoint
/* router under /api */
// app.post("/apis/discount");
app.use("/api", driverDiscountRoute);

// Handle errors

app.use((err, req, res) => {
   console.error(err.stack);
});

app.listen(process.env.PORT, () => {
   console.log(`Server running on http://localhost:${PORT}`);
});
