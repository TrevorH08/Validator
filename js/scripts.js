function validator(e){
  let eString = e.toString();
  console.log(typeof(eString));
  let eSum = 0
  for (i=0; i < eString.length; i++) {
    eSum += parseInt(eString[i]);
    console.log(eString[i], eSum)
    if (eSum >= 10) {
      eSum -= 10
      console.log("subtracted. New Value: " + eSum);
    }
  }
  let validOut
  if (eSum === 0) {
    validOut = "Credit card is VALID"
  } else {
    validOut = "Credit card is NOT VALID"
  }

  return validOut;
}

//turn the 16 digit num into a 16 char string
// 

function formHandler(event) {
  console.log("handler started")
  event.preventDefault();
  const cardNumber = document.getElementById("number1").value;
  let result = validator(cardNumber)
  document.getElementById("result").innerText = result;
}
//they input numbers

// we take those numbers
// we double every other number in the list
// if something doubled has 2 digits, the new num is the sum of those 2 digits
// we add up each individual number to see if the total ends in 0 or not
window.addEventListener("load", function() {
  document.getElementById("cardInfo").addEventListener("submit", formHandler);
  console.log("page load function worked")
});