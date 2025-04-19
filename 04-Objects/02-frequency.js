let str = "Javascript";
let freq = {};

for(const char of str) {
    if(freq[char]) {
        freq[char] += 1;
    }else {
        freq[char] = 1;
    }
}

console.log(freq);
