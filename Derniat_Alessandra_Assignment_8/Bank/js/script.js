/*eslint-env browser*/

function acctName() {
  var theName = prompt("Please enter your name.");
  if (theName != null) {
    document.getElementById("theName").innerHTML = "Account Name: " + theName;
  }
}
document.getElementById("name").addEventListener("click", acctName);


function amtToAdd() {
  var theAdd = Number(prompt("Enter the amount your wish to deposit.\nUse this format: xxx.xx"));
  if (theAdd != null) {
    document.getElementById("newBalance").innerHTML = "Your new balance now is: $ ";
  }
}
document.getElementById("add").addEventListener("click", amtToAdd);


function amtToSubtract() {
  var theSubtract = Number(prompt("Enter the amount your wish to deposit.\nUse this format: xxx.xx"));
  if (theSubtract != null) {
    document.getElementById("newBalance").innerHTML = "Your new balance now is: $ ";
  }
}
document.getElementById("subtract").addEventListener("click", amtToSubtract);


