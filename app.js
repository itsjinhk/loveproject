// light gallery
lightGallery(document.getElementById("lightgallery"), {
  thumbnail: true,
});

// mp3-player
$(function () {
  $("#mp3-player").buttonAudioPlayer({
    src: "./everything.mp3",
  });
});

// back-to-top
var btn = $("#back-to-top");

$(window).scroll(function () {
  if ($(window).scrollTop() > 300) {
    btn.addClass("show");
  } else {
    btn.removeClass("show");
  }
});

btn.on("click", function (e) {
  e.preventDefault();
  $("html, body").animate({ scrollTop: 0 }, "300");
});
