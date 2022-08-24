import { openPopUp, closePopUp } from "./pop-up.js";

const button = document.querySelector(".btn");
const popUp = document.querySelector(".pop-up");
const overlay = document.querySelector(".overlay");
const close = document.querySelector(".close-pop-up");

button.addEventListener("click", () => {
  openPopUp(popUp, overlay);
});

close.addEventListener("click", () => {
  closePopUp(popUp, overlay);
});
overlay.addEventListener("click", () => {
  closePopUp(popUp, overlay);
});
