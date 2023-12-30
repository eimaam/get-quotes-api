# Free Quotes API

**Quotes from various backgrounds - Motivationn, Science, Business, Technology, Life, Love, Wisdom etc.**

## DEPLOYMENT
- API is deployed on Vercel 

**API URL:** https://api-get-quotes.vercel.app/api/v1


## Introduction

This is an Open Source API that provides a collection of quotes from diverse backgrounds ranging from Motivation, Science, Wisdom, Love and etc all randomly generated via chatGPT and rendered perfectly here with each quote having an _Author_ and _category_. It includes a filter route that allows for filtering based on - _Author name_, _category_ or _id_.


## Development
- Create `.env` file and add:
  
```
PORT=3000
```
PS: You can set the port to any port value you wish to run it from.

- Install deps

```
npm install
```

- Start the project locally by running:

```
npm run start
```

It should log to the console - `Server Started on PORT: 3000` or any port value you supplied. 

- Now you can test the endpoints locally. E.g - get all quotes via `http://localhost:3000/api/v1/quotes`

## API Documentation

Your API calls should be to this endpoint: `https://api-get-quotes.vercel.app/api/v1`

GET `/quotes` - Get All Quotes 

GET `/quotes/random` - get a _random_ quote

GET `/quotes/id/:id` - get a quote by `id`

GET `/quotes/author/authorName` - get quotes by a specfic _Author_

GET `/quotes/category/categoryName` - get quotes based on a specific _Category_ (Check below for available categories)

Categories include: _Motivation, Technology, Science, Wisdom, Life, Love_

## Contribution
Wish to contribute? I'd love it! - Simply fork the Repo and send a Pull Request with your changes and a detailed PR note/description. 

To add quotes - simply open the `quotes.json` file and add your quote at the end of the file using same format as the others & afterwards open a PR with the changes - I'd make sure I get it Live ASAP! Thank you!
