import { gameScreen, gameScreenElement } from "./screen.js";

class Profile {
  constructor(game) {
    this.game = game;
    this.profileDataForm = document.querySelector("#profile_data_form");
    this.AddEventHundler();
    this.p_name;
    this.p_age;
    this.p_gender;
    this.p_languageToType;
    this.p_goalWPM;
  }
  // printProfile() {
  //   console.log("ok");
  //   const profileHeader = gameScreenElement.querySelector("#result_header");
  //   profileHeader.innerHTML = `
  //   <span>${
  //     this.p_gender === "1" ? "Mr. " + this.p_name : "Mrs. " + this.p_name
  //   }</span>
  //   <span>  |  ${this.p_age} Years  | </span>
  //   <span>Typing Language: ${this.p_languageToType}</span>`;
  // }

  hundleProfileDataSubmit(event) {
    event.preventDefault();
    const formData = new FormData(this.profileDataForm);
    this.p_name = formData.get("name");
    this.p_goalWPM = Number(formData.get("wpm"));
    this.p_age = formData.get("age");
    this.p_gender = formData.get("gender");
    this.p_languageToType = formData.get("type_language");

    gameScreen();
  }

  AddEventHundler() {
    this.profileDataForm.addEventListener("submit", (event) => {
      this.hundleProfileDataSubmit(event);
      // this.printProfile();
      this.game.startGame();
    });
  }
  removeEventHundler() {}
}

export default Profile;
