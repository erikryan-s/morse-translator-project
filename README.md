# Morse Code Translator

A simple device that can translate between English characters and Morse code. Second project completed as a part of the \_nology program and was implemented with knowledge gained during this time.

🔗 [Live Demo](https://erikryan-s.github.io/morsecode-translate/)

## Table of Contents

-   [Screenshots](#screenshots)
-   [Project Requirements](#project-requirements)
-   [Lifecycle and Implementation details](#lifecycle-and-implementation-details)
-   [Design inspiration](#design-inspiration)
-   [Future updates and current limitations](#future-updates-and-current-limitations)

## Screenshots

<p align="center">
    <img src="https://i.gyazo.com/f69b63ac87e933d19e35fce414a2f2e1.png" width="300" height="400">
</p>
<p align="center">
    <img src="https://i.gyazo.com/bdf6c4a4c1426433c3fee97c89dae174.png" width="300">
</p>

## Goal

-   Use javascript logic to perform translation given the provided [requirements](#project-requirements)
-   Utilise DOM manipulation to display the logic on the translator display
-   Use logic to minimise the impact of edge cases

## Project Requirements

1. Create a user interface that allows the user to either input some English text or some Morse code
2. Create JS functions that would allow the user to translate their English text into Morse code or Morse code into English text
3. Make sure to handle spaces properly (ie. there is 1 space between English words, but one space between Morse code characters)
4. Unit testing
    - Add tests to your translation functions
    - Your functions should be pure
    - Write 3-4 test per function

## Lifecycle and Implementation details

### Tech Used

-   HTML
-   CSS
-   Sass
-   JavaScript
-   JEST unit testing

### Breakdown of logic

-   Rough design of translator
-   Figuring out JS
    -   create an object that maps all the characters (english alphabet) to Morse code equivalents
    -   create a function to iterate over the english string and construct a new string
    -   create a function to iterate over the Morse code and construct a new english string
-   Complete design and publish

## Design inspiration

### Google Translate Mobile

<p align="center">
    <img src="https://i.gyazo.com/3e88d338f9b9ab154584a5cf216b4e85.png" width="300" height="550">
</p>

## Future updates and current limitations
