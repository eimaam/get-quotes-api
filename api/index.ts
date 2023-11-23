import express from "express";
import cors from "cors";
import path from "path";
import quotes from "../utils/quotes.json";
import { v1Router } from "../routes";
import { Quote } from "../types";

export const app = express();

export const allQuotes: Quote[] = quotes;

app.use(express.json());
app.use(cors());

// Serve static files from the 'utils' folder
app.use(express.static(path.join(__dirname, "utils")));

const PORT = 3000 || process.env.PORT;

app.use("/api/getquotes", v1Router);

app.listen(PORT, () => console.log(`Server Started on PORT: ${PORT}`));
