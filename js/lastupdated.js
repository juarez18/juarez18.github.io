
try{
    let options = {
        weekday: "long",
        day: "numberic",
        month: "long",
        year: "numeric"
    };
    document.getElementById(
        "updateddate"
    ).textContent = new Date().toLocaleDateString("en-US", options);
} catch(e){
    alert("Error with code or your browser does not support Locale");
}


