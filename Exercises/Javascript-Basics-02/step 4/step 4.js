function myFunction() {
  if (window.confirm("do you really want to reset?")) {
    document.getElementById("name").value = " ";
    document.getElementById("surname").value = " ";
    document.getElementById("city").value = " ";
  } else {
    window.open("exit.html");
  }
}
