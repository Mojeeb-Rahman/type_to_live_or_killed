import {
  userProfileScreen,
  gameOverScreen,
  gameOverPrintResult,
} from "./screen.js";
import Profile from "./profile.js";
import Player from "./player.js";
import Background from "./background.js";
import Enemy from "./enemy.js";
import Level from "./level.js";
import { isKeySafe } from "./keySafeType.js";

export default class Game {
  constructor() {
    this.profile = new Profile(this);
    this.player = new Player(this);
    this.level = new Level(this);
    this.background = new Background(this);
    this.canvasElement = document.querySelector("canvas");
    this.context = this.canvasElement.getContext("2d");
  }

  reset() {
    this.score = 3; // live and will decrease
    this.frame = 0;
    this.activeEnemy = null;
    this.currentLevel = 1;
    this.correctlyType = 1;
    this.totalTyped = 1;
    this.enemies = [];
  }

  levelUp() {
    this.currentLevel += 1;
    this.addEnemy();
  }

  addEnemy() {
    let levelConfig = this.level.getLevelConfig(this.currentLevel - 1);

    levelConfig.forEach((config) => {
      const enemy = new Enemy(this, config);
      this.enemies.push(enemy);
    });
  }

  lose() {
    const time = Math.round(this.frame / 60 / 60);
    clearInterval(this.intervalId);
    gameOverScreen();
    gameOverPrintResult({
      name: this.profile.p_name,
      level: this.currentLevel,
      time: time,
      correct_char: this.correctlyType - 1,
      total_char: this.totalTyped - 1,
      time: time,
      accuracy: Math.round((this.correctlyType * 100) / this.totalTyped) + " %",
    });
  }

  runLogic() {
    for (const enemy of this.enemies) {
      enemy.runLogic();
    }

    if (this.score <= 0) {
      this.lose();
    }
    if (this.enemies.length === 0 && this.score > 0) {
      this.levelUp();
    }
  }
  typeControls(event) {
    if (this.activeEnemy != null) {
      if (isKeySafe(event.key)) {
        this.activeEnemy.keyType(event.key);
      }
    }
  }
  movementControls(event) {
    switch (event.code) {
      case "ArrowUp":
        this.player.y -= 10;
        this.player.setAction("roll");
        break;
      case "ArrowDown":
        this.player.y += 10;
        this.player.setAction("roll");
        break;
      case "ArrowRight":
        this.player.x += 10;
        this.player.setAction("run_right");
        break;
      case "ArrowLeft":
        this.player.x -= 10;
        this.player.setAction("run_left");
        break;
      case "Space":
        this.player.setAction("crouch");
        break;
    }
  }

  enableControls() {
    window.addEventListener("keydown", (event) => {
      this.movementControls(event);
      this.typeControls(event);
    });
  }

  draw() {
    this.frame++;
    this.context.clearRect(0, 0, 1000, 500);
    this.background.draw();
    this.player.draw();
    for (const enemy of this.enemies) {
      enemy.draw();
    }
  }

  startGame() {
    // fullScreen(bodyElement);
    this.reset();
    this.addEnemy();
    this.enableControls();
    this.intervalId = setInterval(() => {
      this.loop();
    }, 1000 / 60);
  }

  loop() {
    this.runLogic();
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
