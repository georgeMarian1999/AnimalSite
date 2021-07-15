function showDate(){
  const week={
    0: "Duminica",
    1: "Luni",
    2:"Marti",
    3:"Miercuri",
    4: "Joi",
    5:"Vineri",
    6: "Sambata",
  }
  let crtDate=new Date();
  let day="Today is : " +week[crtDate.getDay()]+" \n";
  let hours=Number(crtDate.getHours())-12;
  let AMPM=crtDate.getHours()>12 ? "PM":"AM";
  let hour= "Current time is : "+hours+" "+AMPM+" : "+crtDate.getMinutes()+ " : "+crtDate.getSeconds()+ " ";
  document.getElementById("data").innerHTML = day+hour;
}
function crtWindow(){
  window.print();
}
function printDate(){
  const date=new Date();
  let data=date.getFullYear()+"-"+date.getMonth()+"-"+date.getDate();
  document.getElementById("data1").innerHTML = data;
}
function area(a,b,c){
  a=Number(a);
  b=Number(b);
  c=Number(c)
  let s=(a+b+c)/2;
  console.log(s);
  let val=s*(s-a)*(s-b)*(s-c);
  let area=Math.sqrt(val);
  return area
}
function calculateArea(){
  let a=document.getElementById("a").value;
  let b=document.getElementById("b").value;
  let c=document.getElementById("c").value;
  document.getElementById("area").innerHTML=area(a,b,c);
}
function rotate(){
  string=document.getElementById("rotate").innerText;
  let array=string.split("");
  let last=array[array.length-1];
  for(let i=array.length-1;i>0;i--){
    array[i]=array[i-1];
  }
  array[0]=last;
  document.getElementById("rotate").innerHTML=array.join("");
}
function leapYear(year){

  if(year%4===0){
    if(year%100===0){
      if(year%400===0){
        return true;
      }
      else return false;
    }
    else return true;
  }
  else return false;
}
function checkYear(){
  let year=Number(document.getElementById("year").value);
  if(leapYear(year)){
    alert("Its a leap year");
  }
  else alert("Its not a leap year");
}
function firstJan(){
  for(let i=2014;i<=2050;i++){
    let date=new Date(i,0,1);
    if(date.getDay()==0){
      console.log("1st January is a sunday in the year "+i);
    }
  }
}
const secretNumber=Math.floor(Math.random() * 11);
function guessNumber(){
  n=document.getElementById("guess").value;
  console.log(secretNumber);
  if(n==secretNumber)
    alert("Good Work");
  else alert("Not matched");
}
function multiply(a,b){
  return a*b;
}
function divide(a,b){
  return a/b;
}
function calculate(callback){
  let a=document.getElementById("1stNum").value;
  let b=document.getElementById("2ndNum").value;
  let res=callback(a,b);
  document.getElementById("result").innerHTML="The result is "+res;
}
function convertCelsius(){
  let c=document.getElementById("celsius").value;
  let fahren=document.getElementById("faren");
  let res=(9*c)/5 +32;
  fahren.value=res;
}
function convertFahren(){
  let c=document.getElementById("celsius");
  let fahren=document.getElementById("faren").value;
  let res=5*(fahren-32)/9;
  c.value=res;
}
function showURL(){
  alert(window.location.href);
}