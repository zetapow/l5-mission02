require("dotenv").config();
const express = require("express");
const cors = require("cors");

/* API Routes */
const carValueRoute = require("./routes/carValueRoute"); // 👈 Your API 1
const claimHistoryRoute = require("./routes/claimHistoryRoute"); // 👈 Your API 2
const driverDiscountRoute = require("./routes/driverDiscountRoute");
const riskRatingRoute = require("./routes/riskRatingRoute");
const quoteRoute = require("./routes/QuoteRoute");

const app = express();

/* Middleware */
app.use(cors("http://localhost:5173"));
// app.use(cors({ origin: "http://localhost:5173" }));
app.use(express.json());
app.use(express.static("public"));

app.get("/", (req, res) => {
   res.send("Insurance API");
});

// API1: Car value API
app.use("/api/car-value", carValueRoute); // 👈 mounted here

// API2: Claim History API
app.use("/api/claim-history", claimHistoryRoute); // 👈 mounted here

// API3: Risk rating API
app.use("/api", riskRatingRoute);

// API4: Insurance quote API
app.use("/api", quoteRoute);

// API5: Discount API endpoint
app.use("/api", driverDiscountRoute);

/* Error Handling */
app.use((err, req, res) => {
   console.error(err.stack);
});

const PORT = 3000;
app.listen(PORT, () => {
   console.log(`Server running on http://localhost:${PORT}`);
});
