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
var visto_9 = 0;
var visto_10 = 0;
var visto_11 = 0;
var visto_12 = 0;
var visto_13 = 0;
var visto_14 = 0;
var visto_15 = 0;
var visto_16 = 0;
var visto_17 = 0;
var visto_18 = 0;
var visto_19 = 0;
var visto_20 = 0;
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

	if (elPorcientoFinal > 0.07 && elPorcientoFinal < 0.1 && visto_1 === 0) {
		// console.log("🚨");
		animacion_entrada('#img01', 'der_izq', 0);
		visto_1 = 1;
	}
	if (elPorcientoFinal > 0.168 && elPorcientoFinal < 0.23 && visto_2 === 0) {
		animacion_entrada('#img02', 'default', 0); // Entra niña
		visto_2 = 1;
	}
	// if (elPorcientoFinal > 0.1680 && elPorcientoFinal < 0.2300) {
	//   $('#img02').css({ left: 1185 + laPosicion - scalePage });  // Se anima niña
	//   console.log(1185 + laPosicion - scalePage);
	// }
	if (elPorcientoFinal > 0.2142 && elPorcientoFinal < 0.25) {
		$('#img04').css('opacity', 0);
		$('#img03').css('opacity', 1);
		$('#img03').css('display', 'block');
		visto_3 = 1;
	}
	if (elPorcientoFinal > 0.25 && elPorcientoFinal < 0.27) {
		$('#img03').css('opacity', 0);
		$('#img04').css('opacity', 1);
		$('#img04').css('display', 'block');
		visto_4 = 1;
	}
	if (elPorcientoFinal > 0.37 && elPorcientoFinal < 0.39 && visto_5 === 0) {
		animacion_entrada('#img05', 'der_izq', 0);
		visto_5 = 1;
	}
	if (elPorcientoFinal > 0.39 && elPorcientoFinal < 0.41 && visto_6 === 0) {
		animacion_entrada('#img06', 'der_izq', 0);
		animacion_entrada('#img09', 'default', 0);
		visto_6 = 1;
	}
	if (elPorcientoFinal > 0.51 && elPorcientoFinal < 0.53 && visto_7 === 0) {
		animacion_entrada('#img07', 'der_izq', 0);
		visto_7 = 1;
	}
	if (elPorcientoFinal > 0.56 && elPorcientoFinal < 0.58 && visto_8 === 0) {
		animacion_entrada('#img08', 'der_izq', 0);
		visto_8 = 1;
	}
	if (elPorcientoFinal > 0.6 && elPorcientoFinal < 0.62 && visto_9 === 0) {
		animacion_entrada('#img10', 'der_izq', 0);
		visto_9 = 1;
	}
	if (elPorcientoFinal > 0.65 && elPorcientoFinal < 0.67 && visto_10 === 0) {
		animacion_entrada('#img11', 'der_izq', 0);
		visto_10 = 1;
	}
	if (elPorcientoFinal > 0.7 && elPorcientoFinal < 0.72 && visto_11 === 0) {
		animacion_entrada('#img12', 'der_izq', 0);
		visto_11 = 1;
	}
	if (elPorcientoFinal > 0.75 && elPorcientoFinal < 0.77 && visto_12 === 0) {
		animacion_entrada('#img13', 'der_izq', 0);
		visto_12 = 1;
	}
	if (elPorcientoFinal > 0.8 && elPorcientoFinal < 0.82 && visto_13 === 0) {
		animacion_entrada('#img14', 'der_izq', 0);
		visto_13 = 1;
	}
	if (elPorcientoFinal > 0.82 && elPorcientoFinal < 0.84 && visto_14 === 0) {
		animacion_entrada('#img15', 'der_izq', 0);
		visto_14 = 1;
	}
	if (elPorcientoFinal > 0.88 && elPorcientoFinal < 0.9 && visto_15 === 0) {
		animacion_entrada('#img16', 'der_izq', 0);
		visto_15 = 1;
	}
	if (elPorcientoFinal > 0.9 && elPorcientoFinal < 0.92 && visto_16 === 0) {
		animacion_entrada('#img17', 'der_izq', 0);
		visto_16 = 1;
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
