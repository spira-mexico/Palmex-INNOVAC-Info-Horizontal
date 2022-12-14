//// * Inicializa el Curso * ////
$(document).ready(function () {
  console.log("Ready");
  setScale();
});
$(window).on("resize", function () {
  setScale();
});

function setScale() {
  var sourceWidth = 1920;
  var sourceHeigth = 940;
  var contentWidth = $(window).width();
  var contentHeigth = $(window).height();
  var _scaleX = contentWidth / sourceWidth;
  var _scaleY = contentHeigth / sourceHeigth;

  scaleTemplate = Math.min(contentWidth / sourceWidth, contentHeigth / sourceHeigth);
  if (_scaleX <= _scaleY) {
    scaleTemplate = _scaleX;
  } else {
    scaleTemplate = _scaleY;
  }
  if (scaleTemplate >= 1) {
    scaleTemplate = 1;
  }

  $("#box").css({
    transform: "translate(-50%, -50%) " + "scale(" + scaleTemplate + ")",
  });

  $("#box").width(sourceWidth);
  $("#box").height(sourceHeigth);
}
