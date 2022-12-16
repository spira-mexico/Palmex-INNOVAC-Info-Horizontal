fs = require("fs");
var clc = require("cli-color");
const { v4: uuidv4 } = require('uuid');
const ELID = uuidv4();
moment = require('moment');
moment.locale('es-mx');
var fechaCompleta = moment().format('LLLLA');
var ID = "const ELID = '" + ELID + "';";
var fechaString = "\nvar fechaLog = '" + fechaCompleta + "'\n" + "\n console.log('%c' + fechaLog, 'font-size: 100%; color: #00ff22; font-weight: 700;');";

var msg_azul = clc.xterm(81).bgXterm(232);
var msg_verde = clc.xterm(47).bgXterm(232);
var msg_coral = clc.xterm(217).bgXterm(232);
var msg_rojo = clc.xterm(197).bgXterm(232);

fs.writeFile("./Infografia/librerias/js/fecha.js", ID + fechaString, function (err) {
  if (err) return console.log(err);
  console.log(msg_azul("Esta lista la fecha!"));
  console.log(msg_coral(ELID));
});

var logyfecha= "\n" + ELID + " - " + fechaCompleta;
fs.appendFile("./Infografia/librerias/js/log.txt", logyfecha, function (err) {
  if (err) return console.log(err);
  console.log('🧙');
});
