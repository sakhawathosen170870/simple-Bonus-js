// let sum = 0;
// for (let i = 1; i <= 6; i++) {
//     sum = sum + i;
// }

// console.log(sum);




// for (let i = 6; i >= 1; i--) {

// }01789630755

function sum(i) {
    if (i == 1) {
        return 1;
    }
    return i + sum(i - 1);
}
console.log(sum(6));