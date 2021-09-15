const dateOfBirth = document.querySelector("#date-of-birth");
const luckyNumber = document.querySelector("#lucky-number");
const checkButton = document.querySelector("#calculate-number");
const displayMessage = document.querySelector("#output-container");

const calculateSum = (dob) => {
  let sum = 0;
  dob = dob.replaceAll("-", "");
  for (let digit of dob) {
    sum = sum + Number(digit);
  }
  return sum;
};

const checkIsNumberLucky = (sumOfDate, numberToCheck) => {
 
  if (sumOfDate % numberToCheck === 0) {
    return showMessage(`${numberToCheck} is a lucky number `);
  }
  showMessage(`${numberToCheck} is not that lucky `);
};

const showMessage = (message) => {
  displayMessage.innerText = message;
};

checkButton.addEventListener("click", () => {
  const dob = dateOfBirth.value;
  const numberToCheck = luckyNumber.value;
  if (dob && numberToCheck) {
    const sumOfDate = calculateSum(dob);
    checkIsNumberLucky(sumOfDate, numberToCheck);
  } else {
    showMessage("Please enter both the fields");
  }
});