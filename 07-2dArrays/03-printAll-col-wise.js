function display(grid, m, n) {
    let str = "";
    for(let col=0; col<grid.length; col++) { 
      if (col % 2 == 0) {
          // even col --> up to down
          for(let row=0; row<m; row++) {  // this loop goes from up to down
            str += grid[row][col] + " ";
        } 
      }else {
        // odd col down to up
        for(let row=m-1; row>=0; row--) {  // this loop goes to down to up 
            str += grid[row][col] + " ";
        }
      } 
    }
    console.log(str);
}

let grid = [ [0, 1, 2, 3], [4, 5, 6, 7], [8, 9, 8, 7], [6, 5, 4, 3] ];

display(grid, 4, 4);