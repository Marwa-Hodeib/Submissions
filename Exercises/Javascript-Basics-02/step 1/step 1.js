img = document.querySelector("#image1");
img.onmouseover = function() {
  img.setAttribute("src", "images/image1_2.jpg");
};

img.onmouseleave = function() {
  img.setAttribute("src", "images/image1.jpg");
};
