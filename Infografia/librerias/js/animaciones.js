
// default
// arriba
// abajo
// izq
// der
// zoom
// sheker1
// sheker2 - para mano
// sheker3
// shekerLeft
// flip
// slideUp
// slideDown
// rebota
// rueda
// gira1
// flash
// flash1
// pulsar
// inline-block
// zoominter

function entrar(objeto, tipo, velocidad, retardo, funcion_sigue) {
    if (velocidad == undefined) {
      velocidad = 1;
    }
    if (tipo == undefined) {
      tipo = "default";
    }
    if (retardo == undefined) {
      retardo = 0;
    }
    if (funcion_sigue == undefined) {
      funcion_sigue = null;
    }
    objeto.css("display", "block");
  
    switch (tipo) {
      case "default":
        TweenMax.fromTo(objeto, velocidad, { delay: retardo, css: { opacity: 0 } }, { delay: retardo, css: { opacity: 1 } });
        break;
  
      case "arriba":
        TweenMax.fromTo(objeto, velocidad, { delay: retardo, css: { "margin-top": "-10vw", opacity: 0 } }, { delay: retardo, css: { "margin-top": "0vw", opacity: 1 } });
        break;
  
      case "abajo":
        TweenMax.fromTo(objeto, velocidad, { delay: retardo, css: { "margin-top": "+10vw", opacity: 0 } }, { delay: retardo, css: { "margin-top": "0vw", opacity: 1 } });
        break;
  
      case "izq":
        TweenMax.fromTo(objeto, velocidad, { delay: retardo, css: { "margin-left": "-10vw", opacity: 0 } }, { delay: retardo, css: { "margin-left": "0vw", opacity: 1 } });
        break;
  
      case "der":
        TweenMax.fromTo(objeto, velocidad, { delay: retardo, css: { "margin-left": "+5vw", opacity: 0 } }, { delay: retardo, css: { "margin-left": "0vw", opacity: 1 } });
        break;
  
      case "zoom":
        TweenMax.fromTo(objeto, velocidad, { delay: retardo, css: { scale: 0, opacity: 0 } }, { delay: retardo, css: { scale: 1, opacity: 1 } });
        break;
  
      case "sheker1":
        setTimeout(function () {
          objeto.css("opacity", 1);
          var id = objeto[0];
          a(id);
        }, retardo * 1000);
        function a(id) {
          anime({
            targets: id,
            translateX: [{ value: 10 }, { value: 0 }],
            duration: 250,
            loop: 8,
            easing: "easeInOutSine",
            // easing: "linear",
            // delay: retardo,
            // endDelay: function (id, i, l) {
            //   return (l - i) * 100;
            // },
          });
        }
        break;
  
      case "sheker2":
        setTimeout(function () {
          objeto.css("opacity", 1);
          var id = objeto[0];
          anime({ targets: id, rotate: [{ value: 20 }, { value: 0 }], duration: 600, loop: true, easing: "linear" });
        }, retardo * 1000);
        break;
  
      case "sheker3":
        setTimeout(function () {
          objeto.css("opacity", 1);
        }, retardo * 1000);
        var id = objeto[0];
        anime({
          targets: id,
          translateY: [{ value: -20 }, { value: 0 }],
          duration: 900,
          delay: retardo,
          loop: true,
          easing: "linear",
        });
        break;
  
      case "shekerLeft":
        setTimeout(function () {
          objeto.css("opacity", 1);
          var id = objeto[0];
          objeto.css("display", "inline-block");
          objeto.css("z-index", 999);
        }, retardo * 1000);
        var id = objeto[0];
        anime({
          targets: id,
          translateX: [{ value: -30 }, { value: 0 }],
          duration: 900,
          delay: retardo,
          loop: true,
          easing: "linear",
        });
        break;
      case "flip":
        objeto.css("left", -100);
        setTimeout(function () {
          objeto.css("opacity", 1);
          var id = objeto[0];
          anime({
            targets: id,
            translateX: 100,
            rotateY: 380,
            direction: "normal",
            loop: false,
            easing: "easeOutElastic(1, .6)",
          });
        }, retardo * 1000);
        break;
  
      case "slideUp":
        objeto.css("top", 100 + "%");
        setTimeout(function () {
          objeto.css({
            opacity: 1,
            display: "block",
          });
          var id = objeto[0];
          anime({
            targets: id,
            top: 52 + "%",
            duration: 900,
            loop: false,
            easing: "linear",
            // easing: "easeOutElastic(1, .6)",
          });
        }, retardo * 1000);
        break;
  
      case "slideDown":
        objeto.css("top", -100 + "%");
        setTimeout(function () {
          objeto.css({
            opacity: 1,
            display: "block",
          });
          var id = objeto[0];
          anime({
            targets: id,
            top: 0 + "%",
            duration: 900,
            loop: false,
            easing: "linear",
          });
        }, retardo * 1000);
        break;
  
      case "rebota":
        objeto.css("left", -100);
        setTimeout(function () {
          objeto.css("opacity", 1);
          var id = objeto[0];
          anime({
            targets: id,
            translateX: 100,
            direction: "normal",
            loop: false,
            easing: "easeOutElastic(1, .6)",
          });
        }, retardo * 1000);
        break;
      case "rueda":
        // objeto.css("left", -100);
        setTimeout(function () {
          objeto.css("opacity", 1);
          var id = objeto[0];
          anime({
            targets: id,
            rotateZ: 360,
            duration: 10000,
            direction: "normal",
            loop: true,
            // cycles: 200,
            easing: "linear",
          });
        }, retardo * 1000);
        break;
      case "gira1":
        setTimeout(function () {
          objeto.css("opacity", 1);
          var id = objeto[0];
          anime({
            targets: id,
            rotateZ: [{ value: -30 }, { value: 0 }, { value: 30 }, { value: 0 }],
            duration: 1000,
            direction: "normal",
            loop: 2,
            easing: "linear",
          });
        }, retardo * 1000);
        break;
      case "flash1":
        objeto.css("opacity", 0);
        setTimeout(function () {
          var id = objeto[0];
          anime({
            targets: id,
            opacity: 1,
            duration: 2000,
            loop: true,
            easing: "linear",
          });
        }, retardo * 1000);
        break;
      case "flash":
        objeto.css("opacity", 0);
        // objeto.addClass("btnActivo");
        setTimeout(function () {
          var id = objeto[0];
          anime({
            targets: id,
            opacity: 1,
            duration: 800,
            direction: "alternate",
            loop: true,
            easing: "linear",
          });
        }, retardo * 1000);
        break;
  
      case "inline-block":
        objeto.css("opacity", 1);
        setTimeout(function () {
          var id = objeto[0];
          objeto.css("display", "inline-block");
          objeto.css("z-index", 999);
        }, retardo * 1000);
        break;
  
      case "zoominter":
        setTimeout(function () {
          objeto.css("opacity", 1);
        }, retardo * 1000);
        var id = objeto[0];
        anime({ targets: id, scale: [{ value: 0.8 }, { value: 1 }], duration: 1400, delay: retardo, loop: true, easing: "linear" });
        break;
    }
  }
  
  function salida(objeto, tipo, retardo, funcion_sigue) {
    var animaciones = new Array("default");
    var velocidad = 0.3;
    if (tipo == undefined) {
      tipo = "default";
    }
    if (retardo == undefined) {
      retardo = 0;
    }
    if (tipo == "aleatorio") {
      tipo = animaciones[random(animaciones.length - 1)];
    }
    if (funcion_sigue == undefined) {
      funcion_sigue = null;
    }
    switch (tipo) {
      case "default":
        TweenMax.to(objeto, velocidad, { alpha: 0, ease: Quart.easeOut, delay: retardo, onComplete: funcion_sigue, display: "none" });
        objeto.css({ opacity: 0, display: "none" });
        break;
      case "slideDown":
        var id = objeto[0];
        anime({ targets: id, top: 100 + "%", duration: 900, loop: false, easing: "linear" });
        break;
      case "slideUp":
        var id = objeto[0];
        anime({ targets: id, top: -100 + "%", duration: 900, loop: false, easing: "linear" });
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
      delay: retardo,
    });
    TweenMax.to(elemento, 0.5, {
      alpha: 0.5,
      yoyo: true,
      repeat: -1,
      ease: Sine.easeIn,
      delay: retardo + 0.5,
    });
  
    setTimeout(function () {
      elemento.css({
        cursor: "pointer",
      });
    }, retardo * 1000);
  }
  
  function stop(objeto, display) {
    var id = objeto[0];
    var a;
    anime.remove(id);
    TweenMax.killTweensOf(objeto);
    TweenMax.to(objeto, {
      alpha: 1,
      ease: Quart.easeOut,
    });
    $(objeto).css({
      display: display,
      opacity: 1,
    });
  }
  