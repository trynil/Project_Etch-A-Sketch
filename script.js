//get grid size
let box = 0
let colorOption = "black"

const grid = document.querySelector('.grid');

//makes grid
function makeGrid(){
    function boxSize(){
    return box = prompt("Please enter grid size from 1 to 64:")
    }
    boxSize()
    if (box > 0 && box <= 64){
    let gridSize = (box*box);

    for (let i =0; i < gridSize; i++){

        const row = document.createElement('div');
        row.classList.add("pixel");
        row.addEventListener("mouseover", makePixel)
        
        grid.appendChild(row);
         }
         grid.style.gridTemplateColumns = `repeat(${box}, 1fr)`
         grid.style.gridTemplateRows =`repeat(${box},1fr)`
}       
        else {makeGrid()}
}

//changes pixel color
function makePixel(e){
    if (colorOption == "black"){
    e.target.style.backgroundColor = "black" ;
    }
    else{
        var o = Math.round, r = Math.random, s = 255;
        return e.target.style.backgroundColor = 'rgba(' + o(r()*s) + ',' + o(r()*s) + ',' + o(r()*s) + ',' + r().toFixed(1) + ')';
    }
}
//resets grid and changes color with click


function makeBlack(){
    return colorOption = "black"
}


function makeColor(){
     return colorOption = "color";
     
}


function resetSize() {
  while (grid.firstChild) { 
    grid.removeChild(grid.firstChild);  
  }
  makeGrid(); 
}
function resetClear() {
    while (grid.firstChild) { 
        grid.removeChild(grid.firstChild);  
      }
    if (box > 0 && box <= 64){
        let gridSize = (box*box);
    
        for (let i =0; i < gridSize; i++){
    
            const row = document.createElement('div');
            row.classList.add("pixel");
            row.addEventListener("mouseover", makePixel)
            
            grid.appendChild(row);
             }
             grid.style.gridTemplateColumns = `repeat(${box}, 1fr)`
             grid.style.gridTemplateRows =`repeat(${box},1fr)`
    }       
            else {makeClear()}
  }
makeGrid()
//bind clear to c button
document.addEventListener('keydown',(event) => {
     if(event.key === 'c') {
        resetClear()
    }

})
