const playerRunRightImage = new Image();
playerRunRightImage.src = "../assets/player_run_right.png"; // 1472 * 137

const playerRunRightWidth = 1472 / 8;
const playerRunRightHeight = 137;

const playerRunLeftImage = new Image();
playerRunLeftImage.src = "../assets/player_run_left.png"; // 1472 * 137

const playerRunLeftWidth = 1472 / 8;
const playerRunLeftHeight = 137;

const playerAttackImage = new Image();
playerAttackImage.src = "../assets/player_attack.png"; // 1472 * 137

const playerAttackWidth = 736 / 4;
const playerAttackHeight = 137;

const playerCrouchImage = new Image();
playerCrouchImage.src = "../assets/player_crouch.png"; // 1472 * 137

const playerCrouchWidth = 736 / 4;
const playerCrouchHeight = 137;

const playerRollImage = new Image();
playerRollImage.src = "../assets/player_roll.png"; // 1472 * 137

const playerRollWidth = 736 / 4;
const playerRollHeight = 137;

export default class Player {
  constructor(game) {
    this.game = game;
    this.x = 25;
    this.y = 150;
    this.width = 100;
    this.height = 100;
    this.action = "crouch";
  }

  setAction(action) {
    this.action = action;
  }

  drawAttack() {
    this.game.context.drawImage(
      playerAttackImage,
      playerAttackWidth * (Math.floor(this.game.frame / 20) % 4),
      0,
      playerAttackWidth,
      playerAttackHeight,
      this.x,
      this.y,
      this.width,
      this.height
    );
  }

  drawRunRight() {
    this.game.context.drawImage(
      playerRunRightImage,
      playerRunRightWidth * (Math.floor(this.game.frame / 20) % 4),
      0,
      playerRunRightWidth,
      playerRunRightHeight,
      this.x,
      this.y,
      this.width,
      this.height
    );
  }

  drawRunLeft() {
    this.game.context.drawImage(
      playerRunLeftImage,
      playerRunLeftWidth * (Math.floor(this.game.frame / 20) % 4),
      0,
      playerRunLeftWidth,
      playerRunLeftHeight,
      this.x,
      this.y,
      this.width,
      this.height
    );
  }

  drawCrouch() {
    this.game.context.drawImage(
      playerCrouchImage,
      playerCrouchWidth * (Math.floor(this.game.frame / 20) % 4),
      0,
      playerCrouchWidth,
      playerCrouchHeight,
      this.x,
      this.y,
      this.width,
      this.height
    );
  }

  drawRoll() {
    this.game.context.drawImage(
      playerRollImage,
      playerRollWidth * (Math.floor(this.game.frame / 20) % 4),
      0,
      playerRollWidth,
      playerRollHeight,
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
      case "run_right":
        this.drawRunRight();
        break;
      case "run_left":
        this.drawRunLeft();
        break;
      case "crouch":
        this.drawCrouch();
        break;
      case "roll":
        this.drawRoll();
        break;
    }
  }
}
