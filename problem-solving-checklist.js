// 1. CONVERSION
//a)feetToInch
/* function feetToInch (feet){
    const inch = feet * 12;
    return inch;
}
const inchResult = feetToInch(11);
console.log(inchResult); */
//b)centimeterToMeter
/* function centimeterToMeter(centi){
    const meter = centi / 100;
    return meter;
}
const meterResult = centimeterToMeter(1000);
console.log(meterResult); */
//c)pageRequierments
/* function pageRequierments(book1, book2, book3){
    const pageForBook1 = 100;
    const pageForBook2 = 200;
    const pageForBook3 = 300;
    const totalPageForBook1 = book1 * pageForBook1;
    const totalPageForBook2 = book2 * pageForBook2;
    const totalPageForBook3 = book3 * pageForBook3;
    const totalPages = totalPageForBook1 + totalPageForBook2 + totalPageForBook3;
    return totalPages;
}
const pagesResult = pageRequierments(10,8,5);
console.log(pagesResult); */
//d)bestFriend (friends array as input, return longest name)
/* const friends = [
    {name:'kamrul islam'},
    {name:'hasan ibn e ali'},
    {name:'jamal uddin afgani'},
    {name:'major ashfak kayani'}
];
function bestFriend(friends){
    const friend = friends[friends.length-1];
    friends.sort(function(a, b){b-a})
    return friend;
}
const myFriend = bestFriend(friends);
console.log(myFriend); */

//e)onlyPositive (stop loop when neg num found, return only pos num)
/* const onlyPositive = [4, 2, 8, 5, -7, 9, 13];
let positiveOnly = [0];
for (let i = 0; i<onlyPositive.length; i++){
    positiveOnly = onlyPositive[i];
     if(onlyPositive[i] <= -1){ 
         break;  
     } 
     console.log(positiveOnly);
} */

//
