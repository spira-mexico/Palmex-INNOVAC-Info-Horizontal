var scorm = pipwerks.SCORM;

function init() {
  scorm.version = "1.2";
  var callSucceeded = scorm.init();
}

function send() {
  set("cmi.suspend_data", value);
}

function set(param, value) {
  var callSucceeded = scorm.set(param, value);
}

function get(param) {
  return scorm.get(param);
}

function complete() {
  var callSucceeded = scorm.set("cmi.core.lesson_status", "completed");
}

function save() {
  var callSucceeded = scorm.save();
}

function end() {
  var callSucceeded = scorm.quit();
}

window.onload = function() {
    init();
}

window.onunload = function() {
    if (conection) {
        end();
    }
}
