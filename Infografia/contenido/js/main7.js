/* Copyright DJ 2019 */

var styleVersions = new Array('-ms-', '-webkit-', '-moz-', '-o-', '');
var scalePage = 1;
var pageHeight = 990; //Tambien cambiar en app.js 35
var pegeWidth = 1900; //Tambien cambiar en app.js 36
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
}

function inicializar(objeto) {
	objeto.css('opacity', '0');
	objeto.css('display', 'none');

	objeto.css('top', parseInt(objeto.attr('_origeny')) * scalePage + 'px');
	objeto.css('left', parseInt(objeto.attr('_origenx')) * scalePage + 'px');
	for (var i = 0; i <= styleVersions.length - 1; i++) {
		objeto.css(styleVersions[i] + 'transform', 'scale(' + scalePage + ', ' + scalePage + ')');
		objeto.css(styleVersions[i] + 'transform-origin', '0 0');
	}

	objeto.parent().css('width', parseInt(objeto.parent().attr('_width')) * scalePage + 100 + 'px');

	if (!enMovimiento) {
		$.jInvertScroll(['.scroll'], {
			width: 8000,
			height: 'auto',
			onScroll: function(percent) {
				enMovimiento = true;
				laPosicion = $(window).scrollTop();
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
			}, 66);
		},
		false
	);
}

var visto_1 = 0;
var visto_2 = 0;
var visto_3 = 0;
var visto_4 = 0;
var visto_5 = 0;

function actualizaPosicion(elPorciento) {
	// console.log("elPorciento", elPorciento);
	elPorcientoFinal = elPorciento;
	$('#contenedorMenu').css({ position: 'fixed' });

	if (elPorcientoFinal > 0.4149 && elPorcientoFinal < 1 && visto_2 === 0) {
		// console.log("🚨");
		animacion_entrada('#img14', 'abajo_arriba', 0);
		animacion_entrada('#img10', 'izq_der', 0.4);
		animacion_entrada('#img15', 'arriba_abajo', 0.8);
		animacion_entrada('#img16', 'der_izq', 1.2);
		animacion_entrada('#img8', 'der_izq', 1.6);
		animacion_entrada('#img7', 'der_izq', 2);
		animacion_entrada('#img9', 'abajo_arriba', 2.4);
		animacion_entrada('#img17', 'der_izq', 2.8);
		animacion_entrada('#img18', 'der_izq', 3);

		visto_2 = 1;
	}
	// console.log("elPorcientoFinal", elPorcientoFinal);
}

function retrocede() {
	if (!enMovimiento) {
		elIntervalo = setInterval(function() {
			$('html, body').scrollTop(laPosicion - velocidad);
		}, 1);
		enMovimiento = true;
	}
}

function avanza() {
	if (!enMovimiento) {
		elIntervalo = setInterval(function() {
			$('html, body').scrollTop(laPosicion + velocidad);
		}, 1);
		enMovimiento = true;
	}
}

function detiene() {
	clearInterval(elIntervalo);
	enMovimiento = false;
}

function aparecePersonaje(cualElemento, laDuracion, elRetardo) {
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

function entra(cualElemento, laDuracion, elRetardo) {
	// console.log("apareceElemento", cualElemento);
	if (elRetardo == null) {
		elRetardo = 0;
	}
	$(cualElemento).css({
		display: 'block',
		position: 'absolute',
		opacity: 1
	});
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

$(document).ready(function() {
	$('#btn1').click(function() {
		page = 'seccion1.html';
		parent.guardaAvance(1);
		parent.loadContent(page);
	});
	$('#btn2').click(function() {
		page = 'seccion2.html';
		parent.guardaAvance(2);
		parent.loadContent(page);
	});
	$('#btn3').click(function() {
		page = 'seccion3.html';
		parent.guardaAvance(3);
		parent.loadContent(page);
	});
	$('#btn4').click(function() {
		page = 'seccion4.html';
		parent.guardaAvance(4);
		parent.loadContent(page);
	});
	$('#btn5').click(function() {
		page = 'seccion5.html';
		parent.guardaAvance(5);
		parent.loadContent(page);
	});
	$('#btn6').click(function() {
		page = 'seccion6.html';
		parent.guardaAvance(6);
		parent.loadContent(page);
	});
	$('#btn7').click(function() {
		page = 'seccion7.html';
		parent.guardaAvance(7);
		parent.loadContent(page);
	});
});
