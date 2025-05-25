# Rock, Paper, Scissors, Lizard, Spock Game

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![Responsive](https://img.shields.io/badge/Responsive-Design-blue?style=for-the-badge)

An interactive, fully responsive implementation of the popular Rock, Paper, Scissors, Lizard, Spock game from the TV show "The Big Bang Theory." This project features a clean UI, local storage for score persistence, and dynamic game state management.

_This is a solution to the [Rock, Paper, Scissors challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/rock-paper-scissors-game-pTgwgvgH)._

## 📋 Table of Contents

- [✨ Features](#-features)
- [🛠️ Technology Stack](#️-technology-stack)
- [🎮 Gameplay](#-gameplay)
- [🎯 Technical Highlights](#-technical-highlights)
- [📱 Responsive Design](#-responsive-design)
- [🚀 Getting Started](#-getting-started)
- [🔍 Code Insights](#-code-insights)
- [👨‍💻 Author](#-author)

## ✨ Features

- **Interactive Gameplay**: Engaging user interface with visual feedback on game results
- **Extended Game Rules**: Implementation of the extended version with Lizard and Spock options
- **Score Persistence**: Game scores maintained across browser sessions using localStorage
- **Responsive Design**: Optimized layouts for mobile, tablet, and desktop devices
- **Dynamic Game States**: Smooth transitions between game selection and results screens
- **Visual Feedback**: Clear indication of winning selections with visual effects
- **Game Rules Modal**: Interactive modal that explains the game rules with visual aids

## 🛠️ Technology Stack

### Core Technologies

- **HTML5**: Semantic markup for better accessibility and SEO
- **CSS3**: Advanced styling using custom properties, flexbox, and grid
- **JavaScript**: ES6+ features for dynamic content and game logic
- **Local Storage API**: Browser-based data persistence for user scores

### Development Methodology

- **Mobile-First Design**: Built with a mobile-first approach for optimal responsiveness
- **BEM Naming Convention**: Structured CSS with Block Element Modifier methodology
- **CSS Grid Layout**: Advanced positioning using grid-template-areas for complex UI components
- **CSS Transitions**: Smooth animations for enhanced user experience
- **DOM Manipulation**: Dynamic content updates without page refresh

## 🎮 Gameplay

The game follows the extended rules of Rock, Paper, Scissors, Lizard, Spock:

- ✊ Rock crushes Scissors & crushes Lizard
- ✋ Paper covers Rock & disproves Spock
- ✌️ Scissors cuts Paper & decapitates Lizard
- 🦎 Lizard poisons Spock & eats Paper
- 🖖 Spock vaporizes Rock & smashes Scissors

### Screenshots

![Game Selection Screen](https://github.com/a-maystorov/rock-paper-scissors-lizard-spock/blob/main/assets/options-desktop.jpeg?raw=true)
_Selection screen showing the pentagon layout of game options_

![Game Results Screen](https://github.com/a-maystorov/rock-paper-scissors-lizard-spock/blob/main/assets/result-desktop.jpeg?raw=true)
_Results screen displaying player and house choices with outcome_

![Mobile View](https://github.com/a-maystorov/rock-paper-scissors-lizard-spock/blob/main/assets/mobile-view.png?raw=true)
_Responsive mobile interface_

### Live Demo

- [Play the Game](https://a-maystorov.github.io/rock-paper-scissors-lizard-spock/)
- [Source Code](https://github.com/a-maystorov/rock-paper-scissors-lizard-spock/)

## 🎯 Technical Highlights

### CSS Grid Mastery

One of the most challenging aspects of this project was implementing the pentagon layout for the game options. Instead of using complex transformations and absolute positioning, I leveraged the power of CSS Grid with `grid-template-areas` to create an elegant solution that reduced code complexity by approximately 60%.

```css
/* Pentagon layout for game options */
.main__content {
  grid-template-columns: repeat(3, 1fr);
  grid-template-areas:
    ". s ."
    "c . p"
    "l . r";
}

/* Responsive results screen */
.main__content--results {
  grid-template: "p r h" 1fr;
  grid-column-gap: 0;
}
```

### JavaScript Architecture

The game logic is implemented with a clean, modular approach:

- **Game State Management**: Clearly defined states for selection and results screens
- **Dynamic DOM Manipulation**: Elements are created, modified, and removed based on game state
- **Event Delegation**: Efficient event handling for multiple game options
- **Local Storage Integration**: Persistent score tracking across browser sessions

### Data Structure for Game Rules

The game rules are represented using an efficient object structure:

```javascript
const results = {
  rock: { name: "Rock", defeats: ["scissors", "lizard"] },
  paper: { name: "Paper", defeats: ["rock", "spock"] },
  scissors: { name: "Scissors", defeats: ["paper", "lizard"] },
  lizard: { name: "Lizard", defeats: ["paper", "spock"] },
  spock: { name: "Spock", defeats: ["scissors", "rock"] },
};
```

## 📱 Responsive Design

The application implements a thoughtful responsive design strategy:

- **Mobile-First Approach**: Core design optimized for mobile devices first
- **Fluid Layouts**: Elements scale proportionally across different screen sizes
- **Breakpoint Strategy**: Specific layout adjustments at key viewport widths
- **Touch-Friendly UI**: Large interactive elements optimized for touch devices
- **Visual Consistency**: Maintains visual hierarchy and design integrity across all devices

## 🚀 Getting Started

### Prerequisites

- Any modern web browser (Chrome, Firefox, Safari, Edge)

### Installation

```bash
# Clone the repository
git clone https://github.com/a-maystorov/rock-paper-scissors-lizard-spock.git

# Navigate to the project directory
cd rock-paper-scissors-lizard-spock

# Open the game in your browser
open index.html
```

### Development

The project structure is organized for clarity and maintainability:

```
rock-paper-scissors-lizard-spock/
├── images/            # Game icons and visual assets
├── index.html         # Main HTML structure
├── styles.css         # CSS styling
├── index.js           # Game logic
└── README.md          # Project documentation
```

## 🔍 Code Insights

### CSS Grid Template Areas

The implementation of CSS Grid Template Areas was crucial for solving complex layout challenges:

```css
/* Rules modal for desktop view */
@media screen and (min-width: 1366px) {
  .rules {
    grid-template-rows: 1fr 1fr;
    grid-template-columns: repeat(4, 1fr);
    grid-template-areas:
      "p . . b"
      "i i i i";
  }
  /*
  p - paragraph
  b - button
  i - image
  */
}
```

This approach provides several advantages:

- **Visual Representation**: The grid areas visually represent the layout in code
- **Maintainability**: Easier to understand and modify layout structure
- **Responsive Design**: Simplified media query implementations
- **Reduced Code**: Minimal CSS required for complex layouts

### Performance Optimizations

- **Event Delegation**: Using a single event listener for multiple elements
- **Minimal DOM Manipulations**: Efficient toggling of classes instead of creating/removing elements
- **Local Storage**: Efficient data persistence without server requests
- **Image Optimization**: Properly sized and compressed assets for faster loading

## 👨‍💻 Author

- **Portfolio** - [alkinmaystorov.com](https://alkinmaystorov.com)
- **LinkedIn** - [Alkin Maystorov](https://www.linkedin.com/in/alkin-maystorov/)
- **GitHub** - [@a-maystorov](https://github.com/a-maystorov)
- **Frontend Mentor** - [@SirDev97](https://www.frontendmentor.io/profile/SirDev97)

---

_This project was built as part of a Frontend Mentor challenge and showcases skills in semantic HTML, CSS Grid/Flexbox, responsive design, and vanilla JavaScript. Feel free to reach out with any questions or feedback!_
