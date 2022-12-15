/* Copyright DJ 2019 */

var currentPage = 0;
var curseStatus = "";
var curseCompleted = false;
var scaleTemplate = 1;
var orientation = "";
var pageFinished = -1;
var soundVolume = 100;
var bloqueoGral = false;

// variables SCORM
var SCORM = false;
var masteryScore = 80;
var bookmark = "";
var suspend_data = "";

function inicia() {
  console.log("inicia");
  init();
  checkProgress();
}

function resize() {
  console.log("resize");
  //   loadContent(url);
}

function termina() {
  console.log("termina");
  complete();
}

function guardaAvance(cual) {
  var array = [0, 0, 0, 0, 0, 0, 0];
  if (cual === 0) {
    if (SCORM === true) {
      set("cmi.core.lesson_location", 1);
      save();
      set("cmi.suspend_data", array);
      save();
    } else {
      localStorage.setItem("cmi.core.lesson_location", 1);
      localStorage.setItem("cmi.suspend_data", array);
    }

    var arrayscorm = get("cmi.suspend_data");
    console.log("dataScorm: " + arrayscorm);
    console.log("typeof: " + typeof arrayscorm);
  } else {
    var vistosScorm = get("cmi.suspend_data");
    var stringToArray = vistosScorm.split(",");
    if (stringToArray[cual - 1] === "0") {
      stringToArray[cual - 1] = 1;
      stringToArray.toString();
      set("cmi.suspend_data", stringToArray);
      save();
      set("cmi.core.lesson_location", cual);
      save();
      console.log("dataScormNew: " + stringToArray);
      console.log("stringToArray: " + typeof stringToArray[0]);
    }
    if (stringToArray[0] === "1" && stringToArray[1] === "1" && stringToArray[2] === "1" && stringToArray[3] === "1" && stringToArray[4] === "1" && stringToArray[5] === "1" && stringToArray[6] === "1") {
      console.log("YA SE TERMINO EL CURSO");
      termina();
    }
  }
}

function checkProgress() {
  var curseStatus;
  if (SCORM === true) {
    curseStatus = get("cmi.core.lesson_status");
  } else {
    curseStatus = "incomplete";
  }
  switch (curseStatus) {
    case "not attempted":
      loadContent("secciones.html");
      break;
    case "completed":
      loadContent("secciones.html");
      break;
    case "incomplete":
      var lastPage;
      if (SCORM === true) {
        lastPage = get("cmi.core.lesson_location");
      } else {
        lastPage = localStorage.getItem("cmi.core.lesson_location");
      }
      console.log("lastPage: " + lastPage);
      console.log("lastPage typeof: " + typeof lastPage);
      guardaAvance(0);
      if (lastPage == "null" || lastPage == "undefined" || lastPage == "") {
        lastPage = 0;
        // loadContent("index.html");
        loadContent("secciones.html");
      } else {
        console.log("Última página: " + lastPage);
        switch (parseInt(lastPage)) {
          case 0:
            // loadContent("index.html");
            loadContent("secciones.html");
            break;
          case 1:
            guardaAvance(1);
            loadContent("secciones.html");
            break;
          case 2:
            guardaAvance(2);
            loadContent("seccion2.html");
            break;
          case 3:
            guardaAvance(3);
            loadContent("seccion3.html");
            break;
          case 4:
            guardaAvance(4);
            loadContent("seccion4.html");
            break;
          case 5:
            guardaAvance(5);
            loadContent("seccion5.html");
            break;
          case 6:
            guardaAvance(6);
            loadContent("seccion6.html");
            break;
          case 7:
            guardaAvance(7);
            loadContent("seccion7.html");
            break;
          default:
            loadContent("secciones.html");
            break;
        }
      }
      break;
    case "passed":
      loadContent("secciones.html");
      alert("passed");
      break;
    case "failed":
      loadContent("secciones.html");
      alert("failed");
      break;
    case "unknown":
      loadContent("secciones.html");
      alert("unknown");
      break;
    default:
      alert("Error: No se encuentra ningun lms");
      loadContent("secciones.html");
      break;
  }
  //lmsCall("SetValue","cmi.comments",""+course.pages.length+"");
}

