// const backgroundImage = new Image();
// backgroundImage.src = "../assets/sprite_pack.png"; // 8192 * 8192

export default class Background {
  constructor(game) {
    this.game = game;
    this.x = 0;
    this.y = 0;
    this.width = 25;
    this.height = 25;
  }

  drawHeaderInfo() {
    this.game.context.fillStyle = "rgba(170, 20, 20, 0.644)";
    this.game.context.fillRect(60, 0, 880, 40);
    this.game.context.fillRect(60, 470, 880, 30);
    this.game.context.fill();

    // Writing on canvas
    this.game.context.font = "14px monospace";
    this.game.context.fillStyle = "#fff";
    this.game.context.fillText(
      this.game.profile.p_name +
        " | Type Language: " +
        this.game.profile.p_languageToType,
      65,
      25
    );
    this.game.context.fillText(this.game.score + " Live", 850, 25);

    this.game.context.fillText(
      Math.round((this.game.correctlyType * 100) / this.game.totalTyped) +
        " % Accuracy | Round: " +
        this.game.currentLevel,
      580,
      25
    );

    this.game.context.font = "12px monospace";
    this.game.context.fillText(
      "Designed and Developed by: Mojeeb Rahman Sedeqi (2022), Test Project in Ironhack fullstack web development bootcamp",
      65,
      485
    );

    this.game.context.fill();

    // this.game.context.fillStyle = "rgba(66, 173, 16, 0.644)";
    // this.game.context.fillRect(this.x - 40, this.y + this.height, 200, 30);
    // this.game.context.fill();
  }

  draw() {
    this.drawHeaderInfo();
  }
}
