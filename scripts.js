const cardNumberBox = document.querySelector(".card-number");
const cardNameBox = document.querySelector(".card-name");
const monthBox = document.querySelector(".month");
const yearBox = document.querySelector(".year");
const cvvBox = document.querySelector(".cvv");
const cardholderNameInput = document.getElementById("cardholder-name");
const cardNumberInput = document.getElementById("card-number");
const cardExpMonth = document.getElementById("month");
const cardExpYear = document.getElementById("year");
const cvv = document.getElementById("cvv");
const submitBtn = document.querySelector(".submit-btn");
const submitedContainer = document.querySelector(".submited-container");
const form = document.querySelector(".form");
const cardNameError = document.querySelector(".card-name-error");
const cardNumberError = document.querySelector(".card-number-error");
const monthError = document.querySelector(".month-error");
const yearError = document.querySelector(".year-error");
const cvvError = document.querySelector(".cvv-error");
const continueBtn = document.querySelector(".continue-btn");

cardholderNameInput.addEventListener("keyup", (e) => {
  let cardNameValue = cardholderNameInput.value;
  let key = e.key;
  let keyLetters = key.match(/^[A-za-z ]*$/);
  if (cardNameValue.length === 0) {
    cardNameError.innerHTML = "Can't be blank!";
  } else if (keyLetters) {
    cardNameBox.innerHTML = cardNameValue;
  } else {
    cardholderNameInput.setAttribute("disabled", "");
    cardNameError.innerHTML = "Please use only letters!";
  }
});
cardNumberInput.addEventListener("keyup", (e) => {
  let cardNumberValue = cardNumberInput.value;
  let key = e.key;
  let keyNumbers = key.match(/^[0-9 ]*$/);
  if (cardNumberValue.length === 0) {
    cardNumberError.innerHTML = "Can't be blank!";
  } else if (keyNumbers) {
    cardNumberBox.innerHTML = cardNumberValue;
  } else if (key === "Backspace") {
    cardNumberInput.setAttribute("enabled", "");
  } else {
    cardNumberInput.setAttribute("disabled", "");
    cardNumberError.innerHTML = "Please use only numbers!";
  }
});
cardNumberInput.addEventListener("input", (e) => {
  e.target.value = e.target.value = e.target.value
    .replace(/[^\dA-Z]/g, "")
    .replace(/(.{4})/g, "$1 ")
    .trim();
});
cardExpMonth.addEventListener("input", (e) => {
  let value = e.target.value;
  let valueNumbers = value.match(/^[0-9 ]*$/);
     if (value === "") {
    monthError.innerHTML = "Can't be blank!";
          } else if (valueNumbers) {
    monthBox.innerHTML = value;
  } else {
    monthError.innerHTML = "Can't be blank!";
    cardExpMonth.setAttribute("disabled", "");
  }
});
cardExpYear.addEventListener("input", (e) => {
  let value = e.target.value;
  let valueNumbers = value.match(/^[0-9 ]*$/);
  if (value === "") {
    yearError.innerHTML = "Can't be blank!";
  } else if (valueNumbers) {
    yearBox.innerHTML = valueNumbers;
  } else {
    yearError.innerHTML = "Can't be blank!";
    cardExpYear.setAttribute("disabled", "");
  }
});
cvv.addEventListener("input", (e) => {
  let value = e.target.value;
  let valueNumbers = value.match(/^[0-9 ]*$/);
  if (value === "") {
    cvvError.innerHTML = "Please enter cvv!";
  } else if (valueNumbers) {
    cvvBox.innerHTML = valueNumbers;
  } else {
    cvvError.innerHTML = "Please enter cvv!";
    cvv.setAttribute("disabled", "");
  }
});
submitBtn.addEventListener("click", () => {
  if (cardholderNameInput.value.length <= 0) {
    cardNameError.innerHTML = "Please enter your name!";
  } else if (cardNumberInput.value.length <= 0) {
    cardNumberError.innerHTML = "Please enter your card number!";
  } else if (cardExpMonth.value.length <= 0) {
    monthError.innerHTML = "Please enter month!";
  } else if (cardExpYear.value.length <= 0) {
    yearError.innerHTML = "Please enter year!";
  } else if (cvc.value.length <= 0) {
    cvvError.innerHTML = "Please enter your cvv!";
  } else {
    submitedContainer.style.display = "block";
    form.style.display = "none";
  }
});
continueBtn.addEventListener("click", () => {
  submitedContainer.style.display = "none";
  continueBtn.style.width = "100%";
  form.style.display = "block";
});

continueBtn.addEventListener("click", function () {
    event.preventDefault();
    thankYouSection.classList.add("hidden");
    form.classList.remove("hidden");
    nameOnCard.innerHTML = cardholder.placeholder;
    numOnCard.innerHTML = cardNumber.placeholder;
    expMM.innerHTML = "00";
    expYY.innerHTML = "0000";
    cvvDisplay.innerHTML = "000";
    cardholder.value = "";
    cardNumber.value = "";
    expiry[0].value = "";
    expiry[1].value = "";
    cvv.value = "";
    expiryErrorMsg.innerHTML = "";
  });
  