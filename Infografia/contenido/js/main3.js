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
	// $(".element").css({
	//   position: "absolute"
	// });

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

var visto_1 = 0;
var visto_2 = 0;
var visto_3 = 0;
var visto_4 = 0;
var visto_5 = 0;
var visto_6 = 0;
var visto_7 = 0;
var visto_8 = 0;

// AQUI SE PONEN LAS VALIDACIONES DE SCROLL <-------

function actualizaPosicion(elPorciento) {
	// console.log('elPorciento', elPorciento);
	elPorcientoFinal = elPorciento;
	$('#contenedorMenu').css({ position: 'fixed' });
	// for (a = 1; a <= cuantosElementos; a++) {
	//   if (elPorciento >= that["elementoPosIn" + a]) {
	//     if (!that["elementoIn" + a]) {
	//       apareceElemento("#texto" + a, 2000, 0);
	//       that["elementoIn" + a] = true;
	//     }
	//   }
	//   if (elPorciento >= that["elementoPosOut" + a]) {
	//     if (!that["elementoOut" + a]) {
	//       desapareceElemento("#texto" + a, 500, 0);
	//       that["elementoOut" + a] = true;
	//     }
	//   }
	// }

	if (elPorcientoFinal < 0.094 && visto_1 === 0) {
		// console.log('🚨');
		// animacion_entrada('#img1', 'arriba_abajo', 0);
		// animacion_entrada('#img2', 'default', 0.5);
		// animacion_entrada('#img3', 'izq_der', 1);
		// animacion_entrada('#img4', 'der_izq', 1.5);
		// animacion_entrada('#img5', 'der_izq', 2.5);
		// animacion_entrada('#img6', 'der_izq', 3);
		// animacion_entrada('#img7', 'der_izq', 2);
		// animacion_entrada('#img8', 'abajo_arriba', 1);
		// animacion_entrada('#img9', 'der_izq', 1);
		visto_1 = 1;
	}
	if (elPorcientoFinal > 0.1178 && elPorcientoFinal < 0.1461 && visto_2 === 0) {
		// console.log('🚨');
		animacion_entrada('#img10', 'default', 0);
		animacion_entrada('#img12', 'arriba_abajo', 0.5);
		animacion_entrada('#img11', 'default', 1);
		animacion_entrada('#img13', 'der_izq', 1.5);
		animacion_entrada('#img14', 'der_izq', 2);
		visto_2 = 1;
	}
	if (elPorcientoFinal > 0.261 && elPorcientoFinal < 0.2819 && visto_3 === 0) {
		animacion_entrada('#img16', 'izq_der', 1);
		animacion_entrada('#img17', 'izq_der', 1.5);
		animacion_entrada('#img18', 'default', 2);
		animacion_entrada('#img19', 'der_izq', 2.5);
		animacion_entrada('#img20', 'der_izq', 3);
		animacion_entrada('#img21', 'der_izq', 3.5);
		animacion_entrada('#img22', 'der_izq', 0.5);
		animacion_entrada('#img23', 'arriba_abajo', 0.5);
		animacion_entrada('#img24', 'default', 4);
		visto_3 = 1;
	}
	if (elPorcientoFinal > 0.3758 && elPorcientoFinal < 0.428 && visto_4 === 0) {
		animacion_entrada('#img25', 'default', 0);
		animacion_entrada('#img26', 'arriba_abajo', 0.5);
		animacion_entrada('#img27', 'arriba_abajo', 1);
		animacion_entrada('#img28', 'arriba_abajo', 1.5);
		animacion_entrada('#img29', 'der_izq', 1.5);
		visto_4 = 1;
	}
	if (elPorcientoFinal > 0.5115 && elPorcientoFinal < 0.5637 && visto_5 === 0) {
		animacion_entrada('#img30', 'default', 0);
		animacion_entrada('#img31', 'default', 0);
		animacion_entrada('#img33', 'der_izq', 0.5);
		animacion_entrada('#img34', 'abajo_arriba', 1);
		animacion_entrada('#img32', 'default', 1.5);
		animacion_entrada('#img35', 'der_izq', 2);
		animacion_entrada('#img36', 'der_izq', 2);
		animacion_entrada('#img37', 'der_izq', 2.5);
		animacion_entrada('#img38', 'der_izq', 3);
		visto_5 = 1;
	}
	if (elPorcientoFinal > 0.6263 && elPorcientoFinal < 0.7203 && visto_6 === 0) {
		animacion_entrada('#img41', 'default', 0);
		animacion_entrada('#img40', 'der_izq', 0.5);
		animacion_entrada('#img39', 'arriba_abajo', 1);
		animacion_entrada('#img43', 'abajo_arriba', 1.5);
		animacion_entrada('#img44', 'der_izq', 2);
		animacion_entrada('#img45', 'der_izq', 2.5);
		animacion_entrada('#img42', 'der_izq', 3);
		visto_6 = 1;
	}
	if (elPorcientoFinal > 0.7725 && elPorcientoFinal < 0.8426 && visto_7 === 0) {
		animacion_entrada('#img52', 'abajo_arriba', 0);
		animacion_entrada('#img47', 'arriba_abajo', 0.5);
		animacion_entrada('#img48', 'der_izq', 1);
		animacion_entrada('#img46', 'der_izq', 2);
		animacion_entrada('#img49', 'arriba_abajo', 2.5);
		animacion_entrada('#img50', 'arriba_abajo', 3);
		animacion_entrada('#img51', 'abajo_arriba', 3.5);
		visto_7 = 1;
	}
	if (elPorcientoFinal > 0.884 && visto_8 === 0) {
		animacion_entrada('#img56', 'der_izq', 0.5);
		animacion_entrada('#img53', 'der_izq', 1);
		animacion_entrada('#img58', 'der_izq', 1.5);
		animacion_entrada('#img55', 'der_izq', 2);
		animacion_entrada('#img59', 'der_izq', 2.5);
		animacion_entrada('#img57', 'der_izq', 3);
		animacion_entrada('#img54', 'der_izq', 3.5);
		animacion_entrada('#img64', 'abajo_arriba', 4);
		animacion_entrada('#img61', 'arriba_abajo', 4.5);
		animacion_entrada('#img66', 'abajo_arriba', 5);
		animacion_entrada('#img63', 'arriba_abajo', 5.5);
		animacion_entrada('#img67', 'abajo_arriba', 6);
		animacion_entrada('#img65', 'arriba_abajo', 6.5);
		animacion_entrada('#img62', 'abajo_arriba', 7);
		animacion_entrada('#img60', 'default', 7.5);
		visto_8 = 1;
	}
	// console.log('elPorcientoFinal', elPorcientoFinal);
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

function entra(cualElemento, laDuracion, elRetardo) {
	// console.log('apareceElemento', cualElemento);
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
	// console.log('desapareceElemento', cualElemento);

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
