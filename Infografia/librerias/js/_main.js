var vistos = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
var vista = 0;
var listoX = false;
var scalePage = 1;
var scrollTop;
var heightPage = $(document).height();
var finalizado = false;

//Esta es la fecha que viene de fecha.js
console.log("%c" + fechaLog, "font-size: 100%; color: #00ff22; font-weight: 700;");
$(document).ready(function () {
  console.log("ready!");
  // $.jInvertScroll(["#content_scroll"], {
  //   onScroll: function (percent) {
  //     console.log(percent);
  //   },
  // });
  $("#Fecha")
    .html("<p>" + ELID + "</p>")
    .hover(function () {
      $(this).css({ cursor: "pointer" });
    });
  $("#Fecha").click(function () {
    navigator.clipboard.writeText(ELID);
    $(this).css({ color: "black" });
  });
  init(); // Iniciar conexion con LMS
});

// Evento Scroll
$(window).scroll(function (event) {
  if ($(window).scrollTop() + ($(window).height() + 700) >= heightPage) {
    if (finalizado == false) {
      complete();
      finalizado = true;
      console.log("Final de la página");
    }
  }
  // scrollTop = $(window).scrollTop();
  // console.log("- " + scrollTop);
});

function playContenidoDesk() {
  console.log("playContenidoDesk 🏄🏻‍♂️");
  if (navigator.userAgent.match(/Firefox/) || navigator.userAgent.match(/Edge/)) {
    $(".aFx").each(function () {
      var margenTop = "";
      var margenLeft = "";
      var cadena = $(this).attr("style");
      var cadena2 = cadena.replace(/ /gi, "");
      var bloqueGral = cadena2.split(";");
      for (var i = 0; i < bloqueGral.length; i++) {
        var bloqueCadena = bloqueGral[i].split(":");
        if (bloqueCadena[0] == "margin-top") {
          margenTop = parseFloat(bloqueCadena[1].replace(/vw/gi, ""));
          $(this).css("margin-top", margenTop * 2 + "vw");
        }
        if (bloqueCadena[0] == "margin-left") {
          margenLeft = parseFloat(bloqueCadena[1].replace(/vw/gi, ""));
          $(this).css("margin-left", margenLeft * 2 + "vw");
        }
      }
    });
    document.querySelectorAll(".btnsNav").forEach(function (elemento) {
      elemento.classList.add("navEdge");
    });
  }

  for (let a = 0; a <= 100; a++) {
    for (let b = 0; b <= 50; b++) {
      $("#nom" + a + "_img" + b).css({
        opacity: 0,
        display: "none",
      });
      $(".estilo").css({
        opacity: 0,
        display: "none",
      });
      $(".content-video").css({
        opacity: 0,
        display: "none",
      });
    }
  }
}

function paceListo() {
  slide1(1).addTo(controller);
}

// Pantalla 🟧 1 🟧
function slide1(i) {
  var scene = new ScrollMagic.Scene({
    triggerElement: "#nom" + i + "",
  })
    .on("enter", function () {
      vistos[i] == 0 ? animar() : console.log("👀" + i);
      vistos[i] = 1;

      function animar() {
        entrar($("#nom" + i + "_bg"), "default", 0, 0);
        entrar($("#nom2_bg"), "default", 0, 0);
        entrar($("#nom3_bg"), "default", 0, 0);
        entrar($("#nom4_bg"), "default", 0, 0);
        entrar($("#nom4_img1"), "default", 0, 0);
        entrar($("#nom5_bg"), "default", 0, 0);
        entrar($("#nom6_bg"), "default", 0, 0);
        entrar($("#nom7_bg"), "default", 0, 0);
        entrar($("#nom8_bg"), "default", 0, 0);
        entrar($("#nom9_bg"), "default", 0, 0);
        entrar($("#nom9_img1"), "default", 0, 0);
        entrar($("#nom10_bg"), "default", 0, 0);
        entrar($("#nom11_bg"), "default", 0, 0);
        entrar($("#nom12_bg"), "default", 0, 0);
        entrar($("#nom13_bg"), "default", 0, 0);
        entrar($("#nom14_bg"), "default", 0, 0);
        entrar($("#nom15_bg"), "default", 0, 0);
        entrar($("#nom" + i + "_img0"), "arriba", 1, 0.2);
        entrar($("#nom" + i + "_img1"), "arriba", 1, 0.2);
        entrar($("#nom" + i + "_img2"), "default", 1, 0.4);
        entrar($("#nom" + i + "_img3"), "arriba", 1, 0.6);
        entrar($("#nom" + i + "_img4"), "default", 1, 0.8);
        entrar($("#nom" + i + "_img5"), "izq", 1, 1);
        entrar($("#nom" + i + "_btn1"), "default", 1, 1.6);
        entrar($("#contenedorMenu"), "default", 1, 2.4);
      }
    })
    .on("enter leave", function () {
      console.log("nom" + i + "");
      new ScrollMagic.Scene({
        triggerElement: "#nom" + i,
        duration: 600,
        offset: 0,
      });
    });
  return processScene(scene);
}

