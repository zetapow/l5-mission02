require("dotenv").config();
const express = require("express");
const cors = require("cors");

/* API Routes */
const driverDiscountRoute = require("./routes/driverDiscountRoute");

/* API routes */

const app = express();

/*  Middleware - cors, json  */
app.use(cors());
// app.use(cors({ origin: "http://localhost:5173" }));
app.use(express.json());
app.use(express.static("public"));

app.get("/", (req, res) => {
   res.send("Insurance API");
});

// API1: Car value API

// API2: Risk rating API

// API3: Insurance quote API

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
