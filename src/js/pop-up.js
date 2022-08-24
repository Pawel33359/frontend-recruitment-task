// removing hidden classes so that pop-up will be visible
const openPopUp = (popUp, overlay) => {
  popUp.classList.remove("hidden");
  overlay.classList.remove("hidden");
};
// adding hidden classes so that pop-up will be invisible
const closePopUp = (popUp, overlay) => {
  popUp.classList.add("hidden");
  overlay.classList.add("hidden");
};

export { openPopUp, closePopUp };
