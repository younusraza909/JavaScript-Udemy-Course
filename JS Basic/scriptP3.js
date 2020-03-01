/***************************
 * Function
 */

/*function calculateAge(birthYear){
    return 2020-birthYear;
}

var ageRaza = calculateAge(2000)
var ageMike = calculateAge(1990)
var ageJane = calculateAge(1999)
console.log(ageRaza,ageMike,ageJane)

function yearsUntilRetirment (Year,FirstName){
    var age=calculateAge(Year)
    var retirment =65-age;

    if(retirment>0){
        console.log(FirstName+" Retires in "+retirment+'years . ')
    }
    else{
        console.log("Already Retired")
    }
}*/

/***************************
 * Functions Statements and Expression
 */
//Function Expression
/*var whatDoYouDo=function(job,firstName){
    switch(job){
        case "teacher":
            return firstName+" teaches kid how to code! "
        case "driver":
            return firstName+" Is An Uber Driver! "
        case "designer":
            return firstName+" Is A Passionate WebDesigner "
        default:
            return firstName+"Does Something Else"
    }
}

console.log(whatDoYouDo("teacher","John"));
console.log(whatDoYouDo("designer","Jane"));
console.log(whatDoYouDo("retired","Mike"));*/

/***************************
 * Arrays
 */

/*var names=["John","Mark","Jane"];
var years=new Array(1990,1969,1948);

console.log(names[0]);
console.log(names.length);

names[1]="Ben";
console.log(names);

names[5]="Marry"
console.log(names)

names[names.length]="Mary"
console.log(names)

//Different DataTypes

var john=["John","Smith",1990,"teacher",false]

john.push("Blue");//Adding Element At The End Of Array
console.log(john)

john.unshift("Mr.")//Added Element to the Start of array

john.pop()//removes element from end of array

john.shift()//removes first element from Array

console.log(john.indexOf(1990));//return postition of elelment in array but will return -1 if not present
*/

/***************************
 * Coding Challenge 3
 */
var tip = [];
var TotalBillPaid = [];

function tipCalculator(BillAmount) {
  if (BillAmount < 50) {
    TotalBillPaid.push(BillAmount + BillAmount * 0.2);
    tip.push(BillAmount * 0.2);
  } else if (BillAmount >= 50 && BillAmount <= 200) {
    TotalBillPaid.push(BillAmount + BillAmount * 0.15);
    tip.push(BillAmount * 0.15);
  } else {
    TotalBillPaid.push(BillAmount + BillAmount * 0.1);
    tip.push(BillAmount * 0.1);
  }
}

tipCalculator(48);
tipCalculator(120);
tipCalculator(505);

console.log(tip);
console.log(TotalBillPaid);
