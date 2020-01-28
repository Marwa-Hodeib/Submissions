var password = document.getElementById("password");
var confirm = document.getElementById("confirmation");

function test() {
  if (password.value != confirm.value) {
    confirm.style.border = "2px solid red";
  }
}
