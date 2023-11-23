import { Request, Response } from "express";
import { allQuotes } from "../api";
import { FilterType, Quote } from "../types";

export const getByFilter = async (req: Request, res: Response) => {
    let quotes;
    const { filterType, filterValue } = req.params;

    if(filterType === FilterType.Category){
        quotes = allQuotes.filter((quote: Quote) => quote.category.toLowerCase() === filterValue.toLowerCase());
    }else if(filterType === FilterType.Author){
        quotes = allQuotes.filter((quote: Quote) => quote.author.toLowerCase() === filterValue.replace(/[-_]/g, ' ').toLowerCase());
    }else if(filterType === FilterType.Id){
        quotes = allQuotes.filter((quote: Quote) => quote.id === parseFloat(filterValue));
    }else{
        res.status(400).json({
            message: "Invalid Filter type",
          });
    }
  
    try {
      if (quotes && quotes.length) {
        res.status(200).json({ message: `Quotes by ${filterType.toUpperCase()} fetched successfully`, quotes });
      } else {
        res.status(404).json({ message: `No quotes found for the specified filter - '${filterValue}'.` });
      }
    } catch (error) {
      res.status(500).json({ message: `Error getting quotes by ${filterType} `, error });
    }
  };
  