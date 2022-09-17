import Game from "./game.js";
import { tryAgain } from "./screen.js";

// for development
// import { gameScreen } from "./screen.js";
// gameScreen();
// const init = new Game();
// init.startGame();

const init = new Game();
init.initstart();

function restart() {
  location.reload();
}
tryAgain(restart);
