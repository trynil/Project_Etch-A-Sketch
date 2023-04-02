//get grid size
let box = 0
let colorOption = ""

const grid = document.querySelector('.grid');

//makes grid
function makeGrid(){
    let box = prompt("Please enter grid size from 1 to 64:")
    if (box > 0 && box <= 64){
    let gridSize = (box*box);

    for (let i =0; i < gridSize; i++){

        const row = document.createElement('div');
        row.classList.add("pixel");
        row.addEventListener("mouseover", makePixel)
        
        grid.appendChild(row);
         }
         grid.style.gridTemplateColumns = `repeat(${box}, 1fr)`
         grid.style.gridTemplaterows =`repeat(${box},1fr)`
}       
        else {makeGrid()}
}
function random_rgba() {
    var o = Math.round, r = Math.random, s = 255;
    return 'rgba(' + o(r()*s) + ',' + o(r()*s) + ',' + o(r()*s) + ',' + r().toFixed(1) + ')';
}


//changes pixel color
function makePixel(e){
    e.target.style.backgroundColor = colorOption ;
}
//resets grid and changes color with click


function makeBlack(){
    return colorOption = "black"
}


function makeColor(){
     return colorOption = random_rgba();
     
}


function resetGrid() {
  while (grid.firstChild) { 
    grid.removeChild(grid.firstChild);  
  }
  makeGrid(); 
}
makeGrid()