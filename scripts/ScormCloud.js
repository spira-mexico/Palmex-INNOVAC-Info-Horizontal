var SCORMCloud = require("scormcloud-api-wrapper");
var clc = require("cli-color");

// Create an instance with your API credentials.
var api = new SCORMCloud(
  "666OYHGHCF",
  "H9B1xOtBVpjj6X37f6FE3x4rxbaKPvroRjiy4ARZ"
);
var msg_azul = clc.xterm(81).bgXterm(232);
var msg_verde = clc.xterm(47).bgXterm(232);
var msg_coral = clc.xterm(217).bgXterm(232);
var msg_rojo = clc.xterm(197).bgXterm(232);

api.authPing(function (error, result) {
  if (error) throw error;
  console.log(msg_azul("Login: ", result));
  console.log(msg_coral("Subiendo . . ."));
});

const months = [
  "ENE",
  "FEB",
  "MAR",
  "ABR",
  "MAY",
  "JUN",
  "JUL",
  "AGO",
  "SEP",
  "OCT",
  "NOV",
  "DIC"
];
let current_datetime = new Date();
let formatted_date =
  current_datetime.getDate() +
  "-" +
  months[current_datetime.getMonth()] +
  "-" +
  current_datetime.getFullYear();
// Import a course to your library.
api.importCourse(
  "Create-react-scorm-app",
  "Scorm" + formatted_date + ".zip",
  function (error, result1) {
    if (error) throw error;
    console.log(msg_coral("Importar: ", result1));
    api.createInvitation(
      "Create-react-scorm-app",
      true, // Public invitation
      function (error, result2) {
        if (error) throw error;
        console.log(msg_verde("Invitar: ", result2));
        api.getInvitationInfo(result2, function (error, result3) {
          if (error) throw error;
          console.log(msg_rojo("Link: ", result3.url));
        });
      }
    );
  }
);
