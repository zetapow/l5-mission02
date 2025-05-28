require("dotenv").config();
const express = require("express");
const cors = require("cors");

/* API Routes */
const driverDiscountRoute = require("./routes/driverDiscountRoute");
const riskRatingRoute = require("./routes/riskRatingRoute");
const quoteRoute = require("./routes/QuoteRoute");

/* API routes */

const app = express();

/*  Middleware - cors, json  */
app.use(cors("http://localhost:5173"));
// app.use(cors({ origin: "http://localhost:5173" }));
app.use(express.json());
app.use(express.static("public"));

app.get("/", (req, res) => {
   res.send("Insurance API");
});

// API1: Car value API

// API2: Risk rating API
app.use("/api", riskRatingRoute);

// API3: Insurance quote API
app.use("/api", quoteRoute);

// API4: Discount API endpoint
/* router under /api */
// app.post("/apis/discount");
app.use("/api", driverDiscountRoute);

// Handle errors

app.use((err, req, res) => {
   console.error(err.stack);
});

const PORT = 3000;
app.listen(PORT, () => {
   console.log(`Server running on http://localhost:${PORT}`);
});
