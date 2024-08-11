
let numbers = [5, 3, 8, 1, 2];

function addNumber(array, number) {
    array.push(number);
}
function removeNumber(array, number) {
    const index = array.indexOf(number);
    if (index !== -1) {
        array.splice(index, 1);
    }
}
function sortNumbers(array) {
    return array.slice().sort((a, b) => a - b); // Return a new sorted array
}

function calculateSum(array) {
    return array.reduce((sum, num) => sum + num, 0);
}

function calculateAverage(array) {
    if (array.length === 0) return 0;
    return calculateSum(array) / array.length;
}
console.log('Original array:', numbers);
addNumber(numbers, 10);
console.log('After adding 10:', numbers);
removeNumber(numbers, 3);
console.log('After removing 3:', numbers);
const sortedNumbers = sortNumbers(numbers);
console.log('Sorted array:', sortedNumbers);
const sum = calculateSum(numbers);
console.log('Sum of numbers:', sum);
const average = calculateAverage(numbers);
console.log('Average of numbers:', average);
