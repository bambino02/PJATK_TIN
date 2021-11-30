function binarySearch(sortedArray, key) {
    let start = 0;
    let end = sortedArray.length - 1;

    while (start <= end) {
        let middle = Math.floor((start + end) / 2);

        if (sortedArray[middle] === key) {
            console.log('Lacation in array is: ')
            return middle;
        } else if (sortedArray[middle] < key) {
            start = middle + 1;
        } else {
            end = middle - 1;
        }
    }
    console.log('not found')
    return false;
}

binarySearch([1, 2, 3, 4, 5, 6, 7], 7)