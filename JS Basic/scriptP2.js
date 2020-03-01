/*********************************
 * If else Statement
 * */

/* var firstName="John";
 var civilStatus="signle";

 if(civilStatus==="married"){
      console.log(firstName+" is married! ")
 }else{
     console.log(firstName+" will hopefully marry soon! ")
 }


 var isMarried=False
 if(isMarried){
    console.log(firstName+" is married! ")
}else{
   console.log(firstName+" will hopefully marry soon! ")
}
*/

/*********************************
 * Boolean Logic
 * */

/* var firstName="John";
 var age=16

if(age>13){
     console.log(firstName+" is a boy. ")
 }
else if(age>=13 && age<20){
    console.log(firstName+" is a teenager! ")
 }
 else if(age>=20 && age<30){
    console.log(firstName+" is a young man! ")
 }
else{
     console.log(firstName+" is a man")
 }*/

/*********************************
 * The Ternary Operator and Switch Statements
 * */

/*var firstName="John";
var age=16;

//Ternary Operator
age >= 18 ? console.log(firstName +" can drink Bear! ")
: console.log(firstName +" Not allowed to drink bear !")


var drink= age>=18 ? "bear" : "juice";
console.log(bear)

//Switch

var job="teacher";
switch(job){
    case "teacher":
        console.log(firstName+" teaches kids how to code ! ")
        break;
    case "driver":
        console.log(firstName+" drives an uber! ")
        break;
    case "designer":
        console.log(firstName +"Is A WebDesigner! ")
        break;
    default:
        console.log(firstName+" does something else.")    


}
*/

/*********************************
 * Truthy and Falsy Values and Equality Operators
 * */

/*//falsy values:undefined ,null ,0,"",NaN
//Truthy Values: Values That Are Not Fasly;

var height;
height=23;
 if (height){
     console.log("Variable is defined")
 }
 else{
     console.log("variable is not defined")
 }

var height;
height=0;
 if (height || height===0){
     console.log("Variable is defined")
 }
 else{
     console.log("variable is not defined")
 }*/

/*********************************
 * CODE CHALLENGE 2
 * */

var scoreJohn = (80 + 120 + 103) / 3;
var scoreMike = (116 + 94 + 123) / 3;
var scoreMary = (97 + 134 + 105) / 3;
console.log(scoreJohn, scoreMike, scoreMary);

/*if (scoreJohn>scoreMike){
     console.log("John Is The Winer With Score "+scoreJohn)
 }
 else if(scoreMike>scoreJohn){
    console.log("Mike Is The Winner With Score "+scoreMike)
 }
 else{
     console.log("Both teams Have A Tie")
 }*/

if (scoreJohn > scoreMike && scoreJohn > scoreMary) {
  console.log("John Is The Winer With Score " + scoreJohn);
} else if (scoreMike > scoreJohn && scoreMike > scoreMary) {
  console.log("Mike Is The Winner With Score " + scoreMike);
} else if (scoreMary > scoreJohn && scoreMary > scoreMike) {
  console.log("Mary Is The Winner With Score " + scoreMary);
} else {
  console.log("There Is A Draw");
}
