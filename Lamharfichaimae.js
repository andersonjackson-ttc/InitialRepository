// ChaimaeLamharfi.js

function chaimaeFunction() {
    alert("Chaimae was here!");
}

function changeBackgroundColor() {
    const body = document.body;
    const colors = ["#ffcccb", "#ffd700", "#98fb98", "#dda0dd", "#add8e6"];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    body.style.backgroundColor = randomColor;
}
