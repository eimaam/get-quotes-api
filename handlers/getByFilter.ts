import { Request, Response } from "express";
import { allQuotes } from "../api";
import { FilterType, Quote } from "../types";

export const getByFilter = async (req: Request, res: Response) => {
  let quotes;
  // get filter type and value from the req parameter
  // e.g /category/motivation
  const { filterType, filterValue } = req.params;

  // check for filter type and conditionally update quotes variable to the requested filter
  //   3 filter types ==> category, author and id
  if (filterType === FilterType.Category) {
    quotes = allQuotes.filter(
      (quote: Quote) =>
        quote.category.toLowerCase() === filterValue.toLowerCase()
    );
  } else if (filterType === FilterType.Author) {
    quotes = allQuotes.filter(
      (quote: Quote) =>
        quote.author.toLowerCase() ===
        filterValue.replace(/[-_]/g, " ").toLowerCase()
    );
  } else if (filterType === FilterType.Id) {
    quotes = allQuotes.filter(
      (quote: Quote) => quote.id === parseFloat(filterValue)
    );
  } else {
    res.status(400).json({
      message: "Invalid Filter type",
    });
  }

  try {
    if (quotes && quotes.length) {
      res.status(200).json({
        message: `Quotes by ${filterType.toUpperCase()} fetched successfully`,
        quotes,
      });
    } else {
      // response if filter type does not exist.
      res.status(404).json({
        message: `No quotes found for the specified filter - '${filterValue}'.`,
      });
    }
  } catch (error) {
    res
      .status(500)
      .json({ message: `Error getting quotes by ${filterType} `, error });
  }
};