// Pantalla 🟧 2 🟧
slide2(2).addTo(controller);
function slide2(i) {
  var scene = new ScrollMagic.Scene({
    triggerElement: "#nom" + i + "",
  })
    .on("enter", function () {
      vistos[i] == 0 ? animar() : console.log("👀" + i);
      vistos[i] = 1;
      function animar() {
        entrar($("#nom" + i + "_bg"), "default", 0, 0);
        entrar($("#nom" + i + "_img1"), "default", 1, 0.1);
        entrar($("#nom" + i + "_img2"), "izq", 1, 0.4);
        entrar($("#nom" + i + "_img3"), "izq", 1, 0.6);
        entrar($("#nom" + i + "_img4"), "izq", 1, 0.8);
        entrar($("#nom" + i + "_img5"), "izq", 1, 1);
        entrar($("#nom" + i + "_img6"), "izq", 1, 1.2);
        entrar($("#nom" + i + "_img7"), "sheker3", 1, 1.4);
      }
    })
    .on("enter leave", function () {
      console.log("nom" + i + "");
    }); //
  return processScene(scene);
}

// Pantalla 🟧 3 🟧
slide3(3).addTo(controller);
function slide3(i) {
  var scene = new ScrollMagic.Scene({
    triggerElement: "#nom" + i + "",
  })
    .on("enter", function () {
      vistos[i] == 0 ? animar() : console.log("👀" + i);
      vistos[i] = 1;
      function animar() {
        entrar($("#nom" + i + "_bg"), "default", 0, 0);
        entrar($("#nom" + i + "_img1"), "arriba", 1, 0.1);
        entrar($("#nom" + i + "_img2"), "zoom", 1, 0.4);
        entrar($("#nom" + i + "_img3"), "arriba", 1, 0.6);
        entrar($("#nom" + i + "_img4"), "arriba", 1, 0.8);
        entrar($("#nom" + i + "_img5"), "arriba", 1, 1);
        entrar($("#nom" + i + "_img6"), "default", 1, 1.2);
        entrar($("#nom" + i + "_img7"), "default", 1, 1.4);
        entrar($("#nom" + i + "_img8"), "arriba", 1, 1.6);
        entrar($("#nom" + i + "_mano1"), "sheker2", 1, 2);
        entrar($("#nom" + i + "_btn1"), "default", 1, 2);
      }
    })
    .on("enter leave", function () {
      console.log("nom" + i + "");
    }); //
  return processScene(scene);
}

// Pantalla 🟧 4 🟧
slide4(4).addTo(controller);
function slide4(i) {
  var scene = new ScrollMagic.Scene({
    triggerElement: "#nom" + i + "",
  })
    .on("enter", function () {
      vistos[i] == 0 ? animar() : console.log("👀" + i);
      vistos[i] = 1;
      function animar() {
        entrar($("#nom" + i + "_bg"), "default", 0, 0);
        entrar($("#nom" + i + "_img2"), "arriba", 1, 0.4);
        entrar($("#nom" + i + "_img3"), "izq", 1, 0.6);
        entrar($("#nom" + i + "_img4"), "izq", 1, 0.8);
        entrar($("#nom" + i + "_img5"), "izq", 1, 1);
      }
    })
    .on("enter leave", function () {
      console.log("nom" + i + "");
    }); //
  return processScene(scene);
}

