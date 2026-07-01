# odin-battleship-project

The popular boardgame Battleship, with game objects coded using test-driven development as part of The Odin Project.

Features:
- Game board is a 10*10 grid of initially black tiles, representing unknown water.
- For computers, ships are randomly placed.
- For players, ships are placed by clicking, orientation chosen with q/e controls for each of five ship lengths - 2, 3, 3, 4, 5.
- When a player goes to place a ship by hovering on the board, they can see a dark grey 'ghost' of where the ship will be placed if they click.
- Players take turns firing on the opposing team's board in a square that has not been targeted before.
- Targeted squares with no ship turn blue, representing open water. Squares containing a ship turn red, representing damage to a ship.
- Computers always take random valid turns on a 1 second delay.
- A game can be between two human players, two computers, or one of each:
  1. Two computers: Both computers' ships are visible, and the computers will take turns every second, allowing users to watch the game.
  2. Player vs computer: the player's ships are visible, while the computer's are not. The player and computer fire one shot at a time in turn.
  3. PvP: A player's ships are visible only during their own turn and while they place their ships during setup. Between turns, and before the first turn, a handover screen appears during which neither player's ships are visible, so the players can pass the screen without revealing ship locations to each other.
- When a player succesfully hits all squares occupied by their opponent's ships, the game ends and a screen appears congratulating the winning player.

index.js - the entry point for webpack. Loads the page content and the game's event loop.

template.html - largely blank HTML file, which index loads the site's content into.

styles.css - contains all styles for the project.

/UI - contains definitions for the page's UI content, including the game boards (as static objects) and popups/ship placement forms (as dynamically added elements). Also sets up event listeners on UI elements, making use of events from within the game logic.

/UI/ContentBuilder.js - Includes an updated version of the ConstructHTMLFromObject() function of my own design which allows use of JavaScript data attributes. This is used for styling based on whether it is a given player's turn for showing/hiding ships, and the state of a given tile (ship, hit, or, missed).

/Objects - contains object constructors for data and logic of game boards and ships, distinct from the UI representations of these objects. Testing is also included which details the functionality of these objects' methods. There is also a player object which just contains a board and whether the player is human or computer.

/Events - defines the main game loop, including setup, turn order, emitting events which other logic and UI elements listen to to update. Testing is included for most logic processes.

This is refactored from an old version which was poorly organised, with high interactivity between logic and UI. I believe this second version is a significant improvement, however suffers from being overly complex. Overall I am happy with the functioning of the final webpage and hopefully I can apply the lessons learned from this experience to future projects.

Playable at github pages link: https://milesrigby.github.io/odin-battleship-project/
