//Задача 1
function countChar (string, symb){
    var str = string.toLowerCase();
    var sym = symb.toLowerCase();
    var sums = {};
    var newstr = str.split('');
    newstr.forEach(function(elem) {
        if (elem === sym)
            sums.push(elem);
    });
    alert(sums.length);
}
console.log(countChar('My Random String', 'm'));
//Задача 2
function deepCompare ( a, b) {
   if (a === b)
       return true;

    else return false;
}
console.log(deepCompare({ one: 1, two:'2'}, { one: 1, two:'2'}));
//Задача 3
function chessBoard (h, w) {
    let height = h;
    let width = w;
    let board = '';
    for (y = 0; y < height; y++) {
        for(x = 0; x < width; x++) {
            if ((x + y) % 2 === 0) {
                board += ' ';
            }else {
                board += '#';
            }
        }
        board += '\n';
    }
}
console.log(chessBoard(8, 8));
//Задача 4
function makeArray(x,y) {
    const range = (x,y) => {
        if (x > y)
            return range(y,x).reverse();
        else
            return x === y ? [y] : [x, ...range(x + 1, y)];
    }
}
console.log(makeArray());
//Задача 5
function reverseArray(arr) {
    let i,
        result = [];

    for ( i = arr.length - 1; i >= 0; i-- ) {
        result.push(arr[i]);
    }
    return result;
}
function reverseArrayInPlace(arr) {
    let i,
        old;

    for ( i = 0; i < Math.floor(arr.length / 2); i++ ) {
        old = arr[i];
        arr[i] = arr[arr.length - (1 + i)];
        arr[arr.length - (1 + i)] = old;
    }
    return arr;
}
console.log(reverseArray());