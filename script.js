// const cars = ['Tesla', 'Mercedes', 'Honda']
// const [ randomCar ] = cars  // index[0] -> Tesla
// const [ ,otherRandomCar ] = cars //index[1] -> Mercedes
// //Predict the output
// console.log(randomCar)
// console.log(otherRandomCar)


// const employee = {
//     name: 'Elon',
//     age: 47,
//     company: 'Tesla'
// }
// const { name: otherName } = employee;  // variable name is set to vaiable otherName = Elon
// //Predict the output
// //console.log(name);
// console.log(otherName);

// const person = {
//     name: 'Phil Smith',
//     age: 47,
//     height: '6 feet'
// }
// const password = '12345';
// const { password: hashedPassword } = person;  // variable password is rename to
// //Predict the output                           //variable hashedPassword but will create an error/undefined because variable password doesn't exist 
// console.log(password);
// console.log(hashedPassword);

// const numbers = [8, 2, 3, 5, 6, 1, 67, 12, 2];
// const [,first] = numbers;  // variable first is equal to numbers[1] -> 2
// const [,,,second] = numbers; //variable second is equal to numbers[3] -> 5
// const [,,,,,,,,third] = numbers; //varible third is equal to numbers[8] -> 2
// //Predict the output
// console.log(first == second);
// console.log(first == third);

const lastTest = {
    key: 'value',
    secondKey: [1, 5, 1, 8, 3, 3]
}
const { key } = lastTest;  // variable key is equal to 'value'
const { secondKey } = lastTest; //variable secondKey is equal [1,5,1,8,3,3]
const [ ,willThisWork] = secondKey; // variable willThiswork is equal to 5, its desctructuring the second key array
//Predict the output
console.log(key);
console.log(secondKey);
console.log(secondKey[0]); //variable secondKey at index[0] -> 1
console.log(willThisWork);








