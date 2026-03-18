# Cyber-Flap Blueprint

## Overview

This document outlines the plan for creating a Flappy Bird-inspired game with a futuristic aesthetic. The player will control a cybernetic ship, navigating it through a series of glowing obstacles.

## Project Structure

*   `index.html`: The main HTML file.
*   `style.css`: For all the styling of the game.
*   `main.js`: The core game logic.
*   `blueprint.md`: This file.

## Features

### 1. Visual Elements (HTML & CSS)

*   **Futuristic Background:** A dark, textured background with a subtle noise effect to give it a premium feel.
*   **Cyber-Ship:** A sleek, futuristic ship as the player character.
*   **Obstacles:** Neon-glowing vertical pipes or energy barriers.
*   **Score Display:** A modern, digital-style font to display the score.
*   **Game Over Screen:** A "Game Over" message with the final score and a "Restart" button, styled with a neon glow and glitch effect.
*   **Full-Screen Experience:** The game will take up the entire browser window for a more immersive experience.
*   **Portal Effect:** A flash animation will trigger when the player successfully passes through an obstacle.

### 2. Game Logic (JavaScript)

*   **Player Control:** The ship will ascend on a click or key press. Gravity will constantly pull it down.
*   **Obstacle Generation:** Obstacles will be generated at random heights and move from right to left.
*   **Collision Detection:** The game will end if the ship collides with an obstacle, the top, or the bottom of the game area.
*   **Scoring:** The player's score will increase for each obstacle they successfully pass.
*   **Game State Management:** The game will have different states: "Start," "Playing," and "Game Over."
*   **Progressive Difficulty:** The speed of the game will gradually increase over time.

## Design and Aesthetics

*   **Color Palette:** A dark theme with deep blues and purples, accented by vibrant neon colors like cyan, magenta, and lime green for the ship, obstacles, and UI elements.
*   **Typography:** A clean, modern, and expressive font for all text elements.
*   **Effects:**
    *   Glow effects for the ship and obstacles using `box-shadow`.
    *   A subtle particle trail for the ship's movement.
    *   An animation for the "Game Over" screen.

## Plan

1.  **Create `index.html`:** Set up the basic HTML structure with a game container, score display, and start/game over screens. (Done)
2.  **Create `style.css`:** Style the game with a futuristic aesthetic, including the background, ship, obstacles, and UI elements. (Done)
3.  **Create `main.js`:** Implement the core game logic, including player movement, obstacle generation, collision detection, and scoring. (Done)
4.  **Implement Full-Screen Mode, Portal Effects, and Progressive Speed:** Update the CSS and JavaScript to implement the new features.
