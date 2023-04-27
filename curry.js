
// function curriedSum(numArgs) {
//     numbers = [];

//     return function _curriedSum(num) {
//         numbers.push(num);
//         if (numbers.length === numArgs) {
//             total = 0
//             numbers.forEach((ele) => {
//                 total += ele;
//             });
//             return total
//             // console.log(total)
//         } else {
//             return _curriedSum;
//         };
//         // console.log(numbers);
//     };
// };


// curriedSum(1)(2);

// const sum = curriedSum(4);
// console.log(sum(5)(30)(20)(1)); // => 56

Function.prototype.curry = function() {
    numbers = [];
    console.log(numbers);

    // return function _curriedSum(num) {
    //     numbers.push(num);

    //     if (numbers.length === numArgs) {
    //         return curry();
    //     } else {
    //         return _curriedSum;
    //     };
    //     // console.log(numbers);
    // };
};

// const sum = curriedSum(4, 5, 7, 3);

function sumThree(el1, el2, el3){
    return el1 + el2 + el3;
};

console.log(sumThree(1, 3, 5).curry());