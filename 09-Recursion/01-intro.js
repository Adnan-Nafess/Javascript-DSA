function temp(n) {
    if (n == 0) return;

    console.log(n);
    temp(n-1);
}

temp(5);


function temp2(n) {
    if (n == 0) return;

    temp2(n-1);
    console.log(n);
}

temp2(5);

// sum of natural num

function sum(n) {
    if (n==1) return 1;
    return n + sum(n-1);
}

console.log(sum(5));