var i = 0;

var images = [];
var time = 5000;

images[0] = "/final-project/home/images/banner-img-1.jpg"
images[1] = "/final-project/home/images/banner-img-2.jpg"
images[2] = "/final-project/home/images/banner-img-3.jpg"

function changeImg(){
    document.getElementById("slide").src = images[i];

    if(i < images.length - 1){
        i++;
    }
    else{
        i = 0;
    }


    setTimeout("changeImg()" , time);
}

window.onload = changeImg;