// Checklist No. 1: Write 3 variables
// variable (1): Number type
const myChoiceNum = 33;
// variable (1): String type
const myString = 'How do you do?'
// variable (1): Boolean type
const isJavascriptHard = true;

// Checklist No. 2: 'let and const' variables

let myLuckyNum = 5; // it is mutable
myLuckyNum = 7;
// console.log(myLuckyNum);

const myName = 'Nazrul Islam'; // it is not mutable;
// myName = 'Raihan Islam';
// console.log(myName);

// Checklist No. 3: Write 2 variables to add/subtract/multiply/divide

//Summation
let firstNum = 8;
let secondNum = 3;
const sum = firstNum + secondNum;
const sumResult = sum;
// console.log(sumResult);
//Subtraction
const difference = firstNum - secondNum;
// console.log(difference);
//Multiplication
const product = firstNum * secondNum;
// console.log(product);
//Division
const quotient = firstNum / secondNum;
// console.log(quotient);
//Modulus or Remainder
const modulus = firstNum % secondNum;
// console.log(modulus);

// Checklist No. 4: Write 2 variables to compare 

const yourNum = 65;
const myNum = 56;
yourNum > myNum // greater than
yourNum < myNum // less than
yourNum >= myNum // greater than or equal to
yourNum <= myNum // less than or equal to
yourNum == myNum // equal to
yourNum != myNum // not equal to
/* if(yourNum > myNum == true){
    // console.log('you are lucky.');
}
if(yourNum < myNum == false){
    // console.log('I am not lucky.');
}
/* if(yourNum == myNum){
    console.log('We are lucky.');
}else{
    console.log('oops.');
} */
/* if(yourNum != myNum){
    console.log('We are lucky.');
}else{
    console.log('oops.');
} */
/* if(yourNum >= myNum){
    console.log('We are lucky.');
}else{
    console.log('oops.');
} */
/* if(yourNum <= myNum){
    console.log('oops.');
}else{
    console.log('you are lucky.');
} */ 


// Checklist No. 5 & 6: Fullfil conditions
//a)
const isInvestTime = true;
const isMethodTactful = false;
let result;
/* if(isInvestTime == true && isMethodTactful == false){
    result = 'You can be a web dev if you try.'
}else{
    result = 'You have challenges towards being a web dev.'
} */

/* if(isMethodTactful == false || isInvestTime == true){
    result = 'You can be a web dev if you try.'
}
else{
    result = 'You have challenges towards being a web dev.'
}
console.log(result);*/
//b)
const gotJob = true;
const completeMasters = true;
/* if(gotJob == true && completeMasters == true){
    console.log('I will love and marry you.');
} */
/* if(gotJob == true || completeMasters == true){
    console.log('I will love and marry you.');
} */
/* if(gotJob == true && completeMasters == false){
    console.log('give up cheatery');
}else{
    console.log('complete your masters first')
} */

// Checklist No. 7: Write While Loop to find odd numbers

/* let oddNum = 7;
while(oddNum<=19){
    let numOdd = oddNum;
    if(numOdd % 2 == 1){
        console.log(numOdd, ' is an odd number.');
    }
    oddNum++;
} */

// Checklist No. 8: ARRAY

const myArray = ['nazrul', 'sanaul', 'kairul', 'rabiul'];
const arrLen = myArray.length;
// console.log(arrLen);
const arrIndex = myArray.indexOf('kairul');
// console.log(arrIndex);
// const arrElement = myArray[1];
// console.log(arrElement);
myArray[1] = 'rakibul';
// console.log(myArray);
const updateLastElem = myArray[myArray.length-1] = 'munirul';
// console.log(myArray);
// console.log(myArray.shift());
// console.log(myArray);
// console.log(myArray.unshift('kamrul'));
// console.log(myArray);
// console.log(myArray.push('sadrul'));
// console.log(myArray.pop());
// console.log(myArray);
// const isElemExist = myArray.includes('badiul');
const isElemExist = myArray.includes('munirul');
// console.log(isElemExist);

// Checklist No. 9: Loop to display an ARRAY LIST

const cities = ['dhaka', 'delhi', 'darussalam', 'beirut'];
//a) for loop
/*for(let city = 0; city<cities.length; city++){
    let cityName = cities[city];
    console.log(cityName);
} */
//b)for...of loop
/* for(let city of cities){
    let cityName = cities[city];
    cityName = city;
    console.log(cityName);
} */
 

// Checklist No. 10: display numbers bigger than 80 from an ARRAY LIST

const numList = [79, 80, 59, 86, 78, 89, 88, 63, 90];
const eightyPlus = numList.filter(element=> element>80);
const numOnly = eightyPlus;
// console.log(numOnly.join(','));
// console.log(numList.join(','));
// console.log(eightyPlusArr);

// Checklist No. 11: FUNCTION with 3 params to display their multiplication

function productOfThree(a, b, c){
    // const productOf2 = a * b;
    const grossProduct = a * b * c;
    // const productOf3 = productOf2 * c;
    // return productOf3;
    return grossProduct;
}
const productResult = productOfThree(5, 8, 9);
// console.log(productResult);

// Checklist No. 12: Declare an OBJECT and change any property of it

/* let myObj = {
    myCountry: 'Bangladesh',
    landSize: 147570,
    population: '17 crore',
    povertyRate: '60%'
};
// myObj.population= '18 crore';
// myObj['population'] = '18 crore';
// delete myObj.povertyRate
 
console.log(myObj); */