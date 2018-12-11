# Project Roof Dust
## Blokus Leaderboard

Research & Development project to create Blokus Leaderboard for internal Basement culture.

## Features

* Basement team can log Blokus game stats

## Dependencies

(Ruby? Node? Grunt? Etc.?)

## Installation/Getting Started

Install project description here. For example:

1. Ensure that Node.js, jekyll and bower are installed and match the dependencies above.
2. Run `bundle install` to ensure the required ruby dependencies are installed.
3. Run `npm install` to ensure the required dependencies are installed.
4. Run `bower install` to ensure required web dependencies are installed.
5. Run `gulp` and you'll have a new Jekyll site generated for you and displayed in your browser. Neato. If you want to run it with production settings, just add `--prod`.

## Running/Development

For example:

* `ember serve`
* Visit app at [http://localhost:80](http://localhost:80)

## Release Versions

### 1.0
* Data collection w/minimal styling

### 2.0
* Leaderboard display with badges

### 3.0
* Player profile page with stats
* Game archive (by date?)

---

Data collection:
* Date of game
* Starting position (1-4, use input order to define)
* Player's name (drop down, prepopulated w/basement employees manually or dynamic based on user accounts?)
* Win? (Check box) *To indicate a tie between winners, check here if there are 2 boxes marked, if there are ties among 2-4th place, can be calculated via Squares Left*
* Number of Pieces Left (0-21)
* Number of Squares Left (0-89) *(Find lowest possible number of moves)*
* True/False: 1 Piece Last?
* Color of pieces you played with

Fun data collection:
* Quotables/Notes about game
* Game duration
* Overall game rating *(Group consensus or allow all players to add rating)*
* Upload image of the game board

Data to Display/Calculate:
* Overall Leaderboard: Number of Wins / Number of Games Played = overall % ranking 
* Last Date Played
* Win/Loss Streaks *(For example: W5, L3)*
* Color Played with most frequently/Favorite
* Color you peform best with (Lucky color)
* Color that wins/loses the most (Office overall and/or individual stat)
* Average number of pieces left
* Fewest pieces left
* Most pieces left 
* Average number of squares left
* Fewest squares left
* Most squares left 
* Day of week played most (Office overall and/or individual stat)
* Day of week with the most wins (Individual)
* Average game duration (Office overall and/or individual stat)
* Total game time (Office overall and/or individual stat)
* Number of games possible for year (need # of days in office x 2 boards)
* Number of games actually played (Office overall and/or individual stat)
* overall game satisfaction
* Starting position vs wins/losses
* Average position go out (no more moves) on

##Caveats/Things To Note

* URL? Short Link a la jackbox.tv. Bit.ly?
* Ability to edit?
* How to handle logins
* Minimum # of games to play before ranking
* Badges for achievements/milestones
  * Number of wins over X
  * % won over X 
  * 1st game won with 1 piece last
  * Win after loss streak (Comeback Badge/Robert Downey Jr)
  * Always 2nd (Bridesmaid)
