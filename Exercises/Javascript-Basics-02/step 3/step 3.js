document.querySelector("#name").addEventListener("change", function() {
  document.querySelector("div").innerHTML = document.querySelector(
    "#name"
  ).value;
});
