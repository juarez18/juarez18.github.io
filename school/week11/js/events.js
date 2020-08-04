
const requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    //console.table(jsonObject); 
    const town = jsonObject['towns'];
    
    for (let i = 0; i < town.length; i++ ) {
        if(town[i].name == "Preston"){
        let event1 = document.createElement('section');
        let event2 = document.createElement('section');
        let event3 = document.createElement('section');
        let p1 = document.createElement("p");
        let p2 = document.createElement("p");
        let p3 = document.createElement("p");

        p1.textContent = town[i].events[0];
        p2.textContent = town[i].events[1];
        p3.textContent = town[i].events[2];

        event1.appendChild(p1);
        event2.appendChild(p2);
        event3.appendChild(p3);

        document.querySelector('div.events').appendChild(event1);
        document.querySelector('div.events').appendChild(event2);        
        document.querySelector('div.events').appendChild(event3);                

        }

        else{

        }
    }
  });