function setScale() {
  var sourceWidth = 1900; //Tambien cambiar en scrips.js 7
  var sourceHeigth = 900; //Tambien cambiar en scrips.js 6
  var contentHeigth = $(window).height();
  var contentWidth = $(window).width();
  var _scaleX = contentWidth / sourceWidth;
  var _scaleY = contentHeigth / sourceHeigth;
  var proportion = contentWidth / contentHeigth;
  if (proportion >= 1) {
    $("#bloqueo").hide();
  } else {
    // if (mobileCurse) {
    //     $("#bloqueo").show();
    // }
  }
  if (_scaleX <= _scaleY) {
    scaleTemplate = _scaleX;
  } else {
    scaleTemplate = _scaleY;
  }
  if (scaleTemplate >= 1) {
    scaleTemplate = 1;
  }
  /*
    if(contentWidth <= 512){
        scaleTemplate = scaleTemplate - .05;
    }*/
  $("#box").height(sourceHeigth * scaleTemplate);
  // $("#box").height("100vh");
  $("#box").width(sourceWidth * scaleTemplate);
  $("#box").css("margin-top", "-" + (sourceHeigth * scaleTemplate) / 2 + "px");
  // $("#box").css("margin-top", 0);
  $("#box").css("margin-left", "-" + (sourceWidth * scaleTemplate) / 2 + "px");

  $(".top").css("-ms-transform-origin", "0 0");
  $(".top").css("-webkit-transform-origin", "0 0");
  $(".top").css("transform-origin", "0 0");
  $(".top").css("height", scaleTemplate * 40 + "px");

  $(".logo, .titulo").css("-ms-transform", "scale(" + scaleTemplate + "," + scaleTemplate + ")");
  $(".logo, .titulo").css("-webkit-transform", "scale(" + scaleTemplate + "," + scaleTemplate + ")");
  $(".logo, .titulo").css("transform", "scale(" + scaleTemplate + "," + scaleTemplate + ")");

  $(".logo").css("-ms-transform-origin", "-20px 0");
  $(".logo").css("-webkit-transform-origin", "-20px 0");
  $(".logo").css("transform-origin", "-20px 0");

  $(".titulo").css("-ms-transform-origin", "120% 0");
  $(".titulo").css("-webkit-transform-origin", "120% 0");
  $(".titulo").css("transform-origin", "120% 0");

  $(".controles").css("-ms-transform-origin", "0 100%");
  $(".controles").css("-webkit-transform-origin", "0 100%");
  $(".controles").css("transform-origin", "0 100%");
  $(".controles").css("height", scaleTemplate * 70 + "px");

  $(".botonAtras, .botonAdelante").css("-ms-transform", "scale(" + scaleTemplate + "," + scaleTemplate + ")");
  $(".botonAtras, .botonAdelante").css("-webkit-transform", "scale(" + scaleTemplate + "," + scaleTemplate + ")");
  $(".botonAtras, .botonAdelante").css("transform", "scale(" + scaleTemplate + "," + scaleTemplate + ")");

  $(".botonAtras").css("transform-origin", "280% 0");
  $(".botonAdelante").css("transform-origin", "150% 0");

  $("#content").css({
    "padding-right": "20px",
  });

  // console.log("Espacio :" + contentWidth + "px, " + contentHeigth + "px");
  // console.log("Escala :" + scaleTemplate);
  // console.log(sourceHeigth * scaleTemplate);
}

function loadContent(cualpage) {
  setScale();
  $("#content").html('<iframe name="com" id="com" src="' + contentPath + cualpage + '" frameborder="0"   border="0"></iframe>');
  actualizaDatos();
}

function actualizaDatos() {
  $(".titulo").text(titulo);
  $(".element").css("opacity", 0);

  $("#botonAtras, #botonAdelante").css({
    cursor: "pointer",
  });

  $("#botonAtras")
    .hammer()
    .on("touch", function () {
      var elContenido = document.getElementById("com");
      elContenido.contentWindow.retrocede();
      $(this).attr("src", "imagenes/botonAtrasPressed.png");
    });
  $("#botonAdelante")
    .hammer()
    .on("touch", function () {
      var elContenido = document.getElementById("com");
      elContenido.contentWindow.avanza();
      $(this).attr("src", "imagenes/botonAdelantePressed.png");
    });
  $("#botonAdelante, #botonAtras")
    .hammer()
    .on("release", function () {
      var elContenido = document.getElementById("com");
      elContenido.contentWindow.detiene();
      $("#botonAtras").attr("src", "imagenes/botonAtras.png");
      $("#botonAdelante").attr("src", "imagenes/botonAdelante.png");
    });
  // $(document).off('click', '#botonAdelante').on('click', '#botonAdelante', function (e) {
  //     var elContenido = document.getElementById('com');
  //     elContenido.contentWindow.avanza();
  // });

  // $(document).off('click', '#botonAtras').on('click', '#botonAtras', function (e) {
  //     var elContenido = document.getElementById('com');
  //     elContenido.contentWindow.retrocede();
  // });
}

$(document).ready(function () {
  // bloquear botones del mouse
  $(document).mousedown(function (e) {
    // console.log(e.which);

    if (e.which == 2) {
      return false;
    }
    $(document).bind("contextmenu", function (e) {
      return false;
    });
  });
  $("html, body").on("touchstart touchmove", function (e) {
    e.preventDefault();
  });
});

$(window).unload(function () {});
