var vistos = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
var vista = 0;
var listoX = false;
var scalePage = 1;
var scrollTop;
var widthPage = $(document).width();
var finalizado = false;

//Esta es la fecha que viene de fecha.js
console.log("%c" + fechaLog, "font-size: 100%; color: #00ff22; font-weight: 700;");
$(document).ready(function () {
  console.log("ready!");

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

let os = "Unknown";

if (navigator.appVersion.indexOf("Win") != -1) os = "Windows";
if (navigator.appVersion.indexOf("Mac") != -1) os = "MacOS";
if (navigator.appVersion.indexOf("X11") != -1) os = "UNIX";
if (navigator.appVersion.indexOf("Linux") != -1) os = "Linux";

$("html").mousewheel(function (e, delta) {
  e.preventDefault();
  if (os == "Windows") {
    this.scrollLeft -= delta * 40;
  } else {
    this.scrollLeft -= delta;
  }
});

// Evento Scroll
$(document).scroll(function (event) {
  if ($(document).scrollLeft() + ($(document).width() + 700) >= widthPage) {
    if (finalizado == false) {
      complete();
      finalizado = true;
      console.log("Final de la página");
    }
  }
  // scrollTop = $(document).scrollLeft();
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
        entrar($("#nom1_bg"), "default", 0, 0);
        entrar($("#nom2_bg"), "default", 0, 0);
        entrar($("#nom3_bg"), "default", 0, 0);
        entrar($("#nom4_bg"), "default", 0, 0);
        entrar($("#nom5_bg"), "default", 0, 0);
        entrar($("#nom6_bg"), "default", 0, 0);
        entrar($("#nom7_bg"), "default", 0, 0);
        entrar($("#nom8_bg"), "default", 0, 0);
        entrar($("#nom9_bg"), "default", 0, 0);
        entrar($("#nom10_bg"), "default", 0, 0);
        entrar($("#nom11_bg"), "default", 0, 0);
        entrar($("#nom12_bg"), "default", 0, 0);
        entrar($("#nom13_bg"), "default", 0, 0);
        entrar($("#nom14_bg"), "default", 0, 0);
        entrar($("#nom15_bg"), "default", 0, 0);
        entrar($("#nom" + i + "_bg"), "default", 0, 0);
        entrar($("#nom" + i + "_img1"), "arriba", 1, 0.2);
        entrar($("#nom" + i + "_img2"), "default", 1, 0.4);
        entrar($("#nom" + i + "_img3"), "arriba", 1, 0.6);
        entrar($("#nom" + i + "_img4"), "default", 1, 0.8);
        entrar($("#nom" + i + "_img5"), "izq", 1, 1);
        entrar($("#nom" + i + "_img6"), "default", 1, 1);
        entrar($("#nom" + i + "_img7"), "default", 1, 1.2);
        entrar($("#nom" + i + "_img8"), "sheker1", 1, 1.4);
        entrar($("#nom" + i + "_img9"), "default", 1, 1.6);
        entrar($("#nom" + i + "_img10"), "default", 1, 1.8);
        entrar($("#nom" + i + "_img11"), "default", 1, 2);
        entrar($("#contenedorMenu"), "default", 1, 2.2);
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
        entrar($("#nom" + i + "_img7"), "izq", 1, 1.4);
        entrar($("#nom" + i + "_img8"), "izq", 1, 1.6);
        entrar($("#nom" + i + "_img9"), "izq", 1, 1.8);
        entrar($("#nom" + i + "_img10"), "izq", 1, 2);
        entrar($("#nom" + i + "_img11"), "sheker1", 1, 2);
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
        entrar($("#nom" + i + "_img3"), "izq", 1, 0.6);
        entrar($("#nom" + i + "_img4"), "izq", 1, 0.8);
        entrar($("#nom" + i + "_img5"), "izq", 1, 1);
        entrar($("#nom" + i + "_img6"), "izq", 1, 1.2);
        entrar($("#nom" + i + "_img7"), "izq", 1, 1.4);
        entrar($("#nom" + i + "_img8"), "izq", 1, 1.6);
        entrar($("#nom" + i + "_img9"), "izq", 1, 1.6);
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
        entrar($("#nom" + i + "_img1"), "default", 1, 0.2);
        entrar($("#nom" + i + "_img2"), "default", 1, 0.4);
        entrar($("#nom" + i + "_img3"), "izq", 1, 0.6);
        entrar($("#nom" + i + "_img4"), "izq", 1, 0.7);
        entrar($("#nom" + i + "_img5"), "izq", 1, 0.8);
        entrar($("#nom" + i + "_img6"), "izq", 1, 0.9);
        entrar($("#nom" + i + "_img7"), "izq", 1, 1);
        entrar($("#nom" + i + "_img8"), "izq", 1, 1.1);
        entrar($("#nom" + i + "_img9"), "izq", 1, 1.2);
        entrar($("#nom" + i + "_img10"), "izq", 1, 1.3);
        entrar($("#nom" + i + "_img11"), "izq", 1, 1.4);
        entrar($("#nom" + i + "_img12"), "izq", 1, 1.5);
        entrar($("#nom" + i + "_img13"), "izq", 1, 1.6);
        entrar($("#nom" + i + "_img14"), "izq", 1, 1.7);
        entrar($("#nom" + i + "_img15"), "izq", 1, 1.8);
        entrar($("#nom" + i + "_img16"), "izq", 1, 1.9);
        entrar($("#nom" + i + "_img17"), "izq", 1, 2);
        entrar($("#nom" + i + "_img18"), "izq", 1, 2.1);
        entrar($("#nom" + i + "_img19"), "izq", 1, 2.2);
        entrar($("#nom" + i + "_img20"), "izq", 1, 2.3);
        entrar($("#nom" + i + "_img21"), "izq", 1, 2.4);
        entrar($("#nom" + i + "_img22"), "izq", 1, 2.5);
        entrar($("#nom" + i + "_img23"), "izq", 1, 2.6);
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
        entrar($("#nom" + i + "_img2"), "default", 1, 0.4);
        entrar($("#nom" + i + "_img3"), "izq", 1, 0.6);
        entrar($("#nom" + i + "_img4"), "izq", 1, 0.8);
        entrar($("#nom" + i + "_img7"), "izq", 1, 1);
        entrar($("#nom" + i + "_img8"), "izq", 1, 1.2);
        entrar($("#nom" + i + "_mano1"), "sheker2", 1, 1.4);
        entrar($("#nom" + i + "_btn1"), "default", 1, 1.6);
      }
    })
    .on("enter leave", function () {
      console.log("nom" + i + "");

      // Botones 🟩
      $("#nom" + i + "_btn1, #nom" + i + "_mano1").click(function () {
        stop($("#nom" + i + "_mano1"), true);
        // salida($("#nom" + i + "_mano1"), "default", 0, 0);
        entrar($("#nom" + i + "_img6"), "der", 1, 0);
        entrar($("#nom" + i + "_btn2"), "default", 1, 1);
        entrar($("#nom" + i + "_mano2"), "sheker2", 1, 1.2);
      });
      $("#nom" + i + "_btn2, #nom" + i + "_mano2").click(function () {
        stop($("#nom" + i + "_mano2"), true);
        // salida($("#nom" + i + "_mano2"), "default", 0, 0);
        entrar($("#nom" + i + "_img5"), "der", 1, 0);
      });
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
        entrar($("#nom" + i + "_img1"), "izq", 1, 0.2);
        entrar($("#nom" + i + "_img2"), "default", 1, 0.4);
        entrar($("#nom" + i + "_img3"), "izq", 1, 0.6);
        entrar($("#nom" + i + "_img4"), "izq", 1, 0.8);
        entrar($("#nom" + i + "_img5"), "izq", 1, 1);
        entrar($("#nom" + i + "_img6"), "izq", 1, 1.2);
        entrar($("#nom" + i + "_img7"), "izq", 1, 1.4);
        entrar($("#nom" + i + "_img8"), "izq", 1, 1.6);
      }
    })
    .on("enter leave", function () {
      console.log("nom" + i + "");
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
        entrar($("#nom" + i + "_img1"), "izq", 1, 0.2);
        entrar($("#nom" + i + "_img2"), "default", 1, 0.4);
        entrar($("#nom" + i + "_img3"), "default", 1, 0.6);
        entrar($("#nom" + i + "_img4"), "default", 1, 0.6);
        entrar($("#nom" + i + "_img5"), "default", 1, 0.6);
        entrar($("#nom" + i + "_img6"), "default", 1, 0.6);
        entrar($("#nom" + i + "_img7"), "default", 1, 0.6);
        entrar($("#nom" + i + "_img8"), "default", 1, 0.6);
        entrar($("#nom" + i + "_mano1"), "sheker2", 1, 0.8);
        entrar($("#nom" + i + "_btn1"), "default", 1, 1);
        entrar($("#nom" + i + "_btn2"), "default", 1, 1);
        entrar($("#nom" + i + "_btn3"), "default", 1, 1);
        entrar($("#nom" + i + "_btn4"), "default", 1, 1);
      }
    })
    .on("enter leave", function () {
      console.log("nom" + i + "");
      var modal1 = false;
      var modal2 = false;
      var modal3 = false;
      var modal4 = false;

      // Abrir Modal 🟩
      $("#nom" + i + "_btn1, #nom" + i + "_mano1").click(function () {
        stop($("#nom" + i + "_mano1"), true);
        // salida($("#nom" + i + "_mano1"), "default", 0, 0);
        $("#modal1P7").modal("show");
      });
      $("#nom" + i + "_btn2, #nom" + i + "_mano2").click(function () {
        stop($("#nom" + i + "_mano2"), true);
        // salida($("#nom" + i + "_mano2"), "default", 0, 0);
        $("#modal2P7").modal("show");
      });
      $("#nom" + i + "_btn3, #nom" + i + "_mano3").click(function () {
        stop($("#nom" + i + "_mano3"), true);
        // salida($("#nom" + i + "_mano3"), "default", 0, 0);
        $("#modal3P7").modal("show");
      });
      $("#nom" + i + "_btn4, #nom" + i + "_mano4").click(function () {
        stop($("#nom" + i + "_mano4"), true);
        // salida($("#nom" + i + "_mano4"), "default", 0, 0);
        $("#modal4P7").modal("show");
      });

      // Cuando los modales se cierran 🟩
      $("#modal1P7").on("hidden.bs.modal", function () {
        console.log("Sale modal1P7");
        modal2 == false ? entrar($("#nom" + i + "_mano2"), "sheker2", 1, 0) : console.log("visto");
        modal2 = true;
      });
      $("#modal2P7").on("hidden.bs.modal", function () {
        console.log("Sale modal2P7");
        modal3 == false ? entrar($("#nom" + i + "_mano3"), "sheker2", 1, 0) : console.log("visto");
        modal3 = true;
      });
      $("#modal3P7").on("hidden.bs.modal", function () {
        console.log("Sale modal3P7");
        modal4 == false ? entrar($("#nom" + i + "_mano4"), "sheker2", 1, 0) : console.log("visto");
        modal4 = true;
      });
      $("#modal4P7").on("hidden.bs.modal", function () {
        console.log("Sale modal4P7");
      });

      // Boton de cerrar modal 🟩
      $("#cerrar1P7").click(function () {
        $("#modal1P7").modal("hide");
      });
      $("#cerrar2P7").click(function () {
        $("#modal2P7").modal("hide");
      });
      $("#cerrar3P7").click(function () {
        $("#modal3P7").modal("hide");
      });
      $("#cerrar4P7").click(function () {
        $("#modal4P7").modal("hide");
      });
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
        entrar($("#nom" + i + "_img1"), "izq", 1, 0.2);
        entrar($("#nom" + i + "_img2"), "default", 1, 0.4);
        entrar($("#nom" + i + "_img3"), "default", 1, 0.6);
        entrar($("#nom" + i + "_img4"), "default", 1, 0.6);
        entrar($("#nom" + i + "_img5"), "default", 1, 0.6);
        entrar($("#nom" + i + "_img6"), "default", 1, 0.6);
        entrar($("#nom" + i + "_img7"), "default", 1, 0.6);
        entrar($("#nom" + i + "_img8"), "default", 1, 0.6);
        entrar($("#nom" + i + "_mano1"), "sheker2", 1, 0.8);
        entrar($("#nom" + i + "_btn1"), "default", 1, 1);
        entrar($("#nom" + i + "_btn2"), "default", 1, 1);
        entrar($("#nom" + i + "_btn3"), "default", 1, 1);
      }
    })
    .on("enter leave", function () {
      console.log("nom" + i + "");
      var modal1 = false;
      var modal2 = false;
      var modal3 = false;

      // Abrir Modal 🟩
      $("#nom" + i + "_btn1, #nom" + i + "_mano1").click(function () {
        stop($("#nom" + i + "_mano1"), true);
        // salida($("#nom" + i + "_mano1"), "default", 0, 0);
        $("#modal1P8").modal("show");
      });
      $("#nom" + i + "_btn2, #nom" + i + "_mano2").click(function () {
        stop($("#nom" + i + "_mano2"), true);
        // salida($("#nom" + i + "_mano2"), "default", 0, 0);
        $("#modal2P8").modal("show");
      });
      $("#nom" + i + "_btn3, #nom" + i + "_mano3").click(function () {
        stop($("#nom" + i + "_mano3"), true);
        // salida($("#nom" + i + "_mano3"), "default", 0, 0);
        $("#modal3P8").modal("show");
      });

      // Cuando los modales se cierran 🟩
      $("#modal1P8").on("hidden.bs.modal", function () {
        console.log("Sale modal1P8");
        modal2 == false ? entrar($("#nom" + i + "_mano2"), "sheker2", 1, 0) : console.log("visto");
        modal2 = true;
      });
      $("#modal2P8").on("hidden.bs.modal", function () {
        console.log("Sale modal2P8");
        modal3 == false ? entrar($("#nom" + i + "_mano3"), "sheker2", 1, 0) : console.log("visto");
        modal3 = true;
      });
      $("#modal3P8").on("hidden.bs.modal", function () {
        console.log("Sale modal3P8");
      });

      // Boton de cerrar modal 🟩
      $("#cerrar1P8").click(function () {
        $("#modal1P8").modal("hide");
      });
      $("#cerrar2P8").click(function () {
        $("#modal2P8").modal("hide");
      });
      $("#cerrar3P8").click(function () {
        $("#modal3P8").modal("hide");
      });
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
        entrar($("#nom" + i + "_img1"), "izq", 1, 0.2);
        entrar($("#nom" + i + "_img2"), "default", 1, 0.4);
        entrar($("#nom" + i + "_img3"), "default", 1, 0.6);
        entrar($("#nom" + i + "_img4"), "default", 1, 0.6);
        entrar($("#nom" + i + "_img5"), "default", 1, 0.6);
        entrar($("#nom" + i + "_img6"), "default", 1, 0.6);
        entrar($("#nom" + i + "_img7"), "default", 1, 0.6);
        entrar($("#nom" + i + "_img8"), "default", 1, 0.6);
        entrar($("#nom" + i + "_mano1"), "sheker2", 1, 0.8);
        entrar($("#nom" + i + "_btn1"), "default", 1, 1);
        entrar($("#nom" + i + "_btn2"), "default", 1, 1);
        entrar($("#nom" + i + "_btn3"), "default", 1, 1);
      }
    })
    .on("enter leave", function () {
      console.log("nom" + i + "");
      var modal1 = false;
      var modal2 = false;
      var modal3 = false;

      // Abrir Modal 🟩
      $("#nom" + i + "_btn1, #nom" + i + "_mano1").click(function () {
        stop($("#nom" + i + "_mano1"), true);
        // salida($("#nom" + i + "_mano1"), "default", 0, 0);
        $("#modal1P9").modal("show");
      });
      $("#nom" + i + "_btn2, #nom" + i + "_mano2").click(function () {
        stop($("#nom" + i + "_mano2"), true);
        // salida($("#nom" + i + "_mano2"), "default", 0, 0);
        $("#modal2P9").modal("show");
      });
      $("#nom" + i + "_btn3, #nom" + i + "_mano3").click(function () {
        stop($("#nom" + i + "_mano3"), true);
        // salida($("#nom" + i + "_mano3"), "default", 0, 0);
        $("#modal3P9").modal("show");
      });

      // Cuando los modales se cierran 🟩
      $("#modal1P9").on("hidden.bs.modal", function () {
        console.log("Sale modal1P9");
        modal2 == false ? entrar($("#nom" + i + "_mano2"), "sheker2", 1, 0) : console.log("visto");
        modal2 = true;
      });
      $("#modal2P9").on("hidden.bs.modal", function () {
        console.log("Sale modal2P9");
        modal3 == false ? entrar($("#nom" + i + "_mano3"), "sheker2", 1, 0) : console.log("visto");
        modal3 = true;
      });
      $("#modal3P9").on("hidden.bs.modal", function () {
        console.log("Sale modal3P9");
      });

      // Boton de cerrar modal 🟩
      $("#cerrar1P9").click(function () {
        $("#modal1P9").modal("hide");
      });
      $("#cerrar2P9").click(function () {
        $("#modal2P9").modal("hide");
      });
      $("#cerrar3P9").click(function () {
        $("#modal3P9").modal("hide");
      });
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
        entrar($("#nom" + i + "_img1"), "default", 1, 0.2);
        entrar($("#nom" + i + "_img2"), "default", 1, 0.4);
        entrar($("#nom" + i + "_img3"), "default", 1, 0.6);
        entrar($("#nom" + i + "_img4"), "izq", 1, 0.8);
        entrar($("#nom" + i + "_img5"), "izq", 1, 1);
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
        entrar($("#nom" + i + "_img1"), "default", 1, 0.2);
        entrar($("#nom" + i + "_img2"), "default", 1, 0.4);
        entrar($("#nom" + i + "_img3"), "default", 1, 0.6);
        entrar($("#nom" + i + "_img4"), "arriba", 1, 0.8);
        entrar($("#nom" + i + "_img5"), "izq", 1, 1);
        entrar($("#nom" + i + "_img6"), "izq", 1, 1.2);
        entrar($("#nom" + i + "_img7"), "izq", 1, 1.4);
        entrar($("#nom" + i + "_img8"), "izq", 1, 1.6);
        entrar($("#nom" + i + "_img9"), "izq", 1, 1.8);
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
        entrar($("#nom" + i + "_img1"), "default", 1, 0.2);
        entrar($("#nom" + i + "_img2"), "default", 1, 0.4);
        entrar($("#nom" + i + "_img3"), "default", 1, 0.6);
        entrar($("#nom" + i + "_img4"), "arriba", 1, 0.8);
        entrar($("#nom" + i + "_img5"), "izq", 1, 1);
        entrar($("#nom" + i + "_img6"), "izq", 1, 1.2);
        entrar($("#nom" + i + "_img7"), "izq", 1, 1.4);
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
        entrar($("#nom" + i + "_img1"), "default", 1, 0.2);
        entrar($("#nom" + i + "_img2"), "default", 1, 0.4);
        entrar($("#nom" + i + "_img3"), "default", 1, 0.6);
        entrar($("#nom" + i + "_img4"), "arriba", 1, 0.8);
        entrar($("#nom" + i + "_img5"), "izq", 1, 1);
        entrar($("#nom" + i + "_img6"), "izq", 1, 1.2);
        entrar($("#nom" + i + "_img7"), "izq", 1, 1.4);
        entrar($("#nom" + i + "_img8"), "izq", 1, 1.6);
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
        entrar($("#nom" + i + "_img4"), "arriba", 1, 0.8);
        entrar($("#nom" + i + "_img5"), "izq", 1, 1);
        entrar($("#nom" + i + "_img6"), "izq", 1, 1.2);
        entrar($("#nom" + i + "_img7"), "izq", 1, 1.4);
        entrar($("#nom" + i + "_img8"), "izq", 1, 1.6);
      }
    })
    .on("enter leave", function () {
      console.log("nom" + i + "");
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
        entrar($("#nom" + i + "_img3"), "default", 1, 0.6);
        entrar($("#nom" + i + "_img4"), "default", 1, 0.8);
        entrar($("#nom" + i + "_img5"), "arriba", 1, 1);
        entrar($("#nom" + i + "_img6"), "arriba", 1, 1.2);
        entrar($("#nom" + i + "_img7"), "izq", 1, 1.4);
        entrar($("#nom" + i + "_img8"), "abajo", 1, 1.6);
        entrar($("#nom" + i + "_img9"), "der", 1, 1.8);
        entrar($("#nom" + i + "_img10"), "der", 1, 2);
        entrar($("#nom" + i + "_img11"), "abajo", 1, 2.2);
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
