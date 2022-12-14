fs = require("fs");
var clc = require("cli-color");
moment = require('moment');
moment.locale('es-mx');
var fechaCompleta = moment().format('LLLLA');
var fechaString = "var fechaLog = '" + fechaCompleta + "'\n //Esta es la fecha que viene de fecha.js \n" + "\n console.log('%c' + fechaLog, 'font-size: 100%; color: #00ff22; font-weight: 700;');";

var msg_azul = clc.xterm(81).bgXterm(232);
var msg_verde = clc.xterm(47).bgXterm(232);
var msg_coral = clc.xterm(217).bgXterm(232);
var msg_rojo = clc.xterm(197).bgXterm(232);

// fs.writeFile("./public/librerias/js/fecha.js", fechaString, function (err) {
fs.writeFile("./Infografia/js/fecha.js", fechaString, function (err) {
  if (err) return console.log(err);
  console.log(msg_coral("Esta lista la fecha!"));
});
