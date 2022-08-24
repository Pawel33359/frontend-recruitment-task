const openPopUp = (popUp, overlay) => {
  popUp.classList.remove("hidden");
  overlay.classList.remove("hidden");
};
const closePopUp = (popUp, overlay) => {
  popUp.classList.add("hidden");
  overlay.classList.add("hidden");
};

export { openPopUp, closePopUp };
