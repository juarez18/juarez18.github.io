const apiURL = 'https://api.openweathermap.org/data/2.5/weather?id=3530103&APPID=d33a8675f110e5b4841a398b0c90d2e5&units=imperial';

fetch(apiURL)
    .then((response) => response.json())
    .then((jsObject) => {
        //console.log(jsObject);
        document.getElementById('conditions').textContent = jsObject.weather[0].main;
        document.getElementById('currentTemp').textContent = jsObject.main.temp;
        document.getElementById('humidity').textContent = jsObject.main.humidity + "%";
    });

const forecastapi = 'https://api.openweathermap.org/data/2.5/forecast?id=5604473&APPID=d33a8675f110e5b4841a398b0c90d2e5&units=imperial';

fetch(forecastapi)
    .then((response) => response.json())
    .then((jsObject1) => {
        //console.log(jsObject1);

        const fivedayforecast = jsObject1.list.filter(x => x.dt_txt.includes("18:00:00"));
        //console.log(fivedayforecast);
        const weekdays = ["Sun" , "Mon" , "Tue" , "Wed", "Thu" , "Fri" ,"Sat"]
        let day = 1;
        
        fivedayforecast.forEach(forecast =>{
            let daytemp = "day${day}Temp";
            document.getElementById("day" + day + "Temp").textContent = forecast.main.temp;
            let d = new Date(forecast.dt_txt);
            document.getElementById("dayOfWeek" + day).textContent = weekdays[d.getDay()];
            const imagesrc = 'https://openweathermap.org/img/w/' + forecast.weather[0].icon + '.png';
            const desc = forecast.weather[0].description; 
            document.getElementById("day" + day + "img").setAttribute('src' , imagesrc);
            document.getElementById("day" + day + "img").setAttribute('alt' , desc);
            day++;
        });

    });