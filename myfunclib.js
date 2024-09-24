
const fs = require('fs');
const path = require('path');


function readNumbersFromFile(callback) {
    const filePath = path.join(__dirname, 'numbers.txt'); 

    fs.readFile(filePath, 'utf8', (err, data) => {
        if (err) {
            callback(err, null);
        } else {
            const numbers = data
                .split('\n')           
                .map(Number)           
                .filter(n => !isNaN(n)); 
            callback(null, numbers);
        }
    });
}

function getTotalSum(numbers) {
    return numbers.reduce((sum, num) => sum + num, 0);
}
function getTotalCount(numbers) {
    return numbers.length;
}
function getEvenSum(numbers) {
    return numbers
        .filter(num => num % 2 === 0) 
        .reduce((sum, num) => sum + num, 0);
}

module.exports = { readNumbersFromFile, getTotalSum, getTotalCount, getEvenSum };
