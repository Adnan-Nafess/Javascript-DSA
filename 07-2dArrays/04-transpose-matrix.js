var transpose = function(matrix) {
    // Step 1: Create a new array with reversed dimensions
    let result = Array(matrix[0].length);

    // Step 2: Fill result with arrays to hold transposed data
    for(let i = 0; i < matrix[0].length; i++) {
        let arr = Array(matrix.length);
        result[i] = arr;
    }

    // Step 3: Transpose the matrix
    for(let row = 0; row < matrix.length; row++) {
        for(let col = 0; col < matrix[row].length; col++) {
            result[col][row] = matrix[row][col];
        }
    }

    return result;
};

// ✅ Test
const inputMatrix = [
    [1, 2, 3],
    [4, 5, 6]
];

const outputMatrix = transpose(inputMatrix);
console.log("Transposed Matrix:");
console.log(outputMatrix);