// Pantalla 🟧 5 🟧
slide5(5).addTo(controller);
function slide5(i) {
  var scene = new ScrollMagic.Scene({
    triggerElement: "#nom" + i + "",
  })
    .on("enter", function () {
      vistos[i] == 0 ? animar() : console.log("👀" + i);
      vistos[i] = 1;
      function animar() {
        entrar($("#nom" + i + "_bg"), "default", 0, 0);
        entrar($("#nom" + i + "_img1"), "default", 1, 0.2);
        entrar($("#nom" + i + "_img2"), "abajo", 1, 0.4);
        entrar($("#nom" + i + "_img3"), "arriba", 1, 0.6);
        entrar($("#nom" + i + "_img4"), "izq", 1, 0.8);
        entrar($("#nom" + i + "_img5"), "izq", 1, 1);
        entrar($("#nom" + i + "_img6"), "izq", 1, 1.2);
      }
    })
    .on("enter leave", function () {
      console.log("nom" + i + "");
    }); //
  return processScene(scene);
}

// Pantalla 🟧 6 🟧
slide6(6).addTo(controller);
function slide6(i) {
  var scene = new ScrollMagic.Scene({
    triggerElement: "#nom" + i + "",
  })
    .on("enter", function () {
      vistos[i] == 0 ? animar() : console.log("👀" + i);
      vistos[i] = 1;
      function animar() {
        entrar($("#nom" + i + "_bg"), "default", 0, 0);
        entrar($("#nom" + i + "_img1"), "default", 1, 0.2);
        entrar($("#nom" + i + "_img2"), "default", 1, 0.4);
        entrar($("#nom" + i + "_img3"), "default", 1, 0.6);
        entrar($("#nom" + i + "_img4"), "default", 1, 0.8);
        entrar($("#nom" + i + "_img5"), "default", 1, 1);
        entrar($("#nom" + i + "_img6"), "default", 1, 1.2);
        entrar($("#nom" + i + "_img7"), "default", 1, 1.4);
        entrar($("#nom" + i + "_mano1"), "sheker2", 1, 1.6);
        entrar($("#nom" + i + "_mano2"), "sheker2", 1, 1.6);
        entrar($("#nom" + i + "_btn1"), "default", 1, 1);
        entrar($("#nom" + i + "_btn2"), "default", 1, 1);
      }
    })
    .on("enter leave", function () {
      console.log("nom" + i + "");
      var btn1 = false;
      var btn2 = false;
      var iframe = document.querySelector("iframe");
      var player = new Vimeo.Player(iframe);

      // Abrir Modal 🟩
      $("#nom" + i + "_btn1, #nom" + i + "_mano1").click(function () {
        stop($("#nom" + i + "_mano1"), 0);
        salida($("#nom" + i + "_mano1"), "default", 0, 0);
        $("#modal1P6").modal("show");
        player.play();
      });
      // Cuando los modales se cierran 🟩
      $("#modal1P6").on("hidden.bs.modal", function () {
        console.log("Sale modal1P6");
      });
      // Boton de cerrar modal 🟩
      $("#cerrar1P6").click(function () {
        $("#modal1P6").modal("hide");
        console.log("FIN");
        // document.getElementById("video1P6").pause();
        player.pause();
      });

      $("#nom" + i + "_btn2, #nom" + i + "_mano2").click(function () {
        if (btn2 == false) {
          stop($(this), 0);
          stop($("#nom" + i + "_mano2"), 0);
          salida($("#nom" + i + "_mano2"), "default", 0, 0);
          entrar($("#nom" + i + "_img8"), "arriba", 0.5, 0);
          btn2 = true;
        }
        window.open("https://palmexalimentos.sharepoint.com/sites/EscueladeVentas", "_blank");
      });
    }); //
  return processScene(scene);
}

