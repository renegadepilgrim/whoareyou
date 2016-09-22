$(document).ready(function() {
  $("form#questions").submit(function(event) {
    event.preventDefault();

    var answer1 = parseInt($("#fear").val());
    var answer2 = parseInt($("#values").val());
    var answer3 = parseInt($("#coffee").val());
    var userScore = answer1 + answer2 + answer3;


    if (userScore === 3) {
      $("#result").addClass("ross");
      $("form#questions").hide();
      $("#result").show();
    } else if (userScore >= 4 && userScore <= 6) {
      $("#result").addClass("joey");
      $("form#questions").hide();
      $("#result").show();
    } else if ( userScore >= 7 && userScore <= 9 ) {
      $("#result").addClass("rachel");
      $("form#questions").hide();
      $("#result").show();
    } else if ( userScore >= 10 && userScore<= 12 ) {
      $("#result").addClass("monica");
      $("form#questions").hide();
      $("#result").show();
    } else if ( userScore >= 13 && userScore<= 15 ) {
      $("#result").addClass("chandler");
      $("form#questions").hide();
      $("#result").show();
    } else if ( userScore >= 16 && userScore<= 18 ) {
      $("#result").addClass("pheebs");
      $("form#questions").hide();
      $("#result").show();
    }
  });
});
