var anima_loop = false;

function animacion_entrada(objeto, tipo, retardo) {
	var tiempo_animacion = 0.5;
	switch (tipo) {
		case 'default':
			TweenMax.to(objeto, tiempo_animacion, { delay: -1 });
			TweenMax.to(objeto, tiempo_animacion, {
				delay: retardo,
				css: { opacity: 1, display: 'block' }
			});
			// console.log("objeto");
			// console.log(objeto);
			break;
		case 'arriba_abajo':
			TweenMax.fromTo(
				objeto,
				tiempo_animacion,
				{ delay: retardo, css: { 'margin-top': '-30vw', opacity: 0 } },
				{ delay: retardo, css: { 'margin-top': '0vw', opacity: 1 } }
			);
			TweenMax.to(objeto, tiempo_animacion, {
				css: { display: 'block' }
			});
			break;
		case 'abajo_arriba':
			TweenMax.fromTo(
				objeto,
				tiempo_animacion,
				{ delay: retardo, css: { 'margin-top': '30vw', opacity: 0 } },
				{ delay: retardo, css: { 'margin-top': '0vw', opacity: 1 } }
			);
			TweenMax.to(objeto, tiempo_animacion, {
				css: { display: 'block' }
			});
			break;
		case 'izq_der':
			TweenMax.fromTo(
				objeto,
				tiempo_animacion,
				{ delay: retardo, css: { 'margin-left': '-100vw', opacity: 0 } },
				{ delay: retardo, css: { 'margin-left': '0vw', opacity: 1 } }
			);
			TweenMax.to(objeto, tiempo_animacion, {
				css: { display: 'block' }
			});
			break;
		case 'der_izq':
			TweenMax.fromTo(
				objeto,
				tiempo_animacion,
				{ delay: retardo, css: { 'margin-left': '30vw', opacity: 0 } },
				{ delay: retardo, css: { 'margin-left': '0vw', opacity: 1 } }
			);
			TweenMax.to(objeto, tiempo_animacion, {
				css: { display: 'block' }
			});
			break;
		case 'ampliar':
			TweenMax.to(objeto, tiempo_animacion, {
				delay: -1,
				css: { scale: 1 },
				opacity: 1
			});
			TweenMax.to(objeto, tiempo_animacion, {
				css: { display: 'block' }
			});
			break;
		case 'parpadea':
			$(objeto).css({
				opacity: 1
			});
			TweenMax.to(objeto, 0.3, {
				alpha: 1,
				delay: retardo
			});
			TweenMax.to(objeto, 0.5, {
				alpha: 0.5,
				yoyo: true,
				repeat: -1,
				ease: Sine.easeIn,
				delay: retardo + 0.5
			});
			// console.log("💎", objeto);

			setTimeout(function() {
				$(objeto).css({
					cursor: 'pointer'
				});
			}, retardo * 1000);
			break;
	}
}

function animacion_salida(objeto, tipo, retardo) {
	var tiempo_animacion = 0.5;
	switch (tipo) {
		case 'default':
			TweenMax.to(objeto, tiempo_animacion, { delay: -1 });
			TweenMax.to(objeto, tiempo_animacion, {
				delay: retardo,
				css: { opacity: 0 }
			});
			break;
		case 'arriba_abajo':
			TweenMax.fromTo(
				objeto,
				tiempo_animacion,
				{ delay: retardo, css: { 'margin-top': '-30vw', opacity: 0 } },
				{ delay: retardo, css: { 'margin-top': '0vw', opacity: 1 } }
			);
			break;
		case 'abajo_arriba':
			TweenMax.fromTo(
				objeto,
				tiempo_animacion,
				{ delay: retardo, css: { 'margin-top': '30vw', opacity: 0 } },
				{ delay: retardo, css: { 'margin-top': '0vw', opacity: 1 } }
			);
			break;
		case 'izq_der':
			TweenMax.fromTo(
				objeto,
				tiempo_animacion,
				{ delay: retardo, css: { 'margin-left': '-100vw', opacity: 0 } },
				{ delay: retardo, css: { 'margin-left': '0vw', opacity: 1 } }
			);
			break;
		case 'der_izq':
			TweenMax.fromTo(
				objeto,
				tiempo_animacion,
				{ delay: retardo, css: { 'margin-left': '30vw', opacity: 0 } },
				{ delay: retardo, css: { 'margin-left': '0vw', opacity: 1 } }
			);
			break;
		case 'ampliar':
			TweenMax.to(objeto, tiempo_animacion, {
				delay: -1,
				css: { scale: 1 },
				opacity: 1
			});
			break;
	}
}
function parpadea(elemento, retardo) {
	if (retardo == undefined) {
		retardo = 0;
	}
	elemento.show();
	TweenMax.to(elemento, 0.3, {
		alpha: 1,
		delay: retardo
	});
	TweenMax.to(elemento, 0.5, {
		alpha: 0.2,
		yoyo: true,
		repeat: -1,
		ease: Sine.easeIn,
		delay: retardo + 0.5
	});

	setTimeout(function() {
		elemento.css({
			cursor: 'pointer'
		});
	}, retardo * 1000);
}
