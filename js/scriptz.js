$(document).ready(function() {
  var answer1 = parseInt($("#fear").val());
  var answer2 = parseInt($("#values").val());
  var answer3 = parseInt($("#coffee").val());
  var userScore = answer1 + answer2 + answer3;

  $("form#questions").submit(function(event) {
    event.preventDefault();
    
    if ( userScore === 3 ) {
      $("#result").addClass("ross");
      $("#result").show();
    } else if ( userScore >= 4 && <= 6 ) {
      $("#result").addClass("joey");
      $("#result").show();
    } else if ( userScore >= 7 && <= 9 ) {
      $("#result").addClass("rachel");
      $("#result").show();
    } else if ( userScore >= 10 && <= 12 ) {
      $("#result").addClass("monica");
      $("#result").show();
    } else if ( userScore >= 13 && <= 15 ) {
      $("#result").addClass("chandler");
      $("#result").show();
    } else if ( userScore >= 16 && <= 18 ) {
      $("#result").addClass("pheebs");
      $("#result").show();
    }
  });
});
