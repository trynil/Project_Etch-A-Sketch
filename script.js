//makes grid
function makeGrid(){

    for (let i =1; i < 257; i++){
    const grid = document.querySelector('.grid');

        const row = document.createElement('div');
        row.classList.add("pixel");
        row.addEventListener("mouseover", makePixel)
        row.style.cssText = "width: 50px; height: 50px; border: 1px solid black;"

        grid.appendChild(row);
            
    }
}
makeGrid()


//changes pixel color
function makePixel(e){
    e.target.style.backgroundColor = 'black' ;
}
//resets grid with click
const grid = document.querySelector('.grid');

window.addEventListener('click', resetGrid);

function resetGrid() {
  while (grid.firstChild) { 
    grid.removeChild(grid.firstChild);  
  }
  
  makeGrid(); 
}