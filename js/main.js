var container = document.querySelector(".container"),
    gridNo = 0;
function getDimensions(){
    gridNo = Number(prompt("what is the number of elements you want to sketch ?",1));
    return gridNo;
}
var color;
function getRandomColour(){
    let colorPallete = "0123456789ABCDEF";
    color ="#";
    for(i=0; i < 6; i++){
        color += colorPallete[Math.floor(Math.random()*16)];
    }
    return color;
}

function etchSketch(){
    var gridWidth;
    getDimensions();
    for(x=0; x < gridNo*gridNo; x++){        
        let gridItem = document.createElement("div");
        container.appendChild(gridItem);
    }
    gridWidth = 100/gridNo;
    gridHeight = 550/gridNo;
    gridItems = document.querySelectorAll(".container div");
    gridItems.forEach((gridItem) => gridItem.setAttribute("style",`width : ${gridWidth}%; height : ${gridHeight}px`) )
}
etchSketch();

function changeColor(e){
    getRandomColour();
    e.target.style.backgroundColor = color;
}

function hoverEffect(){
    Array.from(container.children).forEach( (e) => e.addEventListener('mouseover',changeColor) );
}
hoverEffect();

var btn = document.querySelector('button');
function reset(){
    while(container.firstChild){
        container.removeChild(container.firstChild);
    }
    setTimeout(() => {etchSketch(); hoverEffect();},500);
}
btn.addEventListener('click',reset);