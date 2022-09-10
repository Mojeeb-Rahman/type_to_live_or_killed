import { userProfileScreen } from "./screen.js";
import Profile from "./profile.js";
import Player from "./player.js";
import Background from "./background.js";

export default class Game {
  constructor() {
    this.profile = new Profile(this);
    this.player = new Player(this);
    this.background = new Background(this);
    this.canvasElement = document.querySelector("canvas");
    this.context = this.canvasElement.getContext("2d");

    this.frame = 0;
  }

  draw() {
    this.frame++;
    this.context.clearRect(0, 0, 1000, 500);
    this.background.draw();
    this.player.draw();
  }

  startGame() {
    // this.reset();
    this.intervalId = setInterval(() => {
      this.loop();
    }, 1000 / 60);
  }

  loop() {
    // this.runLogic();
    this.draw();
  }

  initRunLogic() {
    setTimeout(() => {
      userProfileScreen();
    }, 3000);
  }
  initstart() {
    window.addEventListener("load", this.initRunLogic);
  }
}
