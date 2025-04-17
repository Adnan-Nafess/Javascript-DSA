function diamond(n) {
    // Upper half
    for (let row = 1; row <= n; row++) {
        let str = "";

        // Spaces
        for (let col = 1; col <= n - row; col++) {
            str += " ";
        }

        // Stars
        for (let col = 1; col <= 2 * row - 1; col++) {
            str += "*";
        }

        console.log(str);
    }

    // Lower half
    for (let row = n - 1; row >= 1; row--) {
        let str = "";

        // Spaces
        for (let col = 1; col <= n - row; col++) {
            str += " ";
        }

        // Stars
        for (let col = 1; col <= 2 * row - 1; col++) {
            str += "*";
        }

        console.log(str);
    }
}


diamond(5);