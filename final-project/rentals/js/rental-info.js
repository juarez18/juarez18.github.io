const requestURL = '/final-project/rentals/js/rental-data.json';

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    //console.table(jsonObject); 
    const scooters = jsonObject['rentals'];
    for (let i = 0; i < scooters.length; i++ ) {
        let card = document.createElement('section');
        let h2 = document.createElement('h2');
        let p1 = document.createElement("p");
        let p2 = document.createElement("p");
        let p3 = document.createElement("p");
        let p4 = document.createElement("p");
        let p5 = document.createElement("p");
        let image = document.createElement("img");

        h2.textContent = scooters[i].name;
        p1.textContent = "Max Riders: " + scooters[i].maxpersons;
        p2.textContent = "Reservation for half day: " + scooters[i].reservationHalf + "$";
        p3.textContent = "Reservation for full day: " + scooters[i].reservationFull + "$";
        p4.textContent = "Walk-in for half day: " + scooters[i].walkinHalf + "$";
        p5.textContent = "Walk-in for full day: " + scooters[i].walkinFull + "$";
        image.setAttribute('src', scooters[i].image);
        image.setAttribute("alt" , scooters[i].name);


        card.appendChild(h2);
        card.appendChild(p1);
        card.appendChild(p2);
        card.appendChild(p3);
        card.appendChild(p4);
        card.appendChild(p5);
        card.appendChild(image);

        document.querySelector('div.rental-cards').appendChild(card);
    }
  });