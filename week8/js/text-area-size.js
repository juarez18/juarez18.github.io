w = document.documentElement.clientWidth || document.body.clientWidth || window.innerWidth;
var targetMedWidth = 1150;
var targgetSmallWidth = 750;
if ( w >= targetMedWidth){     
    document.getElementById("info-area").columns = 80;
}

else if(w >= targetSmallWidth){

    document.getElementById("info-area").columns = 40;
}
else {
 
}
