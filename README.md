# odin-battleship-project

The popular boardgame Battleship, with game objects coded using test-driven development as part of The Odin Project.

Features:
- Game board is a 10*10 grid of initially white-blue tiles, representing unknown water.
- For computers, ships are randomly placed.
- For players, ships are placed using a form which takes an x and y position, as well as one of four orientations (N/S/E/W) for each of five ship lengths - 2, 3, 3, 4, 5.
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

/UI - contains definitions for the page's UI content, including the game boards and popups/ship placement forms. Also sets up event listeners on UI elements and provides public controlling functions for the UI.

/UI/ContentBuilder.js - Includes an updated version of the ConstructHTMLFromObject() function which allows use of JavaScript data attributes. This is used for styling based on whether it is a given player's turn for showing/hiding ships.

/Objects - contains object constructors for data and logic of game boards and ships, distinct from the UI representations of these objects. Testing is also included which details the functionality of these objects' methods. There is also a player object which just contains a board and whether the player is human or computer.

/Events - defines the main game loop, including setup, turn order, and tells the UI when to display different objects or update. Takes in the controlling funtions from the UI via dependency injection.

The game logic and UI are tightly coupled and poorly organised. I plan to fix these issues through refactoring before continuing the Odin Project.

Playable at github pages link: https://milesrigby.github.io/odin-battleship-project/
