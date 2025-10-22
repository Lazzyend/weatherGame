## Welcome to Your Weather Game App!

This app was started with Create React App.

## What Can You Do Here?

- _User can play a game where you have to guess the weather in 5 random cities from a list._
- _If the user manages to guess 3 out of 5 temperatures correctly, they win, if not, they lose._
- _A deviation of up to 5 degrees will be considered a correct answer._
- _All temperatures are given in Celsius._

## Tech Stack

- **React** (with hooks)
- **Styled Components** for CSS-in-JS

## Project Structure

```
src/
├── components/
│ ├── AnswerBlock.jsx
│ ├── GuessBlock.jsx
│ ├── ResultBlock.jsx
│ └── Row.jsx
├── config/
│ ├── cities.js
│ └── constants.js
├── pages/
│ ├── HomePage.jsx
└── services/
└── weatherApi.js
```

## Getting Started

1. **Clone & Install**

```sh
git clone <repo-url>
cd project-folder
npm install

```

2. **Create Env file**

```sh
  create .env file in the root
  paste env.example content into new .env file
  get api key from Pdf File
```

3. **Start the App**

```sh
   npm start
```
