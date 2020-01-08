var show = document.querySelector("#show");
var hide = document.querySelector("#hide");
var text = document.querySelector("#texte");

hide.addEventListener("click", function() {
  text.style.display = "none";
});

show.addEventListener("click", function() {
  text.style.display = "block";
});
