function butterfly(n) {
    // Upper half
    for (let row = 1; row <= n; row++) {
        let str = "";

        // Left stars
        for (let col = 1; col <= row; col++) {
            str += "*";
        }

        // Spaces in middle
        for (let col = 1; col <= 2 * (n - row); col++) {
            str += " ";
        }

        // Right stars
        for (let col = 1; col <= row; col++) {
            str += "*";
        }

        console.log(str);
    }

    // Lower half
    for (let row = n; row >= 1; row--) {
        let str = "";

        // Left stars
        for (let col = 1; col <= row; col++) {
            str += "*";
        }

        // Spaces in middle
        for (let col = 1; col <= 2 * (n - row); col++) {
            str += " ";
        }

        // Right stars
        for (let col = 1; col <= row; col++) {
            str += "*";
        }

        console.log(str);
    }
}

butterfly(5);