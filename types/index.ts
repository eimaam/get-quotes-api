export interface Quote {
  id: number;
  category: string;
  quote: string;
  author: string;
  description: string;
}

export enum QuoteCategory {
  Motivation = "Motivation",
  Life = "Life",
  Wisdom = "Wisdom",
  Love = "Love",
  Technology = "Technology",
  Creativity = "Creativity",
  Courage = "Courage",
  Nature = "Nature",
  Change = "Change",
  Inspiration = "Inspiration",
  Leadership = "Leadership",
  Happiness = "Happiness",
  Perseverance = "Perseverance",
  Imagination = "Imagination",
  Hope = "Hope",
  Friendship = "Friendship",
}

export enum FilterType {
    Category = 'category',
    Author = 'author',
    Id = 'id',
  }