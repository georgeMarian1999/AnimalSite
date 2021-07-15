function cartesian(set1,set2,set3){
  let sets = [];
  for(let i=0;i<set1.length;i++){
    for(let j=0;j<set2.length;j++){
      for(let k=0;k<set3.length;k++){
        const newSet = new Set();
        newSet.add(set1[i]);
        newSet.add(set2[j]);
        newSet.add(set3[k]);
        sets.push(Array.from(newSet));
      }
    }
  }
  return sets;
}
function executeCartesian(){
  let set1 = [1,2];
  let set2 = [3,4,5];
  let set3 = [2,1];
  console.log(cartesian(set1,set2,set3));
}











//var variables are scoped for function body not the block scope
//i is accesbile even after for cycle ended and remains the last value 11
// all the functions inside are gonna console log 11. The last known value for i
function wrong(){
  var table=[];

  for(var i=0;i<=10;i++){
    table[i]=function (){
        console.log(i);
    }
  }
 
  var table1=table[1];
  var table2=table[2];
  var table3=table[3];
  
  table1();//afiseaza 11
  table2();//afiseaza 11
  table3();//afiseaza 11
}
//First solution is to replace the var with let. 
//let variables are block scope, so after for cycle ends the variable is no longer accesible 

function right1(){
  var table = [];

  for(let i = 0; i <= 10; i++){
    table[i]=function (){
        console.log(i);
    }
  }
  
 
  var table1 = table[1];
  var table2 = table[2];
  var table3 = table[3];
  
  table1();//afiseaza 1
  table2();//afiseaza 2
  table3();//afiseaza 3
}





function right2(){
  var table = function func(x){
    function display(){
      console.log(x);
    }
    return display;
  }
  var table1 = table(1);
  var table2 = table(2);
  var table3 = table(3);

  table1();//afiseaza 1
  table2();//afiseaza 2
  table3();//afiseaza 3
}

