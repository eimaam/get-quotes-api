import express from "express";
import cors from "cors";
import quotes from "../utils/quotes.json";
import { v1Router } from "../routes";
import { Quote } from "../types";

export const app = express();

export const allQuotes: Quote[] = quotes;

app.use(express.json());
app.use(cors());

const PORT = process.env.PORT || 3000;

app.use("/api/v1/getquotes", v1Router);

app.listen(PORT, () => console.log(`Server Started on PORT: ${PORT}`));
