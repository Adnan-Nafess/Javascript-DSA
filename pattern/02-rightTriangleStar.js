function rightTriangleStar(n) {
    for(let row=1; row<=n; row++) {

        let str = "";

        for(let col=1; col<=row; col++) {
            str += "*";
        }
        console.log(str);
    }
}

rightTriangleStar(5);