// Pantalla 🟧 7 🟧
slide7(7).addTo(controller);
function slide7(i) {
  var scene = new ScrollMagic.Scene({
    triggerElement: "#nom" + i + "",
  })
    .on("enter", function () {
      vistos[i] == 0 ? animar() : console.log("👀" + i);
      vistos[i] = 1;
      function animar() {
        entrar($("#nom" + i + "_bg"), "default", 0, 0);
        entrar($("#nom" + i + "_img1"), "default", 1, 0.2);
        entrar($("#nom" + i + "_img2"), "default", 1, 0.4);
        entrar($("#nom" + i + "_img3"), "arriba", 1, 0.6);
        entrar($("#nom" + i + "_img4"), "izq", 1, 0.8);
        entrar($("#nom" + i + "_img5"), "izq", 1, 1);
        entrar($("#nom" + i + "_img6"), "abajo", 1, 1.2);
      }
    })
    .on("enter leave", function () {
      console.log("nom" + i + "");
    }); //
  return processScene(scene);
}

// Pantalla 🟧 8 🟧
slide8(8).addTo(controller);
function slide8(i) {
  var scene = new ScrollMagic.Scene({
    triggerElement: "#nom" + i + "",
  })
    .on("enter", function () {
      vistos[i] == 0 ? animar() : console.log("👀" + i);
      vistos[i] = 1;
      function animar() {
        entrar($("#nom" + i + "_bg"), "default", 0, 0);
        entrar($("#nom" + i + "_img1"), "default", 1, 0.2);
        entrar($("#nom" + i + "_img2"), "izq", 1, 0.4);
        entrar($("#nom" + i + "_img3"), "izq", 1, 0.6);
        entrar($("#nom" + i + "_img4"), "izq", 1, 0.8);
      }
    })
    .on("enter leave", function () {
      console.log("nom" + i + "");
    }); //
  return processScene(scene);
}

// Pantalla 🟧 9 🟧
slide9(9).addTo(controller);
function slide9(i) {
  var scene = new ScrollMagic.Scene({
    triggerElement: "#nom" + i + "",
  })
    .on("enter", function () {
      vistos[i] == 0 ? animar() : console.log("👀" + i);
      vistos[i] = 1;
      function animar() {
        entrar($("#nom" + i + "_bg"), "default", 0, 0);
        entrar($("#nom" + i + "_img2"), "arriba", 1, 0.4);
        entrar($("#nom" + i + "_img3"), "arriba", 1, 0.6);
        entrar($("#nom" + i + "_img4"), "default", 1, 0.8);
        entrar($("#nom" + i + "_img5"), "izq", 1, 1);
        entrar($("#nom" + i + "_img6"), "izq", 1, 1.2);
        entrar($("#nom" + i + "_img7"), "default", 1, 1.4);
      }
    })
    .on("enter leave", function () {
      console.log("nom" + i + "");
    }); //
  return processScene(scene);
}

// Pantalla 🟧 10 🟧
slide10(10).addTo(controller);
function slide10(i) {
  var scene = new ScrollMagic.Scene({
    triggerElement: "#nom" + i + "",
  })
    .on("enter", function () {
      vistos[i] == 0 ? animar() : console.log("👀" + i);
      vistos[i] = 1;
      function animar() {
        entrar($("#nom" + i + "_bg"), "default", 0, 0);
        entrar($("#nom" + i + "_img1"), "arriba", 1, 0.2);
        entrar($("#nom" + i + "_img2"), "arriba", 1, 0.4);
        entrar($("#nom" + i + "_img3"), "izq", 1, 0.6);
        entrar($("#nom" + i + "_img4"), "izq", 1, 0.8);
        entrar($("#nom" + i + "_img5"), "default", 1, 1);
        entrar($("#nom" + i + "_img6"), "izq", 1, 1.2);
        entrar($("#nom" + i + "_img7"), "izq", 1, 1.4);
      }
    })
    .on("enter leave", function () {
      console.log("nom" + i + "");
    }); //
  return processScene(scene);
}

