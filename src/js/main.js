// IMPORTS
import { openPopUp, closePopUp } from "./pop-up.js";
import { increaseNumber, resetNumber } from "./counter.js";

// Declaring DOM Elements to use later
const button = document.querySelector(".btn");
const popUp = document.querySelector(".pop-up");
const overlay = document.querySelector(".overlay");
const close = document.querySelector(".close-pop-up");
const numberOfClicked = document.getElementById("num-clicked");
const reset = document.getElementById("reset");

// Making button open pop-up and increase number of times clicked
button.addEventListener("click", () => {
  openPopUp(popUp, overlay);
  increaseNumber(numberOfClicked, reset);
});

// Making pop-up close when clicking X button or overlay
close.addEventListener("click", () => {
  closePopUp(popUp, overlay);
});
overlay.addEventListener("click", () => {
  closePopUp(popUp, overlay);
});

// Reseting number of times button was clicked and closing pop-up
reset.addEventListener("click", () => {
  resetNumber(reset);
  closePopUp(popUp, overlay);
});
