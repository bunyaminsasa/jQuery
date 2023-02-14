//? MANIPULATION

//! TEXT, VAL
$(function () {
  $("#button1").click(function () {
    var cumle1 = $(".kutu1").text();
    alert("Cumleniz: " + cumle1);
  });

  $("#button2").click(function () {
    $("input").val("I wrote this");
  });
});

//! FOCUS, BLUR, CHANGE
$(function () {
  $("#sayi1").focus(function () {
    $(this).css("border", "solid 3px", "red");
  });

  $("#sayi1").blur(function () {
    $(this).css("backgroundColor", "blue");
  });
  $("#sayi1").blur(function () {
    $(this).css("backgroundColor", "red");
  });

  $("#islem").change(function () {
    $("#hesapla").val($(this).val());
  });
});

//! APPEND, PREPEND, BEFORE, AFTER
$(function () {
  $("#button3").click(function () {
    $(".kutu1").prepend($("input").val() + " ");
  });
  $("#button4").click(function () {
    $(".kutu1").append(" " + $("input").val());
  });
  $("#button5").click(function () {
    $(".kutu1").after($("input").val());
  });
  $("#button6").click(function () {
    $(".kutu1").before($("input").val());
  });
});

//! WRAP, UNWRAP
$(function () {
  $("#button7").click(function () {
    $(".kutu2").wrap(".kutu1");
  });

  $("#button8").click(function () {
    $(".kutu2").unwrap();
  });
});

//! REMOVE, EMPTY
$(function () {
  $("#button9").click(function () {
    $("p").remove(); //! Hepsi Tamamen gider
    $("p").remove(".deneme1"); //! Class'i deneme olan gider.
  });
  $("#button10").click(function () {
    $("p").empty(); //! Hepsi sitede durur ama kaybolur
    $("p").empty(".deneme1"); //! Hepsi sitede durur, sadece Class'i deneme olan kaybolur.
  });
});

//! ADDCLASS, REMOVECLASS, TOGGLECLASS, HASCLASS
$(function () {
  $("#button11").click(function () {
    $("span").addClass("deneme2"); //? deneme classını css'de tanımladık.
  });
  $("#button12").click(function () {
    $("span").removeClass("deneme2");
  });
  $("#button13").click(function () {
    $("span").toggleClass("deneme2");
  });

  $("#button14").click(function () {
    var value = $("span").hasClass("deneme2");
    value == true ? alert("Deneme2 classi var") : alert("Class Bulunamadi");
  });
});

$(function () {
  $(".container .row").click(function () {
    $(this).addClass("ozel"); //? BURADAKI "OZEL" CLASS CSS DOSYASINDAN GELİYOR.
  });

  $(".kaldir").click(function () {
    $(".container .row").removeClass("ozel");
  });
});
