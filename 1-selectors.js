//? SELECTORS

$(function () {
  $(".yazi1").css("font-size", "50px"); //! Class'i yazi olan

  $("#kutu1").slideUp(5000); //! ID'si yazi olan

  $("a[href]").css("color", "purple"); //! a etiketlerinde href attribute olanlar

  $("div > p:last").css("color", "red"); //! Bütün divler içinden en sonuncusu

  $("div > p:last-of-type").css("color", "red"); //! Bütün divler içinden her bir divin en sonuncusu

  $("div > p:not('.test')").css("color", "red"); //! Div içindeki P etiketlerinden class'ı "test" olmayanlar

  $("div .test").css("color", "red"); //! Class'i Test olanlar

  $("div .test:not(span)").css("color", "red"); //! Class'i Test olsa da içende span olmayanlar.

  $("input[type=text]").text("Yeni"); //! Input içinde "type=text" olanlar.

  $("input[type=password]").value("Şifreni doğru gir"); //! Input içinde "type=password" olanlar.

  $("input[type=button]").css("backgroundColor", "green"); //! Input içinde "type=button" olanlar.
});

$(function () {
  $("#hesapla").click(function () {
    var sayi1 = parseInt($("#sayi1").val());
    var sayi2 = parseInt($("#sayi2").val());
    var sonuc = $("#islem").val();
    switch (sonuc) {
      case "+":
        $("#sonuc").val(sayi1 + sayi2);
        break;
      case "-":
        $("#sonuc").val(sayi1 - sayi2);
        break;
      case "*":
        $("#sonuc").val(sayi1 * sayi2);
        break;
      case "/":
        $("#sonuc").val(sayi1 / sayi2);
        break;
    }
  });
});


