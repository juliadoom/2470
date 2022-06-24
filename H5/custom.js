$(document).ready(function() {
  // message change
  var words = [
    "train your pokemon to play your favorite video games",
    "have your pokemon interact with chat features",
    "help you have your pokemon make money",
    "help become a twitch partner",
    "create a new streaming craze"
  ];
  count = 0;
  setInterval(function() {
    if (count === 4) {
      count = 0;
    } else {
      count++;
    }
    $("#message-change").fadeOut(1500, function() {
      $("#message-change")
        .fadeIn(1500)
        .html(words[count]);
    });
  }, 5000);

  $("#accordion").accordion({
    icons: {
      header: "ui-icon-circle-arrow-e",
      activeHeader: "ui-icon-circle-arrow-s"
    }
  });

  var images = ["about1.jpg", "about2.jpg", "about3.jpg"];
  var i = 0;
  setInterval(function() {
    if (i === 2) {
      i = 0;
    } else {
      i++;
    }
    $("#about-image-change").fadeOut(1500, function() {
      $("#about-image-change")
        .fadeIn(1500)
        .attr("src", "images/" + images[i]);
    });
  }, 5000);
});