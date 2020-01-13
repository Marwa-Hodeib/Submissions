$(document).ready(function() {
  var value = "";
  $(".yes").click(function() {
    $(".part2").fadeIn("slow");
    value = "yes";
    console.log(value);
  });

  $(".no").click(function() {
    $(".part2").fadeIn("slow");
    value = "no";
    console.log(value);
  });

  $(".fight").click(function() {
    $(".fight-part").fadeIn("slow");
    $(".disable").prop("disabled", true);
  });

  $(".cry").click(function() {
    $(".cry-part").fadeIn("slow");
    $(".disable").prop("disabled", true);
  });

  $(".exist").click(function() {
    if (value == "no") {
      $(".liar1").fadeIn("slow");
    } else {
      $(".gameover").fadeIn("slow");
    }
    $(".reset").fadeIn("slow");
  });
  $(".notExist").click(function() {
    if (value == "yes") {
      $(".liar2").fadeIn("slow");
    } else {
      $(".gameover").fadeIn("slow");
    }
    $(".reset").fadeIn("slow");
  });

  $(".scream").click(function() {
    $(".scream-part").fadeIn("slow");
    $(".reset").fadeIn("slow");
    $(".disable").prop("disabled", true);
  });

  $(".escape").click(function() {
    $(".escape-part").fadeIn("slow");
    $(".reset").fadeIn("slow");
    $(".disable").prop("disabled", true);
  });

  $(".faint").click(function() {
    $(".faint-part").fadeIn("slow");
    $(".reset").fadeIn("slow");
    $(".disable").prop("disabled", true);
  });

  $(".reset").click(function() {
    window.location.replace(
      "file:///home/marwa/Desktop/Submissions/INTERACTIVE%20STORY/index.html"
    );
  });
});
//   $(document).ready(function(){
//   $("button").click(function(){
//     $("#div1").fadeIn();
//     $("#div2").fadeIn("slow");
//     $("#div3").fadeIn(3000);
//   });
// });
