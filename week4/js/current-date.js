try{
    let options = {
        weekday: "long",
        day: "numeric",
        month: "long",
        year: "numeric"
    };

document.getElementById("current-date").innerHTML = new Date().toLocaleDateString(en-URLSearchParams, options);

} catch (e){
    alert("Error with code or your browser does not support Locale");
}