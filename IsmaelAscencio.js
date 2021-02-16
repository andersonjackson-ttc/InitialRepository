function helloQuestion() {

  document.write("Hello?");
  document.write('<input type="button" value="Yes" onclick="messageYes()">');
  document.write('<input type="button" value="No" onclick="messageNo()">');

}

function messageYes() {

  document.write("Nice");

}

function messageNo() {

  document.write("Ok")

}
