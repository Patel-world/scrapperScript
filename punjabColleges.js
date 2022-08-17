const para1 = document.createElement("script");
para1.src = "https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js";
document.head.appendChild(para1);

var mainArray = [];

var len = document.querySelector("#main-container > div.container > div > ol")
  .childNodes.length;

for (var i = 1; i <= len; i++) {
  var y =
    "#main-container > div.container > div > ol > li:nth-child(" + i + ") > a";

  var x = document.querySelector(y).href;

  mainArray.push(x);
  localStorage.setItem("mainArray", JSON.stringify(mainArray));
}




var i = 0;
var mainArra = [];
function aglacollege(clgnum) {
  var x = localStorage.getItem("mainArray");
  let obj = JSON.parse(x);
  var n = obj.length;
  var z = obj[clgnum];
  var ur = z.split("/");
  var clgval = {};
  var urc = "https://www.punjabcolleges.com/" + ur[3];
  if(ur[3]=="UP"){
      var urc = "https://www.punjabcolleges.com/UP/Engg/Lucknow/"+ ur[6];

  }
  
  

  $.get( urc, function( html ) {

    // Loop through elements you want to scrape content from
    

        // Do something with content
               

clgval["InstituteName"] = $(html).find("#main-container > div > div > div > dfn").text() ?? "";
clgval["contact1"] = $(html).find("#main-container > div > div > div").html() ?? "";






        


   
    setTimeout(function () {
      mainArra.push(clgval);
      localStorage.setItem("mainArra", JSON.stringify(mainArra));
      console.log("Waiting....");
      if (clgnum <= n) {
        aglacollege(clgnum + 1);
      }
    }, 2000);
  });
}

aglacollege(i);
