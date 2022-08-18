function validator(e){
return e;
}



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