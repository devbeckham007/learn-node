const num1 = 5
const num2 = 10
function addValues() {
    console.log(`the sum is : ${num1 + num2}`);
    
}
addValues();
// exporting a function to be used in other files
// function those not require module.exports because it is not an object 
// but if you want to export multiple functions then you have to use module.exports