let arr = [10, 5, 12, 1, 13,];
let n = arr.length-1;

for(let i=0; i<n; i++) {
    let minIndex = i;
    for(let j=i+1; j<n; j++) {
        if(arr[minIndex] > arr[j]) minIndex = j;
    }
    if(minIndex != i) {
        let temp = arr[minIndex];
        arr[minIndex] = arr[i];
        arr[i] = temp;
    }
}

console.log(arr);