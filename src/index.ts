import express from "express";
import { connectorMiddleware } from "./middleware/connector";
import dotenv from "dotenv";


const app = express();
const PORT = 3000;

// Load environment variables
dotenv.config();

// Middleware to parse JSON bodies
app.use(express.json());

app.get("/visa-consultants", connectorMiddleware, (req, res) => {
  res.send("GET request to /visa-consultants");
});

app.post("/contactVisaConsultant", connectorMiddleware, (req, res) => {
  res.send("POST request to /contact");
});

app.get("/", (req, res) => {
  res.send("Middleware project running!");
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
