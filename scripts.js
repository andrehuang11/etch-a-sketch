const container = document.querySelector('#container');

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

createGrid(16);
const grid = document.querySelectorAll('.grid');

grid.forEach(gridItem => gridItem.addEventListener("mouseover", () => {
    gridItem.style.background = 'black';
}));
