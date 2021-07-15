


function sum() {
  let sum = 0;
  console.log(arguments);
  for (let i = 0; i < arguments.length; i++) {
    sum = sum + arguments[i];
  }
  document.getElementById("h3prob1").innerHTML = "Ruleaza problema 1. Rezultat:" + sum;
  return sum;
}









function fibonnaci(n,prev=0,next=1) {
  
  if(next>n&&(Math.abs(n-next)<Math.abs(n-prev))){
    return next;
  }
  if(next>n&&(Math.abs(n-next)>Math.abs(n-prev))){
    return prev;
  }
  
  let aux=prev;
  prev=next;
  next=next+aux;
  
  return fibonnaci(n,prev,next);
}
function runFib(){
  const n=document.getElementById("FibN").value;
  let x=fibonnaci(n);
  console.log(x);
  
  document.getElementById("h3prob2").innerHTML="Ruleaza problema 2. Rezultat:" + x;
}






function createLeak(){
  while(true){
    console.log("Leak");
  }
}
const string =new Array(20).join("A");
function alertString(){
  alert(string);
}
document.getElementById("h4prob3").addEventListener("click",function(){
  alertString();
})
// function exampleLeak(){
//   const person={
//     age:0,
//     friends: new Array(50000).join("Adrian")
//   }
//   return function abc(){
//     person.age++;
//     console.log(JSON.stringify(person));
//   }
// }
// function createSecondLeak(){
//   setInterval(exampleLeak(),3000);
// }