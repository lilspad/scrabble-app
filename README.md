# React App - Scrabble | *Archive*

*This project is now archived. I bit more than I could chew and didn't have the skills to make something of this scale at the time I attempted it.*

## About

I took on this project to improve my React skills. After completing a codecademy course on React and some open source tutorials, I felt like I was missing something and needed to learn React first hand. 

This is a classic Scrabble game as we all know and love it. 

## Process

### Creating the components

Having only just learnt React basics at the start of this project, creating the initial components was essentially a trial session for me. I had to really consider relationships between each game element and how to render them altogether as one big happy family. I quickly picked up on the mechanics and finally started to understand why I even needed state and what 'this' actually means. It felt like a real noob moment. 

Once I rendered all the components I spent a lot of time in style.css, as I always do. I wanted to achieve a warm and peaceful look for the page to accommodate the player without unnecessary distraction and build a thought-friendly environment. 

### Managing state

State has been and still is a learning curve for me. I'm still figuring out where it is more efficient to set state and where I should just change the components props. This project is helping me get familiar with the component lifecycle and while building this app I inevitably come across syntax I didn't understand before, but now makes so much more sense as it offers solutions to my issues. 

## Where it is

18th Jan | Initial display

- Components are set up, no interactivity
- Initial styling complete

24th Jan | Player is able to:
 
 - draw up to 7 tiles
 - select and return tiles on the rack
 - swap all 7 tiles (only once)
 - move a selected tile around the board
 - drop and pick up tiles on the board
 - Turn blank into a chosen letter
 
 ![ezgif com-gif-maker](https://user-images.githubusercontent.com/76661777/214288966-17a839dc-29d7-44df-ad15-4056078d6dc0.gif)

Development so far has been largely commited to the Rack component and managing tile selection.


16th Feb | Placement Checks

 - in order to play their turn, a player has to:
 - place a tile in the center of the board
 - have all tiles on the board connected to *another tile* (either by row or column)

Also named the app Wildwood, inspired by a randomly generated heroku app name :)

## Where it's going

To end up with a fully functioning Scrabble app, I will need to:

In general

- Create a welcome screen and gameplay guide, let players enter their name
- Manage turns
- Players rack should only be visible to the player; 
  - Hosting this game on one screen only, I'm planning to alert the player to pass the screen to their opponent at the end of each turn, then display the current players rack. 
  - In the future I will definitely want to try and create a lobby for players to join and play on their own screens, but right now that feels very challenging and I want to complete the game first
- Update score at the end of each turn

On the board

✔ Define relationships between all the cells, in order to make sure all the tiles are in a word, horizontally or vertically and touch another word
- Define a word so that DW and TW can update score accordingly
- Import data so that every word can be chcecked against a library of words

✔ Check that the first ~~word~~ tile on board touches centre cell

On the rack

- Allow player to change the order of their tiles
- 'Play' button that will check the players word is valid, and end the turn
- Possibly a 'Help' button, I don't really know how difficult it would to intorudce an AI that could check all the tiles and combine them into a word, but I will defintely give it a go once the rest of the game is complete
