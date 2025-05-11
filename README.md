# Rock Paper Scissors Game

A simple Rock Paper Scissors game implemented using HTML, CSS, and JavaScript.

## Features
- Interactive UI to select Rock, Paper, or Scissors
- Score tracking for both user and computer
- Visual feedback for each round outcome
- Dynamic background animation
- Retro-style pixel fonts

## Technologies Used
- HTML
- CSS (Animations and Styling)
- JavaScript (Game Logic and DOM Manipulation)

## Installation
1. Clone the repository:
    ```bash
    git clone https://github.com/SauceIsForever/rps-game
    ```

2. Navigate to the project directory:
    ```bash
    cd rps-game
    ```

3. Open `index.html` in your browser to play the game.

## How to Play
1. Choose Rock, Paper, or Scissors by clicking the respective buttons.
2. The computer will randomly select a weapon.
3. The outcome of the round is displayed along with updated scores.

## Project Structure
```
|-- index.html  # Main HTML file
|-- style.css   # CSS for styling and animations
|-- script.js   # JavaScript for game logic
|-- photos/     # Images for the buttons
|-- fonts/      # Custom pixel fonts
```

## Customization
- To update the fonts, modify the `@font-face` section in `style.css`.
- To change the background animation, adjust the `@keyframes moveGradient` keyframe in `style.css`.

## Future Enhancements
- Add a restart button to reset scores
- Implement a best-of-five mode
