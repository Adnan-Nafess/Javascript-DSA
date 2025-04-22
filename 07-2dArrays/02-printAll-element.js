// no of rows = grid.length
function display(grid) {
    // print the grid whole row by row
    let str = "";
    for(let i=0; i<grid.length; i++) {
        for(let j=0; j<grid[i].length; j++) {
            str += grid[i][j] + " "; // grid[i][j] -> element at ith row and jth col
        }
    }
    console.log(str);
}

let grid = [ [0, 1, 2, 3], [4, 5, 6, 7], [8, 9, 8, 7], [6, 5, 4, 3] ];

display(grid);