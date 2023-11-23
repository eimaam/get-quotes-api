import { Request, Response } from "express";
import { allQuotes } from "../api";
import { Quote } from "../types";

export const getRandom = async (_req: Request, res: Response) => {
  try {
    // get a random quote from the allQuotes arr
    const randomNumber: number = Math.floor(Math.random() * allQuotes.length);
    const randomQuote: Quote = allQuotes[randomNumber];

    res.status(200).json({ message: "Quote of the Day", quote: randomQuote });
  } catch (error) {
    res.status(500).json({ message: "Error getting a quote", error });
  }
};
