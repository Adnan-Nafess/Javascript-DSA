// 🔧 Reshape the Matrix

/**
 * @param {number[][]} mat
 * @param {number} r
 * @param {number} c
 * @return {number[][]}
 */
var matrixReshape = function(mat, r, c) {
    let m = mat.length;
    let n = mat[0].length;

    // ⚠️ Reshape not possible
    if (n * m !== r * c) return mat;

    let row = 0;
    let col = 0;
    let result = Array(r);

    // 🎯 Create empty r x c matrix
    for (let i = 0; i < r; i++) {
        result[i] = Array(c).fill(0);
    }

    // 🔁 Fill new matrix with elements from old one
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            let element = mat[i][j];
            result[row][col] = element;
            col++;
            if (col === c) {
                row++;
                col = 0;
            }
        }
    }

    return result;
};

// ✅ Test Case
const mat = [
  [1, 2],
  [3, 4]
];
const r = 1;
const c = 4;

console.log("Reshaped Matrix:");
console.log(matrixReshape(mat, r, c));
// Output: [[1, 2, 3, 4]]
