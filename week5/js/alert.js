let today = new Date();
    let day = today.getDay();
    var daylist = ["Sunday" , "Monday" , "Tuesday" ,
                    "Wednesday" , "Thursday" , "Friday" ,
                    "Saturday"]

    if(daylist[day] == "Monday"){
        document.getElementsByClassName("friday-event").style.display = "block";
    }