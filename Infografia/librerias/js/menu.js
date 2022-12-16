// ******** MENU ********* //
(function iniciarMenu() {
  console.log("%c iniciarMenu", "font-size: 100%; color: #ff7e29; font-weight: 700;");

  ///////////////// 🎯 Actividad 🎯 ////////////////

  var noObjetos = 8;
  var cualBotonEntra;
  var cualBotonSale;
  var pageDev = 7;

  const goPage1 = 2;
  const goPage2 = 3;
  const goPage3 = 4;
  const goPage4 = 9;
  const goPage5 = 12;
  const goPage6 = 13;
  const goPage7 = 14;
  const goPage8 = 15;

  // for (let i = 0; i <= noObjetos; i++) {
  // $("#btn" + i).mouseenter(function () {
  //   cualBotonEntra = parseInt($(this).attr("id").substr(3, 2));
  //   $("#btn" + cualBotonEntra + "Tag").css("display", "block");
  // });
  
  // $("#btn" + i).mouseleave(function () {
  //   cualBotonSale = parseInt($(this).attr("id").substr(3, 2));
  //   $("#btn" + cualBotonSale + "Tag").css("display", "none");
  // });
  // }

  for (let i = 0; i <= noObjetos; i++) {
    $("#btn" + i).click(function () {
      for (let o = 0; o <= noObjetos; o++) {
        setTimeout(() => {
          $("#btn" + o + "Tag").css("display", "none");
          $("#btn" + o).css("display", "none");
        }, 1000);
      }
    });
    $("#nom" + i).click(function () {
      for (let X = 0; X <= noObjetos; X++) {
        setTimeout(() => {
          $("#btn" + X + "Tag").css("display", "none");
          $("#btn" + X).css("display", "none");
        }, 100);
      }
    });
  }

  $("#btnDev").click(function () {
    $("html").animate({ scrollLeft: $("#nom" + pageDev).offset().left - 45 }, 500);
  });

  $("#menu").click(function () {
    for (let F = 0; F <= noObjetos; F++) {
      $("#btn" + F + "Tag").css("display", "block");
      $("#btn" + F).css("display", "block");
    }
  });

  $("#btn1").click(function () {
    $("html").animate({ scrollLeft: $("#nom"+goPage1).offset().left - 45 }, 1000);
  });
  $("#btn2").click(function () {
    $("html").animate({ scrollLeft: $("#nom"+goPage2).offset().left - 45 }, 1000);
  });
  $("#btn3").click(function () {
    $("html").animate({ scrollLeft: $("#nom"+goPage3).offset().left - 45 }, 1000);
  });
  $("#btn4").click(function () {
    $("html").animate({ scrollLeft: $("#nom"+goPage4).offset().left - 45 }, 1000);
  });
  $("#btn5").click(function () {
    $("html").animate({ scrollLeft: $("#nom"+goPage5).offset().left - 45 }, 1000);
  });
  $("#btn6").click(function () {
    $("html").animate({ scrollLeft: $("#nom"+goPage6).offset().left - 45 }, 1000);
  });
  $("#btn7").click(function () {
    $("html").animate({ scrollLeft: $("#nom"+goPage7).offset().left - 45 }, 1000);
  });
  $("#btn8").click(function () {
    $("html").animate({ scrollLeft: $("#nom"+goPage8).offset().left - 45 }, 1000);
  });
 
})();
