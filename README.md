# React-Snowman

<p align="center">
<img src="src/snowman.gif">
</p>

### See it live

https://react-snowman-dylanattal.surge.sh/

### Summary

The goal of this project was to create a game of reverse hangman. I was given a list of random words in JSON format and used `Math.floor()` and `Math.random()` to choose a random word for each new game. I then mapped each letter of the word to a blank. I pushed each correct letter to an array, and I was able to determine when the user won the game by comparing the length of the correct letters array with the length of the random word chosen.

I used MobX for state management in this project. The `Game` component contains the entire state for the app, and the other components reference it. A state management library was really useful in this project since I split up the app into several components: `App`, `SnowmanPics`, `Blanks`, `Alphabet`, and `Letter`. Having each component reference the `Game` component was a much easier solution than passing down state through each component.

### Project Goals

- [x] Create an app where the user plays a game of reverse hangman
- [x] Choose a random word from a given list in JSON format
- [x] Display blanks that correspond to the letters in the word
- [x] Display correct letters once chosen
- [x] Display a new part of the snowman for each correct letter chosen
- [x] Make buttons disappear once clicked upon

### Technologies Used

HTML, CSS, Javascript, React, MobX
