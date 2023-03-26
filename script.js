function makeGrid(){

    for (let i =1; i < 17; i++){
    const grid = document.querySelector('.grid');

        const row = document.createElement('div');
        row.classList.add("row",`${i}`);
        row.style.cssText = "display: flex; flex-direction: row; width: auto; height: auto;"

        grid.appendChild(row);
            for (let c = 1; c < 17; c++){
            const rows = document.querySelector(`div[class="row ${i}"]`);
        
                const colum = document.createElement('div');
                colum.classList.add("colum",`${c}`);
                colum.style.cssText = " height: 50px; width: 50px; outline: black solid thin;"
        
                rows.appendChild(colum);
                
            }
    }
}
makeGrid()