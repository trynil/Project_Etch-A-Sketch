function makeGrid(){

    for (let i =1; i < 17; i++){
    const grid = document.querySelector('.grid');

        const row = document.createElement('div');
        row.classList.add(`row${i}`);
        row.style.display = "flex";
        row.style.width = "auto"
        row.style.height = "auto"
        row.style.flexDirection = "row"

        grid.appendChild(row);
            for (let c = 1; c < 17; c++){
            const rows = document.querySelector(`.row${i}`);
        
                const colum = document.createElement('div');
                colum.classList.add(`colum${c}`);
                colum.style.height = "50px"
                colum.style.width = "50px"
                colum.style.outlineStyle = "solid"
                colum.style.outlineColor = "black"
                colum.style.outlineWidth = "medium"
        
                rows.appendChild(colum);
                
            }
    }
}
makeGrid()