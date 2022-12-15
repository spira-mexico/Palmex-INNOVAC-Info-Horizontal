var scorm = pipwerks.SCORM;

function init() {
  scorm.version = "1.2";
  scorm.init();
  console.log("%c scorm.init() " + scorm.init(), "font-size: 100%; color: #00ff22; font-weight: 700;");
}

function set(param, value) {
  scorm.set(param, value);
  // console.log("%c SCORM: set " + param + " " + value, "font-size: 100%; color: #00AEFF; font-weight: 700;");
  // console.log("Version ------->",scorm.get("cmi._version"));
  console.log("Location ------->", scorm.get("cmi.core.lesson_location"));
  console.log("Status ------->", scorm.get("cmi.core.lesson_status"));
  // console.log("Raw → ", scorm.get("cmi.core.score.raw"));
  save();
}

function send(value) {
  set("cmi.suspend_data", value);
  save();
}

function get(param) {
  return scorm.get(param);
}

function incompleted() {
  scorm.set("cmi.core.lesson_status", "incompleted");
  scorm.set("cmi.succes_status", "failed");
  scorm.connection.terminate();
  save();
}

function complete() {
  console.log("%c completed", "font-size: 100%; color: #ff7e29; font-weight: 700;");
  scorm.set("cmi.core.lesson_status", "completed");
  scorm.set("cmi.succes_status", "passed");
  // scorm.connection.terminate();
  save();
}

function save() {
  scorm.save();
}

function end() {
  scorm.quit();
  scorm.set("cmi.core.exit", "logout");
}

function exit() {
  console.log("Exiting ...");
  try {
    // window.history.back();
    parent.window.close();
    console.log("backing ...");
  } catch (error) {
    parent.window.close();
    console.log("closing ...");
  }
}

window.onload = function () {
  init();
};

window.onunload = function () {
  if (conection) {
    end();
  }
};
