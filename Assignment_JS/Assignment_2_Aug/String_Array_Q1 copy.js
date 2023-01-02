
const numbers = [ 5, 11, 13, 7, 2, 31, 3, 19, 23, 17, 29 ];

numbers.sort(
    function(x,y){
        return x-y;
    }
)
console.log(numbers)

numbers.reverse();

console.log(numbers);

numbers.push(37);

console.log(numbers);
numbers.pop()
numbers.pop()
console.log(numbers);

numbers.splice(2,2,'Seven','Eleven');

console.log(numbers.indexOf(23))
console.log(numbers.indexOf(41))
console.log(numbers)
