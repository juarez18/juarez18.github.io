let townImagesArray = new Array();
townImagesArray[0] = "/week9/images/fish-haven-img-final.jpg";
townImagesArray[1] = "/week9/images/preston-img-final.jpg";
townImagesArray[2] = "/week9/images/soda-springs-img-final.jpg";

let x = 0;

const requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    //console.table(jsonObject); 
    const town = jsonObject['towns'];
    
    for (let i = 0; i < town.length; i++ ) {
        if(town[i].name == 'Fish Haven' || town[i].name == "Soda Springs" || town[i].name == "Preston"){
        let townInfo = document.createElement('section');
        let h2 = document.createElement('h2');
        let h3 = document.createElement('h3');
        let p1 = document.createElement("p");
        let p2 = document.createElement("p");
        let p3 = document.createElement("p");
        let image = document.createElement("img");

        h2.textContent = town[i].name;
        h3.textContent = town[i].motto;
        p1.textContent = "Year  Founded: " + town[i].yearFounded;
        p2.textContent = "Current Population: " + town[i].currentPopulation;
        p3.textContent = "Annual Rain Fall: " + town[i].averageRainfall;
        image.setAttribute("src", townImagesArray[x]);
        x++;
        image.setAttribute("alt" , town[i].name);


        townInfo.appendChild(h2);
        townInfo.appendChild(h3);
        townInfo.appendChild(p1);
        townInfo.appendChild(p2);
        townInfo.appendChild(p3);
        townInfo.appendChild(image);

        document.querySelector('div.town-info').appendChild(townInfo);
        }

        else{

        }
    }
  });
