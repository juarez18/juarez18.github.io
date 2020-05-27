
let options = {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric"
};

var d = new Date();
var n = d.toLocaleDateString(en-US, options);

document.getElementById("currentdate").innerHTML = n;
 