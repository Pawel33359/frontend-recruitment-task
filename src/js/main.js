import { openPopUp, closePopUp } from "./pop-up.js";
import { increaseNumber, resetNumber } from "./counter.js";

const button = document.querySelector(".btn");
const popUp = document.querySelector(".pop-up");
const overlay = document.querySelector(".overlay");
const close = document.querySelector(".close-pop-up");
const numberOfClicked = document.getElementById("num-clicked");
const reset = document.getElementById("reset");

button.addEventListener("click", () => {
  openPopUp(popUp, overlay);
  increaseNumber(numberOfClicked, reset);
});

close.addEventListener("click", () => {
  closePopUp(popUp, overlay);
});
overlay.addEventListener("click", () => {
  closePopUp(popUp, overlay);
});

reset.addEventListener("click", () => {
  resetNumber(reset);
  closePopUp(popUp, overlay);
});
