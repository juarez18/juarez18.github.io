var a = document.getElementById("currentTemp");
var b = document.getElementById("windSpeed"); 

var t = a.innerHTML.match(/\d+/g); 
var s = b.innerHTML.match(/\d+/g); 

if(t <= 50 && s >= 3){
var f = 35.74 + .6215 * t - 35.65 * Math.pow(s, 0.15) + .4275 * t * Math.pow(s , .16);
Math.round(f);

}

else{
    var f = "NA"
}
document.getElementById("windChill").innerHTML = f;