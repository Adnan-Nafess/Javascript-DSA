function invertedLeftTriangle(n) {
    for(let row=1; row<=n; row++) {

        let str = "";

        for(let col=1; col<=n-row+1; col++) {
            str += "*";
        }
        console.log(str);
    }
}

invertedLeftTriangle(5);