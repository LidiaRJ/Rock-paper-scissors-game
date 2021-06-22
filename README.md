# Rock paper scissors challenge 

This is part of my learning journy on JavaScript following a tutorial on how to code a Rock paper scissors from freeCodeCamp.org 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)


## Overview

### The challenge

Users should be able to:

- Make a move, playing againts the computer. 
- Every time a move is made, his/her choice should be highlighted in green if he/he wins, or red if he/she loses. 
- See their score and the computer's score on the score board. 
- See a message stating if they won, lost or it was a draw against the computer. 

### Screenshot

[![Wins_version](https://github.com/LidiaRJ/Rock-paper-scissors-game/blob/main/screenshots/RPS%20game%20wins.png)](https://github.com/LidiaRJ/Rock-paper-scissors-game/blob/main/screenshots/RPS%20game%20wins.png)
[![Loses_version](https://github.com/LidiaRJ/Rock-paper-scissors-game/blob/main/screenshots/RPS%20game%20loses.png)](https://github.com/LidiaRJ/Rock-paper-scissors-game/blob/main/screenshots/RPS%20game%20loses.png)

### Links

- Solution URL: [(https://github.com/LidiaRJ/Rock-paper-scissors-game)](https://github.com/LidiaRJ/Rock-paper-scissors-game)
- Live Site URL: [https://lidiarj.github.io/Rock-paper-scissors-game/](https://lidiarj.github.io/Rock-paper-scissors-game/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- JavaScript


### What I learned

- How to use JavaScript to create a game where the uer compites against the computer. 
- Create helper classes and applying them to elements using JS.
- To modify the HTML content by using the DOM innerHTML property. 
- To use JS builtin funcions such as setTimeout, Math.random and Math.floor.
- Using switch instead of if statements, creating cases for each statement. 


```js
//Function to display message
function wins(user, computer) {
    userScore++;
    userScoreSpan.innerHTML = userScore; //To modify the html markup
    compScoreSpan.innerHTML = compScore;
    resultP.innerHTML = convertToUpper(user) + " beats " + computer + ". You Won!";
    document.getElementById(user).classList.add('green__glow'); //Add a class to user choice 
    setTimeout(() => document.getElementById(user).classList.remove('green__glow'), 1500); //Set timer for the glow
}

switch(userChoice + compChoice) { 
        case "paperrock":
        case "scissorspaper":
            wins(userChoice, compChoice);
            break;
}
```

### Continued development
My goal is to continue learning JS for responsive and interactive websites and webapps through conding challenges and real life webiste examples. 

### Useful resources

- [freeCodeCamp YouTube channel](https://www.youtube.com/channel/UC8butISFwT-Wl7EV0hUK0BQ) - This helped me learning from other people's workflow and approach to reach similar results.  


## Author

- Website - [Lidia Ruiz Jimeno](https://www.behance.net/Lidiarjimeno)
- Frontend Mentor - [@LidiaRJ](https://www.frontendmentor.io/profile/LidiaRJ)
- Github - [@LidiaRJ](https://github.com/LidiaRJ)
- Codepen - (https://codepen.io/lilyrj)



## Acknowledgments
Thanks to freeCodeCamp and @whatsdev for the video tutorial on how to code a rock, paper, scissors game.  



