const playerRunImage = new Image();
playerRunImage.src = "../assets/player_run.png"; // 1472 * 137

export default class Player {
  constructor(game) {
    this.game = game;
    this.x = 20;
    this.y = 360;
    this.width = 120;
    this.height = 120;
  }

  draw() {
    console.log("player drawed!");

    // this.game.context.drawImage(
    //   playerRunImage,
    //   this.x,
    //   this.y,
    //   this.width,
    //   this.height
    // );

    this.game.context.drawImage(
      playerRunImage,
      184 * (Math.floor(this.game.frame / 4) % 8),
      0,
      184,
      137,
      this.x,
      this.y,
      this.width,
      this.height
    );
  }
}
