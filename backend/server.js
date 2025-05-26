require("dotenv").config();
const express = require("express");
const cors = require("cors");

/* API routes */
// const driverDiscountRoute = require("./api/driverDiscountRoute");

const { calculateDiscount } = require("./calculateDiscount");

const app = express();

/*  Middleware - cors, json  */
app.use(cors());
// app.use(cors({ origin: "http://localhost:5173" }));
app.use(express.json());
app.use(express.static("public"));

app.get("/", () => {
   res.send("Insurance API");
});

// API1: Car value API

// API2: Risk rating API

// API3: Insurance quote API

// API4: Discount API endpoint
// app.post("/apis/discount");
app.post("/api/discount", (req, res) => {
   console.log("discount request");
   try {
      const { age, experience } = req.body;

      if (!age || !experience) {
         return res
            .status(400)
            .json({ error: "Please input age and experience" });
      }

      // If string - convert to numbers

      const result = calculateDiscount(Number(age), Number(experience));
      res.json(result);
   } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Internal server error" });
   }
});

// Handle errors

app.use((err, req, res) => {
   console.error(err.stack);
});

const PORT = 3000;
app.listen(PORT, () => {
   console.log(`Server running on http://localhost:${PORT}`);
});
