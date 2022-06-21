function validate() {
  let input = document.getElementById("user-input").value;
  if (input.length === 9 || typeof input != "string") {
    alert("You entered TAX number: " + input)
  } else {
    alert("The number you entered is not valid.");
  }
}
 