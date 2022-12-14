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

function actualizaPosicion(elPorciento) {
	// console.log("elPorciento", elPorciento);
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

	if (elPorcientoFinal > 0.0001 && elPorcientoFinal < 0.0579 && visto_1 === 0) {
		// console.log("🚨");
		// animacion_entrada("#img1", "arriba_abajo", 0.5);
		// animacion_entrada("#img2", "default", 1);
		// animacion_entrada("#img7", "der_izq", 1.5);
		// animacion_entrada("#img3", "der_izq", 2);
		// animacion_entrada("#img4", "arriba_abajo", 2.5);
		// animacion_entrada("#img5", "arriba_abajo", 3);
		// animacion_entrada("#img6", "arriba_abajo", 3.5);
		visto_1 = 1;
	}
	if (elPorcientoFinal > 0.1447 && elPorcientoFinal < 0.2025 && visto_2 === 0) {
		//  console.log("🚨");
		animacion_entrada('#img8', 'arriba_abajo', 0.5);
		animacion_entrada('#img10', 'default', 1);
		animacion_entrada('#img9', 'der_izq', 1.5);
		animacion_entrada('#img11', 'abajo_arriba', 1.5);

		visto_2 = 1;
	}
	if (elPorcientoFinal > 0.3183 && elPorcientoFinal < 0.3906 && visto_3 === 0) {
		//  console.log("🚨");
		animacion_entrada('#img12', 'default', 0.5);
		animacion_entrada('#img13', 'der_izq', 1);
		animacion_entrada('#img14', 'default', 1.5);
		animacion_entrada('#img15', 'der_izq', 2);
		animacion_entrada('#spriteanimado', 'default', 2);
		visto_3 = 1;
	}
	if (elPorcientoFinal > 0.5787 && elPorcientoFinal < 0.6944 && visto_4 === 0) {
		//  console.log("🚨");
		animacion_entrada('#img16', 'default', 0.5);
		animacion_entrada('#img18', 'default', 1);
		animacion_entrada('#img17', 'arriba_abajo', 1.5);
		visto_4 = 1;
	}
	if (elPorcientoFinal > 0.7234 && elPorcientoFinal < 0.8247 && visto_5 === 0) {
		//  console.log("🚨");
		animacion_entrada('#img19', 'arriba_abajo', 0.5);
		animacion_entrada('#img21', 'default', 0.5);
		animacion_entrada('#img20', 'der_izq', 1);
		animacion_entrada('#img23', 'abajo_arriba', 1.5);
		animacion_entrada('#img22', 'default', 2);
		animacion_entrada('#img24', 'default', 2.5);
		animacion_entrada('#img25', 'arriba_abajo', 3);
		animacion_entrada('#img26', 'der_izq', 3.5);
		visto_5 = 1;
	}
	if (elPorcientoFinal > 0.9259 && visto_6 === 0) {
		// console.log("🚨");
		animacion_entrada('#img29', 'default', 0.5);
		animacion_entrada('#img30', 'default', 1);
		animacion_entrada('#img27', 'arriba_abajo', 1.5);
		animacion_entrada('#img28', 'arriba_abajo', 2);
		animacion_entrada('#img31', 'der_izq', 2.5);
		visto_6 = 1;
	}
	if (elPorcientoFinal > 0.8843) {
		$('#carro1').css('left', '8290px');
		$('#carro1').css('position', 'relative');
	} else {
		$('#carro1').css('left', '115px');
		$('#carro1').css('position', 'fixed');
	}
	// console.log("elPorcientoFinal", elPorcientoFinal);
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

	$('#img4').css('cursor', 'pointer');
	$('#img32').css('display', 'none');
	$('#img5').css('cursor', 'pointer');
	$('#img33').css('display', 'none');
	$('#img6').css('cursor', 'pointer');
	$('#img34').css('display', 'none');

	$('#img4').click(function() {
		// console.log("btn1");

		if ($('#img32').css('display') === 'none') {
			$('#img32').css('display', 'block');
			$('#img32').css('opacity', 1);

			if ($('#img33').css('display') === 'block') {
				$('#img33').css('opacity', 0);
				$('#img33').css('display', 'none');
			}
			if ($('#img34').css('display') === 'block') {
				$('#img34').css('opacity', 0);
				$('#img34').css('display', 'none');
			}
		}
	});
	$('#img5').click(function() {
		if ($('#img33').css('display') === 'none') {
			$('#img33').css('opacity', 1);
			$('#img33').css('display', 'block');

			if ($('#img32').css('display') === 'block') {
				$('#img32').css('opacity', 0);
				$('#img32').css('display', 'none');
			}
			if ($('#img34').css('display') === 'block') {
				$('#img34').css('opacity', 0);
				$('#img34').css('display', 'none');
			}
		}
	});
	$('#img6').click(function() {
		if ($('#img34').css('display') === 'none') {
			$('#img34').css('opacity', 1);
			$('#img34').css('display', 'block');

			if ($('#img33').css('display') === 'block') {
				$('#img33').css('opacity', 0);
				$('#img33').css('display', 'none');
			}
			if ($('#img32').css('display') === 'block') {
				$('#img32').css('opacity', 0);
				$('#img32').css('display', 'none');
			}
		}
	});
});
