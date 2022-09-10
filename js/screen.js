export const welcomeScreenElement = document.querySelector("#welcome_screen");
export const userProfileInputScreenElement = document.querySelector(
  "#user_profile_input_screen"
);
export const gameScreenElement = document.querySelector("#game_screen");
export const gameOverScreenElement =
  document.querySelector("#game_over_screen");

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
