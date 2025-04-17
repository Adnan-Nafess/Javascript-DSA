function pyramid(n) {
    for(let row=1; row<=n; row++) {

        let str = "";
        
        let space = n-row;
        for(let col=1; col<=space; col++) {
            str += " ";
        }

        let star = 2 * row -1;
        for(let col=1; col<=star; col++) {
            str += "*";
        }
        console.log(str);
    }
}

pyramid(5);