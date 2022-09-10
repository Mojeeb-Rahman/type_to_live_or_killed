const backgroundImage = new Image();
backgroundImage.src = "../assets/sprite_pack.png"; // 8192 * 8192

export default class Background {
  constructor(game) {
    this.game = game;
    this.x = 0;
    this.y = 0;
    this.width = 25;
    this.height = 25;
  }

  draw() {
    console.log("Background drawed!");

    // this.game.context.save();

    // // Rotate around origin of canvas
    // this.game.context.rotate(Math.PI / 4);

    // this.game.context.drawImage(
    //   backgroundImage,
    //   this.x,
    //   this.y,
    //   this.width,
    //   this.height
    // );

    this.game.context.drawImage(
      backgroundImage,
      1720,
      3350,
      90,
      90,
      0,
      0,
      this.width,
      this.height
    );

    this.game.context.drawImage(
      backgroundImage,
      1720,
      3350,
      125,
      125,
      25,
      0,
      this.width,
      this.height
    );

    this.game.context.drawImage(
      backgroundImage,
      1720,
      3350,
      90,
      90,
      0,
      25,
      this.width,
      this.height
    );

    this.game.context.drawImage(
      backgroundImage,
      2500,
      3375,
      125,
      125,
      this.width,
      this.height,
      this.width,
      this.height
    );

    // Restores transformations and styles back to the last state saved
    // this.game.context.restore(); //
  }
}
