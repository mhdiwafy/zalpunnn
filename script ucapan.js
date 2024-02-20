$(document).ready(function () {
  $(".container")
    .mouseenter(function () {
      $(".foto").stop().animate(
        {
          top: "75px",
        },
        "slow"
      );
    })
    .mouseleave(function () {
      $(".foto").stop().animate(
        {
          top: "600px",
        },
        "fast"
      );
    });
});

$(document).ready(function () {
  $(".container")
    .mouseenter(function () {
      $(".card").stop().animate(
        {
          top: "-180px",
        },
        "slow"
      );
    })
    .mouseleave(function () {
      $(".card").stop().animate(
        {
          top: 40,
        },
        "slow"
      );
    });
});

