var wrapperEle = document.body.querySelector(".wrapper")
var first = Number(prompt("enter first number"))
if (isNaN(first)){
  wrapperEle.innerHTML= "not a number, try again"
  process.exit 
}
var operator =prompt("enter an operator")
var second = Number(prompt("enter second number"))
if (isNaN(second)){
  wrapperEle.innerHTML= "not a number, try again"
  process.exit
}
if( "+" == operator){wrapperEle.innerHTML=first+second}
else if("-"==operator){
  wrapperEle.innerHTML=first - second
}else if("/"==operator){
  wrapperEle.innerHTML=first / second
 }else if("x"==operator){
  wrapperEle.innerHTML= first * second  
}else{
  wrapperEle.innerHTML= "not an operator, please try again"
}