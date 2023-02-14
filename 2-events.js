//? EVENTS

//! Mouse Events
$(function () {
  $("p").click(function () {
    $(this).css("backgroundColor", "red");
  });

  $("h1").click(function () {
    $(".tikla").append("*");
  });

  $(".list-item").mouseover(function () {
    $(this).css("backgroundColor", "blue");
  });

  $(".list-item").mouseout(function () {
    $(this).css("backgroundColor", "white");
  });
});

//! Keyboard Events
$(function () {
  $("input").keydown(function () {
    $(this).css("backgroundColor", "red");
  });

  $("input").keyup(function () {
    $(this).css("backgroundColor", "white");
  });
});

//! Scroll Events
$(function () {
  $(".kutu1").Scroll(function () {
    $(this).css("color", "red");
  });
});

//! ON, OFF, ONE, PROXY

$(function () {
  $(".kutu2").on({
    //? "ON" kullandığında bütün eventleri tek bir yere yazabiliyorsun.
    click: function () {
      $(".kutu2").css("backgroundColor", "red");
    },
    keydown: function () {
      $(".kutu2").css("backgroundColor", "red");
    },

    mouseover: function () {
      $(".kutu2").css("backgroundColor", "red");
    },
  });

  $("#button1").click(function () {
    $(".kutu2").off("click"); //? "ON" yaptığımızda bütün evetler aynı function içinde tanımlanabilirdi. Burada ise o function içindeki "click" özelliğini kaldırmış olduk.
  });
});
