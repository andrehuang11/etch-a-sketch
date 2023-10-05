const container = document.querySelector('#container');
let slider = document.getElementById("Range");
let output = document.getElementById("value");
output.innerHTML = slider.value;

function createGrid(size) {
    for(let i = 0; i < size; i++) {
        const row = document.createElement('div');
        row.classList.add('row');
        container.appendChild(row);
        for(let j = 0; j < size; j++) {
            const grid = document.createElement('div');
            grid.classList.add('grid');
            row.appendChild(grid);
        };
    };
};

function removeGrid() {
    const rows = document.querySelectorAll('.row');
    rows.forEach(row => {
        row.remove();
    });
};

createGrid(slider.value);
const grid = document.querySelectorAll('.grid');
grid.forEach(gridItem => gridItem.addEventListener("mouseover", () => {
    gridItem.style.background = 'black';
}));

slider.addEventListener('input',(e)=>{
    output.innerHTML = e.target.value;
    removeGrid();
    createGrid(e.target.value);
    const grid = document.querySelectorAll('.grid');
    grid.forEach(gridItem => gridItem.addEventListener("mouseover", () => {
        gridItem.style.background = 'black';
    }));
});
