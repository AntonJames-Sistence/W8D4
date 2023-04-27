function sum() {
    // const args = [...arguments];
    let result = 0;
    
    // return console.log(arguments)
    const mySlice = Array.prototype.slice.call(arguments);

    mySlice.forEach((ele) => {result += ele});
    console.log(result);
};

sum(2, 4, 5, 7);



