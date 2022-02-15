# Frontend Mentor - Rock, Paper, Scissors

This is a solution to the [Rock, Paper, Scissors challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/rock-paper-scissors-game-pTgwgvgH).

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshots](#screenshots)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Useful resources](#useful-resources)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- [x] View the optimal layout for the game depending on their device's screen size
- [x] Play Rock, Paper, Scissors against the computer
- [x] Maintain the state of the score after refreshing the browser _(optional)_
- [x] **Bonus**: Play Rock, Paper, Scissors, Lizard, Spock against the computer _(optional)_

### Screenshots

![](https://github.com/SirDev97/rock-paper-scissors-lizard-spock/blob/main/assets/options-desktop.jpeg?raw=true)
![](https://github.com/SirDev97/rock-paper-scissors-lizard-spock/blob/main/assets/result-desktop.jpeg?raw=true)
![](https://github.com/SirDev97/rock-paper-scissors-lizard-spock/blob/main/assets/tablet-view.png?raw=true)
![](https://github.com/SirDev97/rock-paper-scissors-lizard-spock/blob/main/assets/mobile-view.png?raw=true)
![](https://github.com/SirDev97/rock-paper-scissors-lizard-spock/blob/main/assets/rules-mobile-tablet.png?raw=true)

### Links

- Solution URL: [Github Repo](https://github.com/SirDev97/rock-paper-scissors-lizard-spock)
- Live Site URL: [Github Pages](https://sirdev97.github.io/rock-paper-scissors-lizard-spock/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- JavaScript
- Mobile-first workflow

### What I learned

The design for this project was a little bit tricky, mainly the pentagon shape of the choices and since the background image provided was not a perfect shape it meant that I will be doing alot of transforming of the Y and X axis for the choice button elements,
at least that was the first thing that came to my mind, but the main problem I faced was the layout of the choice elements themselves and how would I place them in a pentagon shape. I tried flexbox initially, turns out it is possible but I didnt want to waste most of my hairline on this project alone. Thankfully `grid-template-areas` came to the rescue, basically cut my code solution by 60% and even solved my layout issues for the tablet and desktop views in the rules section and the results section.

Here are some code snippets of my use of grid-template-areas:

```css
/* Rules */
@media screen and (min-width: 1366px) {
  .rules {
    grid-template-rows: 1fr 1fr;
    grid-template-columns: repeat(4, 1fr);
    grid-template-areas:
      'p . . b'
      'i i i i';
  }
  /*
  p - paragraph
  b - button
  i - image
  */

/* Choices */
.main__content {
  grid-template-columns: repeat(3, 1fr);
  grid-template-areas:
    '. s .'
    'c . p'
    'l . r';
}

/* Results */
  .main__content--results {
    grid-template: 'p r h' 1fr;
    grid-column-gap: 0;
  }
```

### Useful resources

- [Understanding Grid Template Areas](https://www.smashingmagazine.com/understanding-css-grid-template-areas/):

  - This is an amazing read by Rachel Andrew covering G-T-A in detail which helped me alot duruing this project. I think it's definitely worth the read if you want to dive deep into this topic.

## Author

- LinkedIn - [Alkin Maystorov](https://www.linkedin.com/in/alkin-maystorov/)
- Frontend Mentor - [@SirDev97](https://www.frontendmentor.io/profile/SirDev97)
- Github - [@SirDev97](https://github.com/SirDev97)
