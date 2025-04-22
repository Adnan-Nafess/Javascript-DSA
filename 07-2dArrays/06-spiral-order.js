var spiralOrder = function(matrix) {
    let m = matrix.length;          
    let n = matrix[0].length;       
    let start_row = 0;
    let start_col = 0;
    let last_row = m - 1;
    let last_col = n - 1;
    let count = 0;
    let result = [];

    while(count < m * n) {
        for(let x = start_col; x <= last_col && count < m * n; x++) {
            result.push(matrix[start_row][x]);
            count++;
        }
        start_row++;

        for(let x = start_row; x <= last_row && count < m * n; x++) {
            result.push(matrix[x][last_col]);
            count++;
        }
        last_col--;

        for(let x = last_col; x >= start_col && count < m * n; x--) {
            result.push(matrix[last_row][x]);
            count++;
        }
        last_row--;

        for(let x = last_row; x >= start_row && count < m * n; x--) {
            result.push(matrix[x][start_col]);
            count++;
        }
        start_col++;
    }

    return result;
};

// ✅ Test Case
const matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
];

console.log("Spiral Order Output:");
console.log(spiralOrder(matrix)); 
// Output: [1,2,3,6,9,8,7,4,5]
