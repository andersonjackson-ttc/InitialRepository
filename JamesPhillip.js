function jpp(element_id) {
  document.write("</br></br>");
  document.write("<input type='button' id='btn' value=\"James' Button!\"></input>");
  document.getElementById("btn").addEventListener("click", function(){buttonPress(element_id);});
}

function buttonPress(element_id) {
  const list = ["You", "just", "pressed", "the", "button", "James", "made"];
  const div = document.createElement("div");
  div.style.color = "orange";

  for (let i = 0; i < list.length; i++) {
    if (i < list.length - 1) {
      const node = document.createTextNode(list[i] + " ");
      div.appendChild(node);
      document.getElementById(element_id).appendChild(div);
    } else {
      const node = document.createTextNode(list[i] + "!");
      div.appendChild(node);
      document.getElementById(element_id).appendChild(div);
    }
  }
}
