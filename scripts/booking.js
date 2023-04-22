/********* create variables *********/
let costPerDay = 40; //cost per day variable
let numDaysSelected = 0; //number of days selected variable

const clearDaysButton = document.getElementById("clear-button");
const daysButtons = document.querySelectorAll(".day-selector li");

/********* colour change days of week *********/
// when the day buttons are clicked, we will apply the "clicked" class to that element, and update any other relevant variables. Then, we can recalculate the total cost.
// added challenge: don't update the dayCounter if the same day is clicked more than once. hint: .classList.contains() might be helpful here!

daysButtons.forEach(button => {
    button.addEventListener("click", () => {
        if (!button.classList.contains("clicked")) {
        button.classList.add("clicked");
        numDaysSelected++;
    } else {
        button.classList.remove("clicked");
        numDaysSelected--;
    }
    
    const calculatedCost = document.getElementById("calculated-cost");
    calculatedCost.innerHTML = `${costPerDay * numDaysSelected}`;
    });
});

/********* clear days *********/
// when the clear-button is clicked, the "clicked" class is removed from all days, any other relevant variables are reset, and the calculated cost is set to 0.

clearDaysButton.addEventListener("click", () => {
    daysButtons.forEach(button => {
    button.classList.remove("clicked");
    });
    numDaysSelected = 0;
    const calculatedCost = document.getElementById("calculated-cost");
    calculatedCost.innerHTML = "0";
});

/********* change rate *********/
// when the half-day button is clicked, set the daily rate to $20, add the "clicked" class to the "half" element, remove it from the "full" element, and recalculate the total cost.

// when the full-day button is clicked, the daily rate is set back to $35, the clicked class is added to "full" and removed from "half", and the total cost is recalculated.
const halfButton = document.getElementById("half");
const fullButton = document.getElementById("full");

halfButton.addEventListener("click", () => {
    costPerDay = 20;
    halfButton.classList.add("clicked");
    fullButton.classList.remove("clicked");
    const calculatedCost = document.getElementById("calculated-cost");
    calculatedCost.innerHTML = `${costPerDay * numDaysSelected}`;
});

fullButton.addEventListener("click", () => {
    costPerDay = 40;
    fullButton.classList.add("clicked");
    halfButton.classList.remove("clicked");
    const calculatedCost = document.getElementById("calculated-cost");
    calculatedCost.innerHTML = `${costPerDay * numDaysSelected}`;
});

/********* calculate *********/
// when a calculation is needed, set the innerHTML of the calculated-cost element to the appropriate value
const calculatedCost = document.getElementById("calculated-cost");
calculatedCost.innerHTML = "0";


