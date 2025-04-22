// how to create 

let grid = [ [1,2,3,4], [5,6,7,8], [9,8,7,6], [5,4,3,2] ];

console.log(grid);

let arr = Array(5);  // outer 
for(let i=0; i<5; i++) {
    let inner = Array(6).fill(0);
    arr[i] = inner;
}

// Access the value 

console.log(arr);

// Assigning a value

arr[0][0] = 12;
arr[0][1] = 13;
console.log(arr);