// Pantalla 🟧 11 🟧
slide11(11).addTo(controller);
function slide11(i) {
  var scene = new ScrollMagic.Scene({
    triggerElement: "#nom" + i + "",
  })
    .on("enter", function () {
      vistos[i] == 0 ? animar() : console.log("👀" + i);
      vistos[i] = 1;
      function animar() {
        entrar($("#nom" + i + "_bg"), "default", 0, 0);
        entrar($("#nom" + i + "_img1"), "arriba", 1, 0.2);
        entrar($("#nom" + i + "_img2"), "arriba", 1, 0.4);
        entrar($("#nom" + i + "_img3"), "default", 1, 0.6);
        entrar($("#nom" + i + "_img4"), "izq", 1, 0.8);
        entrar($("#nom" + i + "_img5"), "abajo", 1, 1);
      }
    })
    .on("enter leave", function () {
      console.log("nom" + i + "");
    }); //
  return processScene(scene);
}

// Pantalla 🟧 12 🟧
slide12(12).addTo(controller);
function slide12(i) {
  var scene = new ScrollMagic.Scene({
    triggerElement: "#nom" + i + "",
  })
    .on("enter", function () {
      vistos[i] == 0 ? animar() : console.log("👀" + i);
      vistos[i] = 1;
      function animar() {
        entrar($("#nom" + i + "_bg"), "default", 0, 0);
        entrar($("#nom" + i + "_img1"), "izq", 1, 0.2);
        entrar($("#nom" + i + "_img2"), "izq", 1, 0.4);
        entrar($("#nom" + i + "_img3"), "izq", 1, 0.6);
        entrar($("#nom" + i + "_img4"), "default", 1, 0.8);
        entrar($("#nom" + i + "_img5"), "default", 1, 1);
        entrar($("#nom" + i + "_img6"), "arriba", 1, 1.2);
        entrar($("#nom" + i + "_img7"), "arriba", 1, 1.4);
        entrar($("#nom" + i + "_img8"), "arriba", 1, 1.6);
        entrar($("#nom" + i + "_img9"), "arriba", 1, 1.8);
        entrar($("#nom" + i + "_img10"), "abajo", 1, 2);
        entrar($("#nom" + i + "_img11"), "default", 1, 2.2);
      }
    })
    .on("enter leave", function () {
      console.log("nom" + i + "");
    }); //
  return processScene(scene);
}

// Pantalla 🟧 13 🟧
slide13(13).addTo(controller);
function slide13(i) {
  var scene = new ScrollMagic.Scene({
    triggerElement: "#nom" + i + "",
  })
    .on("enter", function () {
      vistos[i] == 0 ? animar() : console.log("👀" + i);
      vistos[i] = 1;
      function animar() {
        entrar($("#nom" + i + "_bg"), "default", 0, 0);
        entrar($("#nom" + i + "_img1"), "arriba", 1, 0.2);
        entrar($("#nom" + i + "_img2"), "der", 1, 0.4);
        entrar($("#nom" + i + "_img3"), "arriba", 1, 0.6);
        entrar($("#nom" + i + "_img4"), "arriba", 1, 0.8);
        entrar($("#nom" + i + "_img5"), "default", 1, 1);
        entrar($("#nom" + i + "_img6"), "abajo", 1, 1.2);
        entrar($("#nom" + i + "_img7"), "default", 1, 1.4);
      }
    })
    .on("enter leave", function () {
      console.log("nom" + i + "");
    }); //
  return processScene(scene);
}

