export const welcomeScreenElement = document.querySelector("#welcome_screen");
export const userProfileInputScreenElement = document.querySelector(
  "#user_profile_input_screen"
);
export const gameScreenElement = document.querySelector("#game_screen");
export const gameOverScreenElement =
  document.querySelector("#game_over_screen");

export const tryAgainButton = document.querySelector("#try_again");

export function tryAgain(restart) {
  tryAgainButton.addEventListener("click", (event) => {
    restart();
  });
}

export function startScreen() {
  userProfileInputScreenElement.style.display = "none";
  gameScreenElement.style.display = "none";
  gameOverScreenElement.style.display = "none";
  welcomeScreenElement.style.display = "flex";
}
export function userProfileScreen() {
  userProfileInputScreenElement.style.display = "flex";
  gameScreenElement.style.display = "none";
  gameOverScreenElement.style.display = "none";
  welcomeScreenElement.style.display = "none";
}
export function gameScreen() {
  userProfileInputScreenElement.style.display = "none";
  gameScreenElement.style.display = "flex";
  gameOverScreenElement.style.display = "none";
  welcomeScreenElement.style.display = "none";
}

export function gameOverScreen() {
  userProfileInputScreenElement.style.display = "none";
  gameScreenElement.style.display = "none";
  gameOverScreenElement.style.display = "flex";
  welcomeScreenElement.style.display = "none";
}

export function gameOverPrintResult(result) {
  const gameOverResult = gameOverScreenElement.querySelector("h4");
  gameOverResult.innerHTML =
    result.name +
    " <br/> | Game Overed in Round: " +
    result.level +
    " | in " +
    result.time +
    " Minute | <br/>  Accuracy: " +
    result.accuracy +
    "<br/>   Correctly typed Characters: " +
    result.correct_char +
    "<br/>   Total typed Characters: " +
    result.total_char;
}
