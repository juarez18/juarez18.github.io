let today = new Date();
    let day = today.getDay();
    var daylist = ["Sunday" , "Monday" , "Tuesday" ,
                    "Wednesday" , "Thursday" , "Friday" ,
                    "Saturday"]

    if(daylist[day] == "Tuesday"){
        document.getElementsByClassName("friday-event").style.display = 'block';
    }