// Pantalla 🟧 14 🟧
slide14(14).addTo(controller);
function slide14(i) {
  var scene = new ScrollMagic.Scene({
    triggerElement: "#nom" + i + "",
  })
    .on("enter", function () {
      vistos[i] == 0 ? animar() : console.log("👀" + i);
      vistos[i] = 1;
      function animar() {
        entrar($("#nom" + i + "_bg"), "default", 0, 0);
        entrar($("#nom" + i + "_img1"), "default", 1, 0.2);
        entrar($("#nom" + i + "_img2"), "default", 1, 0.4);
        entrar($("#nom" + i + "_img3"), "default", 1, 0.6);
        entrar($("#nom" + i + "_img4"), "default", 1, 0.8);
        entrar($("#nom" + i + "_img5"), "default", 1, 1);
        entrar($("#nom" + i + "_img6"), "default", 1, 1.2);
        entrar($("#nom" + i + "_mano1"), "sheker2", 1, 1.4);
        entrar($("#nom" + i + "_btn1"), "default", 1, 1.4);
        entrar($("#nom" + i + "_btn2"), "default", 1, 1.4);
        entrar($("#nom" + i + "_btn3"), "default", 1, 1.4);
        entrar($("#nom" + i + "_btn4"), "default", 1, 1.4);
        entrar($("#nom" + i + "_btn5"), "default", 1, 1.4);
      }
    })
    .on("enter leave", function () {
      console.log("nom" + i + "");
      var btn1 = false;
      var btn2 = false;
      var btn3 = false;
      var btn4 = false;
      var btn5 = false;
      var btn6 = false;

      var mano1 = true;
      var mano2 = false;
      var mano3 = false;
      var mano4 = false;
      var mano5 = false;
      var mano6 = false;

      function status() {
        console.log("mano1", mano1);
        console.log("mano2", mano2);
        console.log("mano3", mano3);
        console.log("mano4", mano4);
        console.log("mano5", mano5);
        console.log("mano6", mano6);
        console.log("______________");
        console.log("..............");
      }
      function limpia() {
        $("#nom" + i + "_img6").css("opacity", 0);
        $("#nom" + i + "_pop1").css("opacity", 0);
        $("#nom" + i + "_pop2").css("opacity", 0);
        $("#nom" + i + "_pop3").css("opacity", 0);
        $("#nom" + i + "_pop4").css("opacity", 0);
        $("#nom" + i + "_pop5").css("opacity", 0);
        for (x = 0; x <= 5; x++) {
          $("#nom" + i + "_btnF" + x).css("display", "none");
        }
      }

      $("#nom" + i + "_btn1")
        .off()
        .on()
        .click(function () {
          if (btn1 == false) {
            stop($(this), 0);
            // entrar($("#nom" + i + "_btn2"), "default", 1, 0);
            stop($("#nom" + i + "_mano1"), 0);
            salida($("#nom" + i + "_mano1"), "default", 0, 0);
            // btn1 = true;
          }
          if (mano1 == true) {
            entrar($("#nom" + i + "_mano2"), "sheker2", 1, 0);
            mano1 = false;
            mano2 = true;
            mano3 = false;
            mano4 = false;
            mano5 = false;
            mano6 = false;
          }
          limpia();
          entrar($("#nom" + i + "_btnF1"), "default", 0, 0);
          entrar($("#nom" + i + "_pop1"), "default", 0, 0);
          status();
        });

      $("#nom" + i + "_btn2")
        .off()
        .on()
        .click(function () {
          if (btn2 == false) {
            stop($(this), 0);
            // entrar($("#nom" + i + "_btn3"), "default", 1, 0);
            stop($("#nom" + i + "_mano2"), 0);
            salida($("#nom" + i + "_mano2"), "default", 0, 0);
            // btn2 = true;
          }
          if (mano2 == true) {
            entrar($("#nom" + i + "_mano3"), "sheker2", 1, 0);
            mano1 = false;
            mano2 = false;
            mano3 = true;
            mano4 = false;
            mano5 = false;
            mano6 = false;
          }
          limpia();
          entrar($("#nom" + i + "_btnF2"), "default", 0, 0);
          entrar($("#nom" + i + "_pop2"), "default", 0, 0);
          status();
        });

      $("#nom" + i + "_btn3")
        .off()
        .on()
        .click(function () {
          if (btn3 == false) {
            stop($(this), 0);
            // entrar($("#nom" + i + "_btn4"), "default", 1, 0);
            stop($("#nom" + i + "_mano3"), 0);
            salida($("#nom" + i + "_mano3"), "default", 0, 0);
            // btn3 = true;
          }
          if (mano3 == true) {
            entrar($("#nom" + i + "_mano4"), "sheker2", 1, 0);
            mano1 = false;
            mano2 = false;
            mano3 = false;
            mano4 = true;
            mano5 = false;
            mano6 = false;
          }
          limpia();
          entrar($("#nom" + i + "_btnF3"), "default", 0, 0);
          entrar($("#nom" + i + "_pop3"), "default", 0, 0);
          status();
        });

      $("#nom" + i + "_btn4")
        .off()
        .on()
        .click(function () {
          if (btn4 == false) {
            stop($(this), 0);
            // entrar($("#nom" + i + "_btn5"), "default", 1, 0);
            stop($("#nom" + i + "_mano4"), 0);
            salida($("#nom" + i + "_mano4"), "default", 0, 0);
            // btn4 = true;
          }
          if (mano4 == true) {
            entrar($("#nom" + i + "_mano5"), "sheker2", 1, 0);
            mano1 = false;
            mano2 = false;
            mano3 = false;
            mano4 = false;
            mano5 = true;
            mano6 = false;
          }
          limpia();
          entrar($("#nom" + i + "_btnF4"), "default", 0, 0);
          entrar($("#nom" + i + "_pop4"), "default", 0, 0);
          status();
        });

      $("#nom" + i + "_btn5")
        .off()
        .on()
        .click(function () {
          if (btn5 == false) {
            stop($(this), 0);
            // entrar($("#nom" + i + "_btn6"), "default", 1, 0);
            stop($("#nom" + i + "_mano5"), 0);
            salida($("#nom" + i + "_mano5"), "default", 0, 0);
            // btn5 = true;
          }
          if (mano5 == true) {
            entrar($("#nom" + i + "_mano6"), "sheker2", 1, 0);
            mano1 = false;
            mano2 = false;
            mano3 = false;
            mano4 = false;
            mano5 = false;
            mano6 = true;
          }
          limpia();
          entrar($("#nom" + i + "_btnF5"), "default", 0, 0);
          entrar($("#nom" + i + "_pop5"), "default", 0, 0);
          status();
        });
    }); //
  return processScene(scene);
}

