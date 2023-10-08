const container = document.querySelector('#container');
const button = document.getElementById('clear');
let slider = document.getElementById("Range");
let output = document.getElementById("value");
output.textContent = `Grid size: ${slider.value}x${slider.value}`;

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

function clear() {
    const grid = document.querySelectorAll('.grid');
    grid.forEach(gridItem => gridItem.style.background = "white");
};

createGrid(slider.value);
const grid = document.querySelectorAll('.grid');
let flag = false;
window.onmouseup = () => {                        
    flag = false;
}
grid.forEach(gridItem => gridItem.addEventListener("mouseover", () => {
    if(flag == true) {
        gridItem.style.background = 'black';
    }
    gridItem.addEventListener("mousedown", () => {
        gridItem.style.background = 'black';
        flag = true;
    });
}));

slider.addEventListener('input',(e)=>{
    output.textContent = `Grid size: ${slider.value}x${slider.value}`;
    removeGrid();
    createGrid(e.target.value);
    const grid = document.querySelectorAll('.grid');
    grid.forEach(gridItem => gridItem.addEventListener("mouseover", () => {
        if(flag == true) {
            gridItem.style.background = 'black';
        }
        gridItem.addEventListener("mousedown", () => {
            gridItem.style.background = 'black';
            flag = true;
        });
    }));
});

button.addEventListener('click', clear);
