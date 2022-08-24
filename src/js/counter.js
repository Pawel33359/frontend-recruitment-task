let timesClicked;

if (!localStorage.getItem("counter")) {
  timesClicked = 0;
} else {
  timesClicked = localStorage.getItem("counter");
}

const increaseNumber = (numberOfClicked, reset) => {
  timesClicked++;
  localStorage.setItem("counter", timesClicked);
  numberOfClicked.textContent = timesClicked;
  if (timesClicked > 5) {
    reset.classList.remove("hidden");
  }
};

const resetNumber = (reset) => {
  reset.classList.add("hidden");
  timesClicked = 0;
  localStorage.removeItem("counter");
};

export { increaseNumber, resetNumber };
