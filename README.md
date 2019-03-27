# legendary-enigma
Whack A Mole Game


Idea

Two Algorithms

1. setupGame
  a. drawGrid
    This draws in the grid that the game will be played in (start with a 3x3 grid).
  b. scoreAndTime
    This keeps track of score (1 point per mole) and the time (1 minute).
2. drawMoles
  a. moleClicked
    This checks to see if a mole was clicked on and checks to see if it is a good or bad mole.
  b. goodMole
    Generates a mole that is a good mole (+1 point if you click on it).
  c. badMole
    Generates a mole that is bad (-1 point if you click on it).
    
    
    
    
    
    Notes
    
    1. There can only be one mole per square.
    2. Stick to MVP and only go 3x3 unless necessary to complete requirements.
    3. Make sure to write the score at the top of the page.
    4. We don't need a json, just assign each square a value.
      1|2|3
      -----
      4|5|6
      -----
      7|8|9
