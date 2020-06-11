var a = document.getElementById("currentTemp");
var b = document.getElementById("windSpeed"); 

var t = a.innerHTML.match(/\d+/g); 
var s = b.innerHTML.match(/\d+/g); 


var f = 35.74 + .6215 * t - 35.65 * Math.pow(s, 0.15) + .4275 * t * Math.pow(s , .16);

document.getElementById("windChill").innerHTML = f;