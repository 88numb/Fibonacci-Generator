var arrayNumber = [];
var yourNumber = prompt('Imput your namber?')
function fibonacciGenerator(n) {
for(var i=0; i<n; i++) {
    if (arrayNumber.length == 0) {
        arrayNumber.push(0)
    } else if (arrayNumber.length == 1) {
        arrayNumber.push(1)
    } else {
        arrayNumber.push(arrayNumber[(arrayNumber.length - 1)] + arrayNumber[(arrayNumber.length - 2)]);
    }    
}
return arrayNumber;
}


var result = fibonacciGenerator(yourNumber);
console.log(result); 