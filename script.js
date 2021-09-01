let i = 0;
let interval = setInterval(Start, 1000);
function Start() {
   
    let take = document.getElementsByTagName("body")[0];
    let color = ["black", "blue", "brown", "green", "yellow", "orange"];
    take.style.backgroundColor = color[i];
    i = (i + 1) % color.length;
}
function Stop() {
    clearInterval(interval);
}

