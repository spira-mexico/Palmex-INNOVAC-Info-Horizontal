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

$("html").mousewheel(function (e, delta) {
  e.preventDefault();
  this.scrollLeft -= delta;
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
        stop($("#nom" + i + "_mano1"), 0);
        salida($("#nom" + i + "_mano1"), "default", 0, 0);
        entrar($("#nom" + i + "_img6"), "der", 1, 0);
        entrar($("#nom" + i + "_btn2"), "default", 1, 1);
        entrar($("#nom" + i + "_mano2"), "sheker2", 1, 1.2);
      });
      $("#nom" + i + "_btn2, #nom" + i + "_mano2").click(function () {
        stop($("#nom" + i + "_mano2"), 0);
        salida($("#nom" + i + "_mano2"), "default", 0, 0);
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
        entrar($("#nom" + i + "_img1"), "default", 1, 0.2);
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
        entrar($("#nom" + i + "_img1"), "default", 1, 0.2);
        entrar($("#nom" + i + "_img2"), "default", 1, 0.4);
        entrar($("#nom" + i + "_img3"), "default", 1, 0.6);
        entrar($("#nom" + i + "_mano1"), "default", 1, 0.8);
        entrar($("#nom" + i + "_btn1"), "default", 1, 1);
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
