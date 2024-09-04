$(window).scroll(function () {
  // when our window scrolls we call the function called 'parallax()'
  parallax();
});

function parallax() {
  // 1. tracking a screen as it's scrolling
  let wScroll = $(window).scrollTop();
  console.log(wScroll); // it shows how far down you scrolled from the top of the window and we use that info to modify how things are moving

  // 2. selecting parallax background to modify its css properties ...
  $(".parallax--bg").css(
    "background-position",
    "center " + wScroll * 0.75 + "px"
  );
  // ... like background-position changing its center up and down
  // 'center ' needs a space right after word "center" to define its value with (wScroll*0.75)+'px'
  // multiplying scroll by 0.75 the background image will move slower than your scrolling by 25%
}