// Pantalla 🟧 15 🟧
slide15(15).addTo(controller);
function slide15(i) {
  var scene = new ScrollMagic.Scene({
    triggerElement: "#nom" + i + "",
  })
    .on("enter", function () {
      vistos[i] == 0 ? animar() : console.log("👀" + i);
      vistos[i] = 1;
      function animar() {
        entrar($("#nom" + i + "_bg"), "default", 0, 0);
        entrar($("#nom" + i + "_img1"), "default", 1, 0.2);
        entrar($("#nom" + i + "_img2"), "default", 1, 0.4);
        entrar($("#nom" + i + "_img3"), "zoom", 1, 0.6);
        entrar($("#nom" + i + "_img4"), "abajo", 1, 0.8);
        entrar($("#nom" + i + "_img5"), "abajo", 1, 1);
        entrar($("#nom" + i + "_img6"), "izq", 1, 1.2);
        entrar($("#nom" + i + "_img7"), "izq", 1, 1.4);
        entrar($("#nom" + i + "_img8"), "der", 1, 1.6);
      }
    })
    .on("enter leave", function () {
      console.log("nom" + i + "");
    }); //
  return processScene(scene);
}

// Pantalla 🟧 X 🟧
// slideX(X).addTo(controller);
// function slideX(i) {
//   var scene = new ScrollMagic.Scene({
//     triggerElement: "#nom" + i + "",
//   })
//     .on("enter", function () {
//       vistos[i] == 0 ? animar() : console.log("👀" + i);
//       vistos[i] = 1;
//       function animar() {
//         entrar($("#nom" + i + "_bg"), "default", 0, 0);
//         entrar($("#nom" + i + "_img1"), "default", 1, 0.2);
//         entrar($("#nom" + i + "_img2"), "default", 1, 0.4);
//         entrar($("#nom" + i + "_img3"), "default", 1, 0.6);
//         entrar($("#nom" + i + "_mano1"), "default", 1, 0.8);
//         entrar($("#nom" + i + "_btn1"), "default", 1, 1);
//       }
//     })
//     .on("enter leave", function () {
//       console.log("nom" + i + "");
//     }); //
//   return processScene(scene);
// }

// ☢️  ☢️  ☢️  ☢️  ☢️  ☢️  ☢️  ☢️  ☢️  ☢️
