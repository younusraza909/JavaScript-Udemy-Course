/***************************
 * Objects and Properties
 */

 /*var john={
    firstName:"John",
    lastName:"Smith",
    birthYear:1990,
    family:["Jane","Mark","Bob","Emily"],
    job:"teacher",
    isMarried:false 
 };

 console.log(john.firstName);
 console.log(john["lastName"]);
 var x='birthYear'
 console.log(john[x]);

john.job="designer"
john["isMarried"]=true;
console.log(john)

var jane=new Object()
jane.name="Jane"
jane.birthYear=1969;
jane["lastname"]="Smith"

console.log(jane)*/

/*************************
 * Objects Methods
 */

/*var john={
    firstName:"John",
    lastName:"Smith",
    birthYear:1990,
    family:["Jane","Mark","Bob","Emily"],
    job:"teacher",
    isMarried:false ,
    calcAge:function(){
        this.age=2020-this.birthYear
    }
 };

john.calcAge()

console.log(john)
*/

/****************************
 * Coding Challenge Part 4
 */
/*
var john={
    name:"John",
    height:1.67,
    weight:90,
    calBMI: function(){
        this.BMI=(this.weight/(this.height*this.height))
    }
}
var mark={
    name:"Mark",
    height:1.64,
    weight:80,
    calBMI: function(){
        this.BMI=(this.weight/(this.height*this.height))
}
}

mark.calBMI()
john.calBMI()


if(mark.BMI>john.BMI){
    console.log(mark.name +" Has Higher BMI With"+mark.BMI)
}

else if(john.BMI>mark.BMI){
    console.log(john.name +" Has Higher BMI With"+john.BMI)
}

else{
    console.log("Both Have Same BMI")
}



*/