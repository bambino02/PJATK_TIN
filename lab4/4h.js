function find2LowestAnaGreatest(array) {
    array.sort(function(a, b) {
        return b - a;
    });
    console.log('Second lowest number is : ' + array[array.length - 2], ', and second greatest is : ' + array[1])
}
find2LowestAnaGreatest([2, 3, 4, 5, 3, -4, 4004, 508, -3, 0])