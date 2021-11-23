function findLongestWord(string) {
    console.log('Result: ')
    return string.split(' ').sort((a, b) => b.length - a.length)[0];
}
findLongestWord('Life is so sad ...')