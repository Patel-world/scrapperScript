const para1 = document.createElement("script");
para1.src = "https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js";
document.head.appendChild(para1);
var ff = setInterval(function(){

if(window.jQuery)
{
    console.log("yes");
	part1();
    clearInterval(ff);
}
    else{
        console.log("abhi nahi")
    }
    
    
},50);



var mainArray = [];

function part1(){

var j = 1

function udemy(j){
    for (var i = 1; i <= 100; i++) {
  var y =
    "#myTable > tbody > tr:nth-child(" + i + ") > td > div > div.col-8 > a";

  var x = document.querySelector(y).href;

  mainArray.push(x);
  localStorage.setItem("mainArray", JSON.stringify(mainArray));
}
var k = j+1
var temp = "#myTable_paginate > span > a:nth-child("+ k + ")";
document.querySelector(temp).click();
setTimeout(function () {
      
     if(j<=2){
    udemy(j+1);
}
    }, 2000);




}
udemy(j)
}
