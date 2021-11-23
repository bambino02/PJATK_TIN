function FibonacciFunction(n) {
    if (n < 0) {
        console.log('n needs to be equal or grater than 0');

    } else if (n === 0) {
        return 0;
    } else {
        let f0 = 0,
            f1 = 1,
            f3, i;
        for (i = 2; i <= n; i++) {
            f3 = f0 + f1;
            f0 = f1
            f1 = f3;
        }
        return f1;
    }

}
console.log(`Result : ${FibonacciFunction(13)}`);