/* Copyright DJ 2019 */

var styleVersions = new Array('-ms-', '-webkit-', '-moz-', '-o-', '');
var scalePage = 1;
var pegeWidth = 1900; //Tambien cambiar en app.js setScale()
var pageHeight = 900; //Tambien cambiar en app.js setScale()
var cargandoHeight = 50;
var cargandoWidth = 50;
var volPage = 100;
var enMovimiento = false;
var laPosicion = 0;
var velocidad = 10;
var elIntervalo;

var cuantosElementos = 4;
var elPorcientoFinal = 0;

this.elementoPosIn1 = 0.11;
this.elementoPosOut1 = 0.25;
this.elementoIn1 = false;
this.elementoOut1 = false;

this.elementoPosIn2 = 0.43;
this.elementoPosOut2 = 0.52;
this.elementoIn2 = false;
this.elementoOut2 = false;

this.elementoPosIn3 = 0.64;
this.elementoPosOut3 = 0.72;
this.elementoIn3 = false;
this.elementoOut3 = false;

this.elementoPosIn4 = 0.86;
this.elementoPosOut4 = 0.95;
this.elementoIn4 = false;
this.elementoOut4 = false;

this.elementoPosIn5 = 0.11;
this.elementoPosOut5 = 0.25;
this.elementoIn5 = false;
this.elementoOut5 = false;

var that = this;

function cacularEscala() {
	$('#btnAudio').attr('_origeny', '496');
	var contentHeight = $(document).height();
	var contentWidth = $(document).width();
	var _scaleX = contentWidth / pegeWidth;
	var _scaleY = contentHeight / pageHeight;
	if (_scaleX <= _scaleY) {
		scalePage = _scaleX;
	} else {
		scalePage = _scaleY;
	}
	if (scalePage >= 1) {
		scalePage = 1;
	}
}

function incrustaID(objeto, ID) {
	objeto.attr('_id', ID);
}

function ajustarEscenario() {
	$('#contenido').height(pageHeight * scalePage);
	$('#contenido').css('width', pegeWidth * scalePage + 'px');
	for (var i = 0; i <= styleVersions.length - 1; i++) {
		$('#contenido').css(styleVersions[i] + 'transform-origin', '0 0');
	}
	$('#cargando').css({
		top: (pageHeight * scalePage) / 2 - cargandoHeight / 4 + 'px',
		left: (pegeWidth * scalePage) / 2 - cargandoWidth / 3 + 'px'
	});

	// setVolumen();
}

function inicializar(objeto) {
	// console.log("objeto", objeto);

	objeto.css('opacity', '0');
	objeto.css('display', 'none');

	objeto.css('top', parseInt(objeto.attr('_origeny')) * scalePage + 'px');
	objeto.css('left', parseInt(objeto.attr('_origenx')) * scalePage + 'px');
	for (var i = 0; i <= styleVersions.length - 1; i++) {
		objeto.css(styleVersions[i] + 'transform', 'scale(' + scalePage + ', ' + scalePage + ')');
		objeto.css(styleVersions[i] + 'transform-origin', '0 0');
	}

	objeto.parent().css('width', parseInt(objeto.parent().attr('_width')) * scalePage + 100 + 'px');
	// console.log('width', objeto.parent().width());

	if (!enMovimiento) {
		$.jInvertScroll(['.scroll'], {
			width: 8000,
			height: 'auto',
			onScroll: function(percent) {
				// console.log('percent', percent);
				enMovimiento = true;
				// console.log('enMovimiento', enMovimiento);
				laPosicion = $(window).scrollTop();
				// console.log('laPosicion', laPosicion);
				actualizaPosicion(percent);
			}
		});
	}
	var isScrolling;
	window.addEventListener(
		'scroll',
		function(event) {
			window.clearTimeout(isScrolling);
			isScrolling = setTimeout(function() {
				enMovimiento = false;
				// console.log('enMovimiento', enMovimiento);
			}, 66);
		},
		false
	);
}

function actualizaPosicion(elPorciento) {
	// console.log('elPorciento', elPorciento);
	elPorcientoFinal = elPorciento;
	for (a = 1; a <= cuantosElementos; a++) {
		if (elPorciento >= that['elementoPosIn' + a]) {
			if (!that['elementoIn' + a]) {
				apareceElemento('#texto' + a, 2000, 0);
				that['elementoIn' + a] = true;
			}
		}
		if (elPorciento >= that['elementoPosOut' + a]) {
			if (!that['elementoOut' + a]) {
				desapareceElemento('#texto' + a, 500, 0);
				that['elementoOut' + a] = true;
			}
		}
	}
}

function retrocede() {
	if (!enMovimiento) {
		elIntervalo = setInterval(function() {
			// console.log('retrocede');
			$('html, body').scrollTop(laPosicion - velocidad);
			// $('html, body').animate({
			//     scrollTop: (laPosicion - velocidad)
			// }, 500);
		}, 1);
		enMovimiento = true;
	}
}

function avanza() {
	if (!enMovimiento) {
		elIntervalo = setInterval(function() {
			// console.log('avanza', laPosicion);
			$('html, body').scrollTop(laPosicion + velocidad);
			// $('html, body').animate({
			//     scrollTop: (laPosicion + velocidad)
			// }, 500);
		}, 1);
		enMovimiento = true;
	}
}

function detiene() {
	// console.log('detiene');
	clearInterval(elIntervalo);
	enMovimiento = false;
}

function aparecePersonaje(cualElemento, laDuracion, elRetardo) {
	// console.log('aparecePersonaje');
	$('#personaje')
		.css({
			display: 'block',
			position: 'absolute',
			top: '-200px'
		})
		.delay(elRetardo)
		.animate(
			{
				top: 0,
				opacity: 1
			},
			{
				duration: laDuracion,
				easing: 'easeOutBounce'
			}
		);
}

function apareceElemento(cualElemento, laDuracion, elRetardo) {
	// console.log("apareceElemento", cualElemento);

	if (elRetardo == null) {
		elRetardo = 0;
	}

	$(cualElemento)
		.css({
			display: 'block',
			position: 'absolute',
			top: '500px'
		})
		.delay(elRetardo)
		.animate(
			{
				top: 80,
				opacity: 1
			},
			{
				duration: laDuracion,
				easing: 'easeOutElastic'
			}
		);
}

function desapareceElemento(cualElemento, laDuracion, elRetardo) {
	// console.log("desapareceElemento", cualElemento);

	if (elRetardo == null) {
		elRetardo = 0;
	}

	$(cualElemento)
		.delay(elRetardo)
		.animate(
			{
				opacity: 0
			},
			{
				duration: laDuracion
			}
		);
}

$(document).ready(function() {});
