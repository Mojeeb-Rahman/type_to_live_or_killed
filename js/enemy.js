import { lang } from "./lang.js";

const enemyAttackImage = new Image();
enemyAttackImage.src = "../assets/enemy_attack.png"; //

const spriteAttackWidth = 518 / 7;
const spriteAttackHeight = 74;

const enemyIdleImage = new Image();
enemyIdleImage.src = "../assets/enemy_idle.png"; //

const spriteIdleWidth = 256 / 4;
const spriteIdleHeight = 64;

const enemyWalkImage = new Image();
enemyWalkImage.src = "../assets/enemy_walk.png"; //

const spriteWalkWidth = 512 / 8;
const spriteWalkHeight = 64;

export default class Enemy {
  constructor(game, config) {
    this.game = game;
    this.x = config.x;
    this.y = config.y;
    this.width = 80;
    this.height = 80;
    this.action = "idle";
    this.active = false;
    this.allowType = false;
    this.speed = this.game.profile.p_goalWPM;

    this.correctTyped = "";
    this.correctIndex = 0;

    this.selectForType();
  }

  selectForType() {
    const languageToType = this.game.profile.p_languageToType;
    const languagePack = lang[languageToType];

    // const languagePack = lang["English"];
    // console.log(languagePack);

    this.wordsToType =
      languagePack[Math.floor(Math.random() * languagePack.length)];

    console.log(this.wordsToType);
  }

  setAction(action) {
    this.action = action;
  }

  keyType(key) {
    this.game.totalTyped += 1;
    if (this.wordsToType[this.correctIndex] === key) {
      this.correctTyped += key;
      this.correctIndex += 1;
      this.game.correctlyType += 1;
      if (this.wordsToType === this.correctTyped) {
        this.disappear();
        if (this.game.enemies.length === 0) {
          this.game.levelUp();
        }
      }
    }
  }

  checkForInstersection(item) {
    return (
      this.x + this.width > item.x &&
      this.x < item.x + item.width &&
      this.y + this.height > item.y &&
      this.y < item.y + item.height
    );
  }

  disappear() {
    this.game.activeEnemy = null;
    const index = this.game.enemies.indexOf(this);
    this.game.enemies.splice(index, 1);
  }

  setToAttack() {
    this.setAction("attack");
    this.active = true;
    this.game.player.setAction("attack");
  }
  setToWalk() {
    this.setAction("walk");
    this.active = true;
    this.x -= this.speed;
  }

  runLogic() {
    const isIntersectingWithPlayer = this.checkForInstersection(
      this.game.player
    );
    if (isIntersectingWithPlayer) {
      if (this.game.activeEnemy === null) {
        this.game.activeEnemy = this;
      }
      if (this.game.activeEnemy === this) {
        // console.log(this.game.activeEnemy);
        this.allowType = true;
        this.setToAttack();
      }
      if (this.game.activeEnemy != this) {
        this.setToWalk();
      }
    } else if (!isIntersectingWithPlayer && this.active) {
      this.setToWalk();
      this.allowType = false;
    } else {
      this.setToWalk();
    }

    const isIntersectingWithEdgeOfScreen = this.x < 0;
    if (isIntersectingWithEdgeOfScreen) {
      this.game.score -= 1;

      this.disappear();
    }
  }
  drawActiveEnemy() {
    this.game.context.fillStyle = "rgba(170, 20, 20, 0.644)";
    this.game.context.fillRect(this.x - 120, this.y - 20, 340, 30);
    this.game.context.fill();

    // Writing on canvas
    this.game.context.font = "16px monospace";
    this.game.context.fillStyle = "#fff";
    this.game.context.fillText(this.wordsToType, this.x - 100, this.y);
    this.game.context.fill();

    // this.game.context.fillStyle = "rgba(66, 173, 16, 0.644)";
    // this.game.context.fillRect(this.x - 40, this.y + this.height, 200, 30);
    // this.game.context.fill();

    // Writing on canvas
    this.game.context.font = "16px monospace";
    this.game.context.fillStyle = "#000";
    this.game.context.fillText(this.correctTyped, this.x - 100, this.y);
    this.game.context.fill();
  }

  drawAttack() {
    this.game.context.drawImage(
      enemyAttackImage,
      spriteAttackWidth * (Math.floor(this.game.frame / 20) % 7),
      0,
      spriteAttackWidth,
      spriteAttackHeight,
      this.x,
      this.y,
      this.width,
      this.height
    );
  }

  drawWalk() {
    this.game.context.drawImage(
      enemyWalkImage,
      spriteWalkWidth * (Math.floor(this.game.frame / 20) % 8),
      0,
      spriteWalkWidth,
      spriteWalkHeight,
      this.x,
      this.y,
      this.width,
      this.height
    );
  }

  drawIdle() {
    this.game.context.drawImage(
      enemyIdleImage,
      spriteIdleWidth * (Math.floor(this.game.frame / 20) % 4),
      0,
      spriteIdleWidth,
      spriteIdleHeight,
      this.x,
      this.y,
      this.width,
      this.height
    );
  }

  draw() {
    switch (this.action) {
      case "attack":
        this.drawAttack();
        break;
      case "walk":
        this.drawWalk();
        break;
      case "idle":
        this.drawIdle();
        break;
    }
    if (this.game.activeEnemy === this) {
      this.drawActiveEnemy();
    }
  }
}
