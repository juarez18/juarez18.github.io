const requestURL = '/quest/creation/data/careers.json';

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    //console.table(jsonObject); 
    const careers = jsonObject['careers'];
    for (let i = 0; i < careers.length; i++ ) {
        let card = document.createElement('section');
        let h2 = document.createElement("h2");
        let p1 = document.createElement("p");
        h2.textContent = careers[i].career;
        p1.textContent = "Career Skills: " + careers[i].skill1 + " " + careers[i].skill2 + " " + careers[i].skill3 + " " + careers[i].skill4 + " "  + careers[i].skill5 + " "+ careers[i].skill6 + " "+ careers[i].skill7 + " "+ careers[i].skill8;
        
        card.appendChild(h2);
        card.appendChild(p1);

        for(let x = 0; x < careers[i].specializations.length; x++){
            let specials = document.createElement("div");

            let h = document.createElement("h3");
            let p2= document.createElement("p");
            let a1 = document.createElement("a");

            h.textContent = careers[i].specializations[x].name;
            p2.textContent = "Bonus Specializations skills: " + careers[i].specializations[x].bonusSkill1 + " " + careers[i].specializations[x].bonusSkill2 + " " + careers[i].specializations[x].bonusSkill3 + " " + careers[i].specializations[x].bonusSkill4;
            a1.textContent = "Skill Tree";
            a1.setAttribute('href', careers[i].specializations[x].talentTree);

            specials.appendChild(h);
            specials.appendChild(p2);
            specials.appendChild(a1);
            card.appendChild(specials);

        }
        
        document.querySelector('div.careers').appendChild(card);
    }
  });