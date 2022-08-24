//Declaring variable that will be counting how many times button was clicked
let timesClicked;

//setting variable depending on whether it is already in localStorage or not
if (!localStorage.getItem("counter")) {
  timesClicked = 0;
} else {
  timesClicked = localStorage.getItem("counter");
}

//Function to increase the counter and set it in localStorage and DOM
const increaseNumber = (numberOfClicked, reset) => {
  timesClicked++;
  localStorage.setItem("counter", timesClicked);
  numberOfClicked.textContent = timesClicked;
  //Checking whether to make reset button visible
  if (timesClicked > 5) {
    reset.classList.remove("hidden");
  }
};

//function to reset counter and remove it from local storage
const resetNumber = (reset) => {
  reset.classList.add("hidden");
  timesClicked = 0;
  localStorage.removeItem("counter");
};

export { increaseNumber, resetNumber };
