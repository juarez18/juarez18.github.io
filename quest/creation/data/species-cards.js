const requestURL = '/quest/creation/data/species.json';

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    //console.table(jsonObject); 
    const species = jsonObject['species'];
    for (let i = 0; i < species.length; i++ ) {
        let card = document.createElement('section');
        let stats = document.createElement("div");
        let table = document.createElement("table")
        let attribute = document.createElement("tr")
        let stat = document.createElement("tr")
        let h2 = document.createElement('h2');
        let p1 = document.createElement("th");
        let p2 = document.createElement("th");
        let p3 = document.createElement("th");
        let p4 = document.createElement("th");
        let p5 = document.createElement("th");
        let p6 = document.createElement("th");
        let td1 = document.createElement("td")
        let td2 = document.createElement("td")
        let td3 = document.createElement("td")
        let td4 = document.createElement("td")
        let td5 = document.createElement("td")
        let td6 = document.createElement("td")
        let p7 = document.createElement("p");
        let p8 = document.createElement("p");
        let p9 = document.createElement("p");
        let p10 = document.createElement("p");
        let a1 = document.createElement("a");
        let img = document.createElement("img")

        h2.textContent = species[i].name;
        p1.textContent = "Brawn";
        p2.textContent = "Agility";
        p3.textContent = "Intellect"; 
        p4.textContent = "Cunning"; 
        p5.textContent = "Willpower";
        p6.textContent = "Presence";
        td1.textContent = species[i].Brawn;
        td2.textContent = species[i].Agility;
        td3.textContent = species[i].Intellect;
        td4.textContent = species[i].Cunning;
        td5.textContent = species[i].Willpower;
        td6.textContent = species[i].Presence;
        p7.textContent = "Wound Threshold: " + species[i].WoundThreshold + " + Brawn";
        p8.textContent = "Strain Threshold: " + species[i].StrainThreshold + " + Willpower";
        p9.textContent = "Starting Experience: " + species[i].StartingExperience;
        p10.textContent = "Special Abilities: " + species[i].SpecialAbility;
        a1.textContent = "For more information click here";
        a1.setAttribute('href', species[i].info);
        img.setAttribute('src', species[i].image);
        img.setAttribute('alt', species[i].name);

        card.appendChild(h2);
        attribute.appendChild(p1);
        attribute.appendChild(p2);
        attribute.appendChild(p3);
        attribute.appendChild(p4);
        attribute.appendChild(p5);
        attribute.appendChild(p6);
        stat.appendChild(td1);
        stat.appendChild(td2);
        stat.appendChild(td3);
        stat.appendChild(td4);
        stat.appendChild(td5);
        stat.appendChild(td6);
        table.appendChild(attribute);
        table.appendChild(stat);
        stats.appendChild(table);
        card.appendChild(stats);
        card.appendChild(p7);
        card.appendChild(p8);
        card.appendChild(p9);
        card.appendChild(p10);
        card.appendChild(a1);
        card.appendChild(img);

        document.querySelector('div.species').appendChild(card);
    }
  });