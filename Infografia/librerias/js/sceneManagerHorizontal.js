var showIndicators = false;
var controller = new ScrollMagic.Controller({ vertical: false });
var altoBase = 1080;
var anchoBase = 1920;
var RELACION_ANCHO = altoBase / anchoBase;

function processScene(scene, hideHook) {
	scene.on('enter', function(e) {
		//e.target.destroy();
	});
	if (showIndicators) {
		scene.addIndicators();
	}
	if (!hideHook) {
		scene.triggerHook(0.5);
	} else {
		scene.triggerHook(0);
	}
	return scene;
}

function timeAleatorio(xMax) {
	var random_number = Math.random() * xMax;
	return random_number;
}

function addCommasToNumber(number) {
	return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}

$(document).ready(function() {
	playContenidoDesk();
	/* playContenidoDeskS4();
    playContenidoDeskS5();
    playContenidoDeskS6();
    playContenidoDeskS7();
    playContenidoDeskS8();
    playContenidoDeskS9();
    playContenidoDeskS10();
    playContenidoDeskS11();
    playContenidoDeskS12();*/
});
