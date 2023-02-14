//? EFFECTS

//! HIDE-SHOW-TOGGLE
$(function () {
  $("input[value=Gizle1]").click(function () {
    $(".kutu1").hide(5000);
    $(".kutu2").hide(10000);
  });

  $("input[value=Gizle2]").click(function () {
    $(".kutu3").toggle("slow");
  });
  $("input[value=Göster]").click(function () {
    $(".kutu2").show(5000);
    $(".kutu1").show(5000);
  });
});

//! ANIMATION
$(function () {
  $("#sol").click(function () {
    $(".kutu4")
      .animate(
        {
          left: "+=50px", //! çalışabilmesi için css özelliğinde "position: absolute" olmalı.
          marginTop: "20px",
          borderRadius: "50px",
        },
        2000,
        "linear"
      )
      .css("background-color", "yellow");
  });

  $("#sag").click(function () {
    $(".kutu4")
      .animate(
        {
          left: "+=-50px", //! çalışabilmesi için css özelliğinde "position: absolute" olmalı.
          marginTop: "-20px",
          borderRadius: "0px",
        },
        2000,
        "linear"
      )
      .css("background-color", "purple");
  });
});

//! FadeIn, FadeOut, FadeTo, FadeToggle
$(function () {
  //! FadeOut = Kaybetmek için kullanılır
  $("#fadeOut").click(function () {
    $(".kutu1").fadeOut(1000);
    $(".kutu2").fadeOut(2000);
    $(".kutu3").fadeOut(3000);
    $(".kutu4").fadeOut(4000);
  });

  //! FadeIn = Kaybedileni geri getirmek için kullanılır.
  $("#fadeIn").click(function () {
    $(".kutu1").fadeIn(1000);
    $(".kutu2").fadeIn(2000);
    $(".kutu3").fadeIn(3000);
    $(".kutu4").fadeIn(4000);
  });

  //! FadeToggle = FadeIn ve FadeOut ikisini tek butonda yapıyor.
  setInterval(function () {
    //?  "setInterval" içine alırsan slide'yi durmaksızın çalıştırmaya devam eder.
    $("#fadeToggle").click(function () {
      $(".kutu1").fadeToggle(1000);
      $(".kutu2").fadeToggle(2000);
      $(".kutu3").fadeToggle(3000);
      $(".kutu4").fadeToggle(4000);
    });
  });

  //! FadeTo = Opaklık ayarlamak için kullanılır.
  $("#fadeTo").click(function () {
    $(".kutu1").fadeTo(2000, 0.2);
    $(".kutu2").fadeTo(2000, 0.2);
    $(".kutu3").fadeTo(2000, 0.2);
    $(".kutu4").fadeTo(2000, 0.2);
  });
});

//! SlideDown, SlideUp, SlideToggle
$(function () {
  $("#slideUp").click(function () {
    $(".kutu5").slideUp(5000);
  });

  $("#slideDown").click(function () {
    $(".kutu5").slideDown(5000);
  });

  $("#slideToggle").click(function () {
    $(".kutu5").slideToggle(5000);
  });
});
