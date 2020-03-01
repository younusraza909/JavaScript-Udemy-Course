/**************************
 * Loops and Iteration
 */
/*
for(var i=1; i<=20;i+=2){
    console.log(i)
}


var john=["John","Smith",1989,"designer",false]

for (var i=0;i<john.length;i++){
    console.log(john[i])
}
*/
///While Loopp

/*var john=["John","Smith",1989,"designer",false]

var i=0;
while(i<john.length){
    console.log(john[i])
    i++;
}*/

//Continue Statement and Break Statement

//var john = ["John", "Smith", 1989, "designer", false];

/*for (var i = 0; i < john.length; i++) {
  if (typeof john[i] !== "string") {
    continue;
  }

  console.log(john[i]);
}*/

/*for (var i = 0; i < john.length; i++) {
    if (typeof john[i] !== "string") {
      break;
    }
  
    console.log(john[i]);
  }*/

//Lopping Backward
/*for(var i=john.length-1; i>=0; i--){
      console.log(john[i])
  }*/

//Coding Challenge Part 5
//Part i
/* var john={
      bills:[124,48,268,180,42],
      tipsPaid:[],
      totalBillsPaid:[],
      tipCalc:function(){
          for(var i=0;i<this.bills.length;i++){
              if(this.bills[i]<50){
                  this.tipsPaid[i]=this.bills[i]*0.2;
                  this.totalBillsPaid[i]=this.bills[i]+this.tipsPaid[i]
              }
              else if(this.bills[i]>=50 && this.bills[i]<=200){
                this.tipsPaid[i]=this.bills[i]*0.15;
                this.totalBillsPaid[i]=this.bills[i]+this.tipsPaid[i]
              }
              else{
                this.tipsPaid[i]=this.bills[i]*0.10;
                this.totalBillsPaid[i]=this.bills[i]+this.tipsPaid[i]
              }
          }
      }
}

john.tipCalc()

console.log(john)
*/
//Partii
/*var mark={
    bills:[77,375,110,45],
    tipsPaid:[],
    totalBillsPaid:[],
    tipCalc:function(){
        for(var i=0;i<this.bills.length;i++){
            if(this.bills[i]<100){
                this.tipsPaid[i]=this.bills[i]*0.2;
                this.totalBillsPaid[i]=this.bills[i]+this.tipsPaid[i]
            }
            else if(this.bills[i]>=100 && this.bills[i]<=300){
              this.tipsPaid[i]=this.bills[i]*0.10;
              this.totalBillsPaid[i]=this.bills[i]+this.tipsPaid[i]
            }
            else{
              this.tipsPaid[i]=this.bills[i]*0.25;
              this.totalBillsPaid[i]=this.bills[i]+this.tipsPaid[i]
            }
        }
    }
}

mark.tipCalc()
// console.log(mark)

var avgTip=0
function avg(tiparray){
    for (var i=0;i<tiparray.length;i++){
        avgTip+=tiparray[i]
    }
}

avg(mark.tipsPaid)
avgTip=avgTip/mark.tipsPaid.length

console.log(avgTip)*/
