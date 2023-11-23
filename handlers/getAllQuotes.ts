import { Request, Response } from "express";
import { allQuotes } from "../api";

export const getAllQuotes = async (_req:Request, res: Response) => {
    try {
        res.status(200).json({ message: "All Quotes Fetched", Quotes: allQuotes})
    } catch (error) {
        res.status(500).json({ message: "Error getting Quotes", error})
    }
}