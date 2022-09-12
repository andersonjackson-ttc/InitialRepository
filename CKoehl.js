
function pushTheButton(){
    document.write("<br><br>")
    let width = 75;
    let maxWidth = width;
    let btn = document.createElement("button");
    btn.innerHTML = "Click Me";
    btn.style.width = width;
    btn.addEventListener("click", function(){
        width+=10
        if(width > maxWidth){
            maxWidth = width;
            btn.innerHTML = `${width}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;${maxWidth}`;
        }
        btn.style.width = width;
    })
    function buttonWar(){
        let timer = Infinity;
        if (width > 75){
            timer = 1000 - width;
            width -= 10;
            btn.style.width = width;
            btn.innerHTML = `${width}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;${maxWidth}`;
        }
        setTimeout(buttonWar, timer);
    }
    buttonWar();
    document.body.appendChild(btn);